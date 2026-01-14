import { v2 as cloudinary } from "cloudinary";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { contactRequestTemplate } from "@/components/mail/contactRequestTemplate";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const resend = new Resend(process.env.RESEND_API_KEY);

// Fonction utilitaire pour uploader un buffer vers Cloudinary
const streamUpload = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "contact-uploads" },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    stream.end(buffer);
  });
};

export async function POST(req) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const company = formData.get("company");
    const service = formData.get("service");
    const message = formData.get("message");
    const consentValue = formData.get("consent");
    const consent = consentValue === "true" || consentValue === "on";

    const file = formData.get("photo");

    let photoUrl = null;

    // UPLOAD CLOUDINARY
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uploaded = await streamUpload(buffer);
      photoUrl = uploaded.secure_url;
    }

    // SAVE DB
    await prisma.contactRequest.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        company,
        service,
        message,
        consent,
        photoUrl,
      },
    });

    // SEND EMAIL
    await resend.emails.send({
      from: "Site CDO <onboarding@resend.dev>",
      to: "ath.tes@proton.me",
      subject: `Nouvelle demande de contact - ${firstName} ${lastName}`,
      html: contactRequestTemplate({
        firstName,
        lastName,
        email,
        phone,
        company,
        service,
        message,
        photoUrl,
      }),
    });

    return Response.json({
      success: true,
      message: "Votre formulaire a été envoyé avec succès !",
    });
  } catch (error) {
    console.error("Erreur contact API:", error);
    return Response.json(
      {
        success: false,
        message: "Une erreur est survenue. Merci de réessayer plus tard.",
      },
      { status: 500 }
    );
  }
}
