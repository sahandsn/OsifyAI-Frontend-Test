"use client";

import useInfiniteScroll from "react-infinite-scroll-hook";
import { LoadingComponent } from "./loading";

interface InfiniteScrollProps {
  children: React.ReactNode;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  hasNextPageError?: boolean;
  fetchNextPage?: () => void;
  rootMargin?: string;
  className?: string;
}

export const InfiniteScrollWrapper = ({
  children,
  hasNextPage,
  isFetchingNextPage,
  hasNextPageError,
  fetchNextPage,
  rootMargin = "0px 0px 400px 0px",
  className,
}: Readonly<InfiniteScrollProps>) => {
  const [infiniteRef] = useInfiniteScroll({
    loading: !!isFetchingNextPage,
    hasNextPage: !!hasNextPage,
    onLoadMore: fetchNextPage ?? (() => {}),
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: hasNextPageError,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin,
  });

  // If the props are not provided, just render children directly (transparent behavior)
  if (hasNextPage === undefined && fetchNextPage === undefined) {
    return <>{children}</>;
  }

  return (
    <div className={className}>
      {children}
      {hasNextPage ? (
        <div
          ref={infiniteRef}
          className="flex w-full items-center justify-center p-2"
        >
          {isFetchingNextPage ? <LoadingComponent mode="text" /> : null}
        </div>
      ) : null}
    </div>
  );
};
