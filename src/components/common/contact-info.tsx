import { SVGAttributes, ComponentType } from "react";
import Letter from "#/assets/icons/Letter.svg";
import Plain from "#/assets/icons/Plain.svg";
import PhoneCalling from "#/assets/icons/PhoneCalling.svg";
import Whatsapp from "#/assets/icons/Whatsapp.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

type ContactMethod = {
  Icon: ComponentType<SVGAttributes<SVGSVGElement>>;
  label: string;
  description: string;
  href?: string;
  key: "email" | "telegram" | "phone" | "whatsapp";
};

export function ContactInfo() {
  const t = useTranslations("ContactUs.info");
  const contactMethods: ReadonlyArray<ContactMethod> = [
    {
      Icon: Letter,
      label: t("email.label"),
      description: t("email.description"),
      href: "mailto:osifyai@gmail.com",
      key: "email",
    },
    {
      Icon: Plain,
      label: t("telegram.label"),
      description: t("telegram.description"),
      href: "https://t.me/osifyai",
      key: "telegram",
    },
    {
      Icon: PhoneCalling,
      label: t("phone.label"),
      description: t("phone.description"),
      href: "tel:+989010823517",
      key: "phone",
    },
    {
      Icon: Whatsapp,
      label: t("whatsapp.label"),
      description: t("whatsapp.description"),
      href: "https://wa.me/+989114754235",
      key: "whatsapp",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Address Section */}
      <section>
        <h2 className="text-center text-2xl font-bold lg:text-start">
          {t("title")}
        </h2>
        <div className="overflow-hidden dark:border-neutral-800">
          {/* Contact Methods Grid */}
          <section>
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:flex-wrap">
              {contactMethods.map((method, index) => {
                return (
                  <a
                    key={method.key}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center lg:flex-row ${index === 1 || index === 3 ? "lg:w-[210px]" : "lg:w-[300px]"} gap-4 p-4 dark:border-neutral-800 lg:h-[90px]`}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px] bg-white p-3 shadow-[0px_0px_27.8767px_rgba(163,163,163,0.12)] dark:border-[1px] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-[0px_0px_27.8767px_rgba(163,163,163,0.12)]">
                      {typeof method.Icon === "object" ? (
                        <Image
                          src={method.Icon}
                          alt={method.key}
                          className="h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      ) : (
                        <method.Icon className="h-8 w-8" aria-hidden="true" />
                      )}
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-center justify-center gap-1 lg:items-start">
                      <h3 className="font-semibold text-neutral-700 dark:text-neutral-500">
                        {method.label}
                      </h3>
                      <p
                        className={`text-sm font-medium text-black dark:text-neutral-100`}
                        dir="ltr"
                      >
                        {method.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>

          {/* Address Text */}
          <div className="flex flex-col items-center justify-center p-4 lg:items-start">
            <h2 className="mb-1 text-2xl font-semibold text-[#212121] dark:text-white">
              {t("address.title")}
            </h2>
            <p className="mb-1 flex items-start gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-400">
              {t("address.text")}
            </p>
          </div>
          {/* Map */}
          <div className="h-64 w-full bg-neutral-100 dark:bg-black">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.0354662899463!2d53.03230787606678!3d36.55325778158039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8541004fb28f51%3A0x722555b91daebff8!2sOsifyAI!5e0!3m2!1sen!2sus!4v1764235560039!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("address.mapTitle")}
              className="rounded-[16px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
