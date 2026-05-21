import { Banner } from "@/components/common/banner";
import { BannerScope, useBanner } from "@/hooks/use-banner";

export interface BannerProviderProps {
  children: React.ReactNode;
  scope: BannerScope;
}

export const BannerProvider = ({
  children,
  scope,
}: Readonly<BannerProviderProps>) => {
  const banner = useBanner(scope);

  return (
    <section>
      <Banner {...banner} scope={scope} />
      <section className="relative">{children}</section>
    </section>
  );
};
