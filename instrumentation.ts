import * as Sentry from "@sentry/nextjs";

export function register() {
  Sentry.init({
    dsn: "https://44c2967d24b9aca7a55fa7d2544816a3@o4508575403212800.ingest.de.sentry.io/4508575416975440",
    tracesSampleRate: 1.0, // Ajustez selon vos besoins
    debug: false, // Désactiver en production
  });
}
