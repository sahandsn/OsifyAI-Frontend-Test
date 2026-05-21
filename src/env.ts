import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import { zOrganization } from "./client/zod.gen";

const zAvailable = z.enum(["true", "limited", "false"]);
const zLocale = z.enum(["fa", "en", "de"]);
const zTimezone = zOrganization.shape.timezone;

export const env = createEnv({
  client: {
    NEXT_PUBLIC_ROOT_URL: z.url(),
    NEXT_PUBLIC_API_URL: z.url(),
    NEXT_PUBLIC_FIREBASE_apiKey: z.string(),
    NEXT_PUBLIC_FIREBASE_authDomain: z.string(),
    NEXT_PUBLIC_FIREBASE_projectId: z.string(),
    NEXT_PUBLIC_FIREBASE_storageBucket: z.string(),
    NEXT_PUBLIC_FIREBASE_messagingSenderId: z.string(),
    NEXT_PUBLIC_FIREBASE_appId: z.string(),
    NEXT_PUBLIC_FIREBASE_measurementId: z.string(),
    NEXT_PUBLIC_FIREBASE_vapidKey: z.string(),
    NEXT_PUBLIC_API_URL_WS: z.url(),
    NEXT_PUBLIC_APP_AVAILABLE: zAvailable,
    NEXT_PUBLIC_LANDING_AVAILABLE: zAvailable,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string(),
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string(),
    NEXT_PUBLIC_DEFAULT_LOCALE_KEY: zLocale,
    NEXT_PUBLIC_DEFAULT_Timezone: zTimezone,
    NEXT_PUBLIC_DISABLE_DEVTOOLS_HASH: z
      .union([z.hash("md5"), z.literal("")])
      .optional(),
    NEXT_PUBLIC_RECAPTCHA_GA_AVAILABLE: zAvailable,
    NEXT_PUBLIC_FCM_AVAILABLE: zAvailable,
  },
  runtimeEnv: {
    NEXT_PUBLIC_ROOT_URL: process.env.NEXT_PUBLIC_ROOT_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_FIREBASE_apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey,
    NEXT_PUBLIC_FIREBASE_authDomain:
      process.env.NEXT_PUBLIC_FIREBASE_authDomain,
    NEXT_PUBLIC_FIREBASE_projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
    NEXT_PUBLIC_FIREBASE_storageBucket:
      process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
    NEXT_PUBLIC_FIREBASE_messagingSenderId:
      process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
    NEXT_PUBLIC_FIREBASE_appId: process.env.NEXT_PUBLIC_FIREBASE_appId,
    NEXT_PUBLIC_FIREBASE_measurementId:
      process.env.NEXT_PUBLIC_FIREBASE_measurementId,
    NEXT_PUBLIC_FIREBASE_vapidKey: process.env.NEXT_PUBLIC_FIREBASE_vapidKey,
    NEXT_PUBLIC_APP_AVAILABLE: process.env.NEXT_PUBLIC_APP_AVAILABLE,
    NEXT_PUBLIC_LANDING_AVAILABLE: process.env.NEXT_PUBLIC_LANDING_AVAILABLE,
    NEXT_PUBLIC_API_URL_WS: process.env.NEXT_PUBLIC_API_URL_WS,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    NEXT_PUBLIC_DEFAULT_LOCALE_KEY: process.env.NEXT_PUBLIC_DEFAULT_LOCALE_KEY,
    NEXT_PUBLIC_DISABLE_DEVTOOLS_HASH:
      process.env.NEXT_PUBLIC_DISABLE_DEVTOOLS_HASH,
    NEXT_PUBLIC_RECAPTCHA_GA_AVAILABLE:
      process.env.NEXT_PUBLIC_RECAPTCHA_GA_AVAILABLE,
    NEXT_PUBLIC_FCM_AVAILABLE: process.env.NEXT_PUBLIC_FCM_AVAILABLE,
    NEXT_PUBLIC_DEFAULT_Timezone: process.env.NEXT_PUBLIC_DEFAULT_Timezone,
  },
});
