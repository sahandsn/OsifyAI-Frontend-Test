import { CardComponent } from "@/components/common/card";
import { Badge } from "@/components/common/badge";
import { InfoPopover } from "@/components/common/custom-popover";
import { Button } from "@/components/common/button";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { PenNewSquareLinear } from "solar-icon-set";
import { ComponentProps, ReactNode } from "react";

type TrendDirection = "increase" | "decrease" | "no-change" | "estimate";
type Variant = ComponentProps<typeof Badge>["variant"];
type BadgeType = "trend" | "status" | "estimate";

type TitleBadgeConfig = {
  type: BadgeType;
  value: string | number;
  variant?: Variant;
  trend?: TrendDirection;
  hidden?: boolean;
};

export interface InfoBoxConfig {
  id: string;
  title: string;
  infoPopover?: {
    content: string;
  };
  titleBadges?: ReadonlyArray<TitleBadgeConfig>;
  editButton?: {
    onClick: () => void;
    ariaLabel?: string;
  };
  value: ReactNode;
  description?: string;
  hidden?: boolean;
  className?: string;
  headerClassName?: string;
  valueClassName?: string;
}

type InfoBoxProps = {
  config: InfoBoxConfig;
};

export function InfoBox({ config }: Readonly<InfoBoxProps>) {
  const {
    title,
    infoPopover,
    titleBadges,
    editButton,
    value,
    description,
    hidden,
    className,
    headerClassName,
    valueClassName,
  } = config;

  const hasBadges = titleBadges && titleBadges.some((badge) => !badge.hidden);
  const hasEditButton = !!editButton;

  const renderTitle = () => {
    const titleContent = (
      <div className="flex items-center gap-2">
        {title}
        {infoPopover ? (
          <InfoPopover content={infoPopover.content}>
            <Info size={16} />
          </InfoPopover>
        ) : null}
      </div>
    );

    if (!hasBadges) {
      return titleContent;
    }

    return (
      <div className="flex w-full items-center justify-between">
        {titleContent}
        <div className="flex items-center gap-2">
          {titleBadges?.map((badge, index) => {
            if (badge.hidden) return null;

            if (badge.type === "trend" || badge.type === "estimate") {
              return (
                <Badge
                  key={`${config.id}-badge-${index}`}
                  trend={badge.trend}
                  variant={badge.variant}
                >
                  {badge.value}
                </Badge>
              );
            }

            // status badge
            return (
              <Badge
                key={`${config.id}-badge-${index}`}
                variant={badge.variant}
              >
                {badge.value}
              </Badge>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <CardComponent
      className={cn({ hidden }, className)}
      headerClassName={cn(
        "text-neutral-700 text-xs dark:text-neutral-500",
        headerClassName,
      )}
      title={renderTitle()}
    >
      <span className="flex flex-col gap-2">
        <span
          className={cn(
            "flex w-full items-center justify-between text-xl font-medium leading-8 text-primary-500",
            valueClassName,
          )}
        >
          {value}
          {hasEditButton ? (
            <Button
              onClick={editButton.onClick}
              variant="text"
              size="32"
              shape="icon"
              aria-label={editButton.ariaLabel}
            >
              <PenNewSquareLinear />
            </Button>
          ) : null}
        </span>
        {description ? (
          <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {description}
          </span>
        ) : null}
      </span>
    </CardComponent>
  );
}

type InfoBoxSectionProps = {
  title?: string;
  cards: InfoBoxConfig[];
  gridColumns?: 2 | 4;
  hidden?: boolean;
  className?: string;
};

export function InfoBoxSection({
  title,
  cards,
  gridColumns = 4,
  hidden: sectionHidden,
  className,
}: Readonly<InfoBoxSectionProps>) {
  const visibleCards = cards.filter((card) => !card.hidden);

  if (sectionHidden || visibleCards.length === 0) {
    return null;
  }

  return (
    <section className={cn("space-y-4", className)}>
      {title && (
        <div className="text-lg font-semibold text-foreground">{title}</div>
      )}
      <div
        className={cn("flex flex-col gap-4 md:grid md:gap-6", {
          "grid-cols-2": gridColumns === 2,
          "grid-cols-4": gridColumns === 4,
        })}
      >
        {cards.map((card) => (
          <InfoBox key={card.id} config={card} />
        ))}
      </div>
    </section>
  );
}
