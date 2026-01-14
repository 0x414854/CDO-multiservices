import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://rest-api.renovero.ch/public/account/**")],
  },
  serverActions: {
    bodySizeLimit: "5mb", // ← augmente la limite pour les Server Actions
  },
  api: {
    bodyParser: {
      sizeLimit: "5mb", // ← augmente la limite des routes API
    },
  },
};

export default withNextIntl(nextConfig);
