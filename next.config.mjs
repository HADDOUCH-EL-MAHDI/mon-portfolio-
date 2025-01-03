import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true, // Ignore les erreurs de TypeScript
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore les erreurs ESLint pendant le build
  },
  reactStrictMode: true, // (Optionnel) Active le mode strict React
};

const sentryWebpackPluginOptions = {
  silent: true, // Réduit les logs inutiles
  org: "haddouch", // Nom de votre organisation Sentry
  project: "haddouchportfolio", // Nom de votre projet Sentry
  sourcemaps: {
    deleteSourcemapsAfterUpload: true, // Supprime les source maps après upload
  },
};

export default withSentryConfig(
  nextConfig, 
  {
    // Organisation et projet pour Sentry
    org: "haddouch",
    project: "haddouchportfolio",

    // Réduit les logs en dehors de CI
    silent: !process.env.CI,

    // Étend le set de source maps pour des traces d'erreurs plus détaillées
    widenClientFileUpload: true,

    // Annoter automatiquement les composants React
    reactComponentAnnotation: {
      enabled: true,
    },

    // Supprime la configuration du tunnel pour éviter les erreurs CORS
    // tunnelRoute: "/monitoring", 

    // Cache les source maps des bundles générés
    hideSourceMaps: true,

    // Réduit la taille des bundles en supprimant les logs Sentry
    disableLogger: true,

    // Moniteurs automatiques pour les tâches cron sur Vercel
    automaticVercelMonitors: true,

    // Ajout de la configuration authToken pour Sentry
    authToken: process.env.SENTRY_AUTH_TOKEN || "",

    // Désactivation de la télémétrie Sentry
    telemetry: false,
  }
);
