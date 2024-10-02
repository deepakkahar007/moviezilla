import { Skeleton } from "./ui/skeleton";

export const CarouselLoading = () => {
  return (
    <div className="w-full max-w-sm lg:w-full">
      <div className="flex flex-col items-center space-y-4">
        <Skeleton className="aspect-square h-20 w-full rounded-md" />
        <Skeleton className="aspect-square h-8 w-full rounded-md" />
        <Skeleton className="aspect-square h-14 w-full rounded-md" />
      </div>
    </div>
  );
};

export const CardLoading = () => {
  return (
    <div className="max-h-32 w-full max-w-44 lg:w-full">
      <div className="flex flex-col items-center space-y-4">
        <Skeleton className="aspect-square h-8 w-full rounded-md" />
        <Skeleton className="aspect-square h-20 w-full rounded-md" />
        <Skeleton className="aspect-square h-6 w-full rounded-md" />
      </div>
    </div>
  );
};
