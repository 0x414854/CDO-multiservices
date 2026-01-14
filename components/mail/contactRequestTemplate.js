export function contactRequestTemplate({
  firstName,
  lastName,
  email,
  phone,
  company,
  service, // clé du service
  message,
  photoUrl,
}) {
  // Mapping des clés vers les libellés
  const serviceLabels = {
    general: "Général",
    windows: "Nettoyage de vitres",
    office: "Nettoyage de bureaux",
    concierge: "Conciergerie",
    maid: "Femme de ménage",
    spring: "Nettoyage de printemps",
    construction: "Nettoyage après construction",
    endOfLease: "Nettoyage de fin de bail",
  };

  const serviceLabel = serviceLabels[service] || service;

  return `
  <!DOCTYPE html>
  <html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouvelle demande de contact</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:20px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 0 10px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <tr>
              <td style="background-color:#0070f3; padding:20px; text-align:center; color:#ffffff;">
                <h2 style="margin:0; font-size:24px;">Nouvelle demande de contact</h2>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:20px; color:#333333; font-size:16px; line-height:1.5;">
                <p><strong>Prénom :</strong> ${firstName}</p>
                <p><strong>Nom :</strong> ${lastName}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Téléphone :</strong> ${phone}</p>
                <p><strong>Entreprise :</strong> ${company || "—"}</p>
                <p><strong>Service demandé :</strong> ${serviceLabel}</p>
                <p><strong>Message :</strong><br>${message}</p>

                ${
                  photoUrl
                    ? `<p><strong>Photo envoyée :</strong></p>
                       <img src="${photoUrl}" alt="Photo" style="max-width:100%; border-radius:8px;" />`
                    : "<p>Aucune photo envoyée.</p>"
                }
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#f0f0f0; padding:15px; text-align:center; font-size:12px; color:#666;">
                <p>Ce mail a été envoyé depuis le formulaire de contact du site CDO.</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}
