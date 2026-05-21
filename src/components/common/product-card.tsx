import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { TRoute } from "@/types/general";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import toast from "@/components/common/custom-toast";

export interface IProductCard {
  title: string;
  description: string;
  link: TRoute;
  status: "regular" | "new" | "updated" | "soon";
  permission?: boolean;
}

export default function ProductCard(props: Readonly<IProductCard>) {
  const {
    description,
    link,
    title,
    status = "regular",
    permission = true,
  } = props;
  const t = useTranslations("ProductCard");
  const tx = useTranslations("General");
  const disabled = status === "soon" || permission === false;
  return (
    <Link
      href={link}
      aria-disabled={disabled}
      className="h-full"
      onClick={() => {
        if (permission === false) {
          toast.error(tx("permission-denied"));
        }
      }}
    >
      <Card
        className={cn("flex h-full flex-col justify-start", {
          "opacity-50": disabled,
        })}
        aria-disabled={disabled}
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          {status === "regular" ? undefined : (
            <Badge
              className={cn("max-w-fit", {
                [badgeVariants({ variant: "destructive" })]:
                  status === "new" || status === "updated",
                [badgeVariants({ variant: "secondary" })]: disabled,
              })}
            >
              {t(status)}
            </Badge>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}
