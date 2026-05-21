import { getTitle } from "@/constants/assets";
import { MetadataRoute } from "next";
import { env } from "@/env";
import pwaIcon from "#/branding/pwa-icon.png";
import heroImg from "#/branding/hero.png";
import heroDarkImg from "#/branding/hero-dark.png";
import displaysImg from "#/branding/displays.png";
import tabletImg from "#/branding/tablet.png";
import mobileImg from "#/branding/mobile.png";
import faMessages from "../../messages/fa.json";
import { defaultLocale } from "@/i18n/routing";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const title = getTitle(defaultLocale.key);
  return {
    short_name: title,
    name: title,
    description: faMessages.Metadata.root.description,
    icons: [
      {
        src: pwaIcon.src,
        sizes: `${pwaIcon.width}x${pwaIcon.height}`,
        type: "image/png",
      },
    ],
    theme_color: "#FFFFFF",
    background_color: "#FFFFFF",
    start_url: "/app",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    id: env.NEXT_PUBLIC_ROOT_URL,
    lang: defaultLocale.key,
    screenshots: [
      {
        src: heroImg.src,
        type: "image/png",
        sizes: `${heroImg.width}x${heroImg.height}`,
        label: title,
      },
      {
        src: heroDarkImg.src,
        type: "image/png",
        sizes: `${heroDarkImg.width}x${heroDarkImg.height}`,
        label: title,
      },
      {
        src: displaysImg.src,
        type: "image/png",
        sizes: `${displaysImg.width}x${displaysImg.height}`,
        label: title,
        form_factor: "wide",
      },
      {
        src: tabletImg.src,
        type: "image/png",
        sizes: `${tabletImg.width}x${tabletImg.height}`,
        label: title,
      },
      {
        src: mobileImg.src,
        type: "image/png",
        sizes: `${mobileImg.width}x${mobileImg.height}`,
        label: title,
      },
    ],
  };
}
