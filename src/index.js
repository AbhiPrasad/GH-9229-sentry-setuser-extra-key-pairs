import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

Sentry.setUser({
  segment: "alpha",
});

Sentry.captureException(new Error("this better have a segment"));
