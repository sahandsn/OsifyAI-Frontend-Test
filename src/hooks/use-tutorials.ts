import { useTranslations } from "next-intl";

type TTutorialItem = {
  title: string;
  description: string;
  hash: string;
  href: string;
};

export function useTutorial() {
  const t = useTranslations("Tutorials");
  const items: TTutorialItem[] = [
    {
      hash: "pacs",
      title: t("pacs.title"),
      description: t("pacs.description"),
      href: "https://www.aparat.com/video/video/embed/videohash/tjb9hq9/vt/frame?titleShow=true&recom=self",
    },
    {
      hash: "qr-code",
      title: t("qr-code.title"),
      description: t("qr-code.description"),
      href: "https://www.aparat.com/video/video/embed/videohash/zvq4bj7/vt/frame?titleShow=true&recom=self",
    },
    {
      hash: "payment",
      title: t("payment.title"),
      description: t("payment.description"),
      href: "https://www.aparat.com/video/video/embed/videohash/qjn3h3g/vt/frame?titleShow=true&recom=self",
    },
    {
      hash: "link",
      title: t("link.title"),
      description: t("link.description"),
      href: "https://www.aparat.com/video/video/embed/videohash/ddedo10/vt/frame?titleShow=true&recom=self",
    },
    {
      hash: "digital",
      title: t("digital.title"),
      description: t("digital.description"),
      href: "https://www.aparat.com/video/video/embed/videohash/wrpl6os/vt/frame?titleShow=true&recom=self",
    },
  ];
  return items;
}
