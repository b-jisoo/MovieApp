export const Skeleton = () => {
  let arr = [];
  for (let i = 1; i <= 20; i++) {
    arr.push(
      <div className="mt-8">
        <div className=" cursor-pointer max-w-full h-auto box-border  hover:scale-105 hover:-translate-y-3 transition-all">
          <div className="flex justify-center items-center mb-4 h-80 bg-gray-300 rounded dark:bg-gray-700 "></div>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700   mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  w-48 mb-2.5"></div>
        <div className="flex items-center mt-4 space-x-3"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700  w-48 mb-2.5"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {arr}
      </div>
    </>
  );
};
