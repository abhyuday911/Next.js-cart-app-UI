const SkeletonCard = () => {
  return (
    <div className="animate-pulse p-4 border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800 rounded-md">
      <div className="w-full aspect-square rounded-md bg-gray-300 dark:bg-gray-600 mb-4"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-2 w-1/2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 w-1/4"></div>
      </div>
    </div>
  );
};

const SkeletonCartItemCard = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6 animate-pulse">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <div className="shrink-0 md:order-1 relative h-20 w-20 bg-gray-300 dark:bg-gray-600"></div>

        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <div className="inline-flex h-5 w-5 shrink-0 rounded-md bg-gray-300 dark:bg-gray-600"></div>
            <div className="w-10 h-5 bg-gray-300 mx-2 dark:bg-gray-600"></div>
            <div className="inline-flex h-5 w-5 shrink-0 rounded-md bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="text-end md:order-4 md:w-32 ml-auto">
            <div className="h-4 bg-gray-300 rounded-md w-16 ml-auto dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <div className="h-4 bg-gray-300 rounded-md w-5/6 dark:bg-gray-600"></div>
          <div className="flex items-center gap-4">
            <div className="h-4 bg-gray-300 rounded-md w-1/4 dark:bg-gray-600"></div>
            <div className="h-4 bg-gray-300 rounded-md w-1/4 dark:bg-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SkeletonCard, SkeletonCartItemCard };
