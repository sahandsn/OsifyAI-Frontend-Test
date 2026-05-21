import { useTranslations } from "next-intl";
import Halo from "@/components/common/halo";
import { ComponentType, SVGAttributes, memo } from "react";
import {
  LightbulbLinear,
  CourseUpBold,
  TrafficEconomyLinear,
} from "solar-icon-set";
import { cn } from "@/lib/utils";
import doctorWithPhone from "#/assets/images/doctor-with-phone.png";
import Image from "next/image";

type BulletPoints = ReadonlyArray<{
  Icon: ComponentType<SVGAttributes<SVGSVGElement>>;
  title: string;
  description: string;
  key: string;
}>;

export default function BulletPointsSection() {
  const t = useTranslations("BulletPoints");

  const bulletPoints: BulletPoints = [
    {
      Icon: TrafficEconomyLinear,
      title: t("point1.title"),
      description: t("point1.description"),
      key: "point1",
    },
    {
      Icon: CourseUpBold,
      title: t("point2.title"),
      description: t("point2.description"),
      key: "point2",
    },
    {
      Icon: LightbulbLinear,
      title: t("point3.title"),
      description: t("point3.description"),
      key: "point3",
    },
  ];

  return (
    <section
      id="bullet-points"
      aria-labelledby="bullet-points-title"
      className="relative mx-auto my-14 lg:mx-0"
    >
      {/* Halo */}
      <Halo
        dark={{
          color: "#172E54",
          spread: 70,
        }}
        light={{
          color: "#93BBFD",
          spread: 70,
        }}
        className="absolute start-[30rem] top-80 opacity-0 dark:lg:opacity-50"
      />

      {/* Header */}
      <header className="mb-12 text-center md:mb-16">
        <h2
          id="bullet-points-title"
          className="mb-10 text-[28px] font-bold leading-[32px] text-neutral-950 dark:text-neutral-100 lg:text-[40px]"
        >
          {t("title")}
        </h2>
        <p className="text-[16px] text-neutral-800 dark:text-neutral-300 lg:text-base">
          {t("subtitle")}
        </p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
        {/* Image Section */}

        <div
          className={cn(
            "rounded-3xl bg-[linear-gradient(224.02deg,#4186F6_0%,#B9D7FE_101.78%)] md:max-w-[418px]",
            "dark:bg-[linear-gradient(256.56deg,#142C6F_0%,#3677E5_100%)]",
          )}
        >
          <Image
            src={doctorWithPhone}
            width={418}
            height={400}
            alt={t("imageAlt")}
            className="h-auto w-full"
          />
          <div
            className={cn(
              "hidden max-w-96 rounded-[16px] bg-neutral-50 px-6 py-4 text-center shadow-[0_4px_16px_0_#1B1B1B0F] rounded-bs-none dark:bg-neutral-950 lg:block",
              "border border-neutral-50 dark:border-neutral-800",
              "absolute start-72 top-8 lg:top-72",
            )}
          >
            {t("insightText")}
          </div>
        </div>

        {/* Bullet Points List */}
        <ul className="flex max-w-md flex-col gap-8">
          {bulletPoints.map((point, index) => {
            const isFirst = index === 0;

            return (
              <li
                key={point.key}
                className="relative flex gap-4"
                aria-label={point.title}
              >
                {/* Vertical Line Indicator */}
                <div
                  className={cn(
                    "h-[109px] w-1 shrink-0 rounded-full",
                    isFirst
                      ? "bg-secondary-500"
                      : "bg-neutral-400 dark:bg-neutral-700",
                  )}
                />
                <BulletPointItem
                  Icon={point.Icon}
                  title={point.title}
                  description={point.description}
                  isFirst={isFirst}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

type BulletPointItemProps = Readonly<{
  Icon: ComponentType<SVGAttributes<SVGSVGElement>>;
  title: string;
  description: string;
  isFirst: boolean;
}>;

const BulletPointItem = memo(
  ({ Icon, title, description, isFirst }: BulletPointItemProps) => {
    return (
      <article className="flex flex-col gap-4">
        <header className="flex flex-row items-center gap-2">
          {/* Icon Container */}
          <div
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] border-[1.2px]",
              isFirst
                ? "border-transparent bg-primary-500 text-white"
                : "border-neutral-500 bg-white text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-500",
            )}
          >
            <Icon
              className={cn(
                "h-6 w-6",
                isFirst ? "text-white" : "text-blue-500",
              )}
              aria-hidden="true"
            />
          </div>

          <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
        </header>

        <p className="text-[14px] leading-[20px] text-neutral-900 dark:text-neutral-300 lg:text-base lg:leading-[28px]">
          {description}
        </p>
      </article>
    );
  },
);

BulletPointItem.displayName = "BulletPointItem";
