import { useTranslations } from "next-intl";
import Image from "next/image";
import Samandehi from "#/assets/icons/Samandehi.svg";
import Enamad from "#/assets/icons/Enamad.svg";
import Halo from "@/components/common/halo";
import { MapPointLinear, PhoneCallingRoundedLinear } from "solar-icon-set";
import { TLink } from "@/types/general";
import { useNav } from "@/hooks/use-nav";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { useNumber } from "@/hooks/use-number";
import { phoneNumbers } from "@/constants/phone";
import { useSocialMedia } from "@/hooks/use-social-media";
import { LogoLink } from "./logo";

type QuickAccessLinks = ReadonlyArray<{ href: TLink; label: string }>;

export default function Footer() {
  return (
    <footer className="relative flex w-full flex-col items-center justify-center gap-2.5 overflow-hidden border-t border-[#BFD7FE] bg-gradient-to-r from-white/[0.41] to-white/[0.64] px-4 py-16 text-neutral-900 backdrop-blur-2xl dark:border-[#565656] dark:bg-gradient-to-r dark:from-[#212121] dark:to-[#212121] dark:text-neutral-300 dark:backdrop-blur-3xl">
      {/* Blue Halo */}
      <Halo
        light={{
          color: "#BFD7FE",
          spread: 200,
        }}
        dark={{
          color: "#1E478A",
          spread: 200,
        }}
        className={cn(
          "absolute bottom-[30rem] end-20 opacity-70 md:bottom-[18rem] md:end-0 md:start-[35rem]",
        )}
      />

      {/* Orange Halo */}
      <Halo
        light={{
          color: "#FECCAA",
          spread: 150,
        }}
        dark={{
          color: "#7C3D12",
          spread: 150,
        }}
        className={cn(
          "absolute bottom-[17rem] start-20 opacity-40 md:bottom-32 md:start-60",
        )}
      />

      {/* Mobile Layout - Hidden on md and up */}
      <div className="empty-sides block md:hidden">
        <FooterMobile />
      </div>

      {/* Desktop Layout - Hidden below md */}
      <div className="empty-sides hidden md:flex md:w-full md:items-center md:justify-center">
        <FooterDesktop />
      </div>
    </footer>
  );
}

function QuickAccessLinks() {
  const t = useTranslations("Footer.quickAccess");
  const nav = useNav();

  return (
    <nav
      className="flex flex-col items-center gap-4 dark:text-neutral-300 md:items-start"
      aria-label={t("title")}
    >
      <h3 className="text-[22px] font-bold dark:text-neutral-100">
        {t("title")}
      </h3>
      <ul className="flex flex-col items-center gap-4 md:items-start">
        {nav.map((link) => (
          <li key={JSON.stringify(link.path)}>
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ContactInfo() {
  const t = useTranslations("Footer.contact");
  const tx = useTranslations("Contact");

  const { formatNumber } = useNumber();

  return (
    <section className="flex flex-col items-center gap-4 dark:text-neutral-300 md:items-start">
      <h3 className="text-[22px] font-bold dark:text-neutral-100">
        {t("title")}
      </h3>
      <address className="flex flex-col gap-4 not-italic">
        <a
          href="https://maps.app.goo.gl/UHW4LqHzkn2Esjik9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <MapPointLinear
            className="h-6 w-6"
            aria-hidden="true"
            color="hsl(var(--primary-500))"
          />
          <span>{tx("address")}</span>
        </a>
        <div className="flex flex-row gap-2">
          <PhoneCallingRoundedLinear
            className="h-6 w-6"
            aria-hidden="true"
            color="hsl(var(--primary-500))"
          />

          {phoneNumbers.map((phone, idx) => (
            <span key={phone.val} className="flex flex-wrap items-center">
              <a
                href={`tel:${phone.val}`}
                className="flex items-center gap-2 hover:underline"
              >
                <span dir={"ltr"}>{formatNumber(phone.title)}</span>
              </a>
              {idx !== phoneNumbers.length - 1 && (
                <span className="mx-1">-</span>
              )}
            </span>
          ))}
        </div>
      </address>
    </section>
  );
}

function TrustBadges() {
  return (
    <aside className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
      <Link
        href="/trust"
        className="relative h-[100px] w-[100px] md:h-[142px] md:w-[168px]"
      >
        <Image src={Samandehi} alt="Samandehi badge" fill={true} sizes="100%" />
      </Link>

      <Link
        href="/trust"
        className="relative h-[100px] w-[100px] md:h-[142px] md:w-[168px]"
      >
        <Image src={Enamad} alt="Enamad badge" fill={true} sizes="100%" />
      </Link>
    </aside>
  );
}

function SocialMediaLinks() {
  const socials = useSocialMedia();

  return (
    <nav className="flex max-w-[216px] flex-row flex-wrap items-center justify-center gap-4 md:max-w-none md:flex-nowrap md:gap-6">
      <ul className="flex flex-row flex-wrap items-center justify-center gap-4 md:flex-nowrap md:gap-6">
        {socials.map((social) => (
          <li key={social.key}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 text-primary-500 transition-transform dark:bg-neutral-950 dark:text-neutral-50"
            >
              {social.iconType === "component" ? (
                <social.icon
                  width={24}
                  height={24}
                  aria-hidden="true"
                  aria-label={social.alt}
                />
              ) : (
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={24}
                  height={24}
                  aria-hidden="true"
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FooterDesktop() {
  return (
    <div className="flex w-full max-w-[1312px] flex-col items-end justify-end gap-2.5">
      {/* Upper section */}
      <section className="flex w-full flex-row items-start justify-between gap-40 text-[18px]">
        <div className="flex flex-row items-start gap-40">
          <QuickAccessLinks />
          <ContactInfo />
        </div>

        <LogoLink />
      </section>

      {/* Lower section */}
      <section className="flex w-full flex-row items-center justify-between">
        <SocialMediaLinks />
        <TrustBadges />
      </section>
    </div>
  );
}

function FooterMobile() {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <QuickAccessLinks />
      <ContactInfo />
      <SocialMediaLinks />
      <TrustBadges />
      <LogoLink />
    </div>
  );
}
