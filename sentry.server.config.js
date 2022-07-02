// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    // eslint-disable-next-line
    SENTRY_DSN ||
    'https://6070ebe1c8b7469aab1dc8b17c03703c@o1304311.ingest.sentry.io/6544676',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0.25,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
