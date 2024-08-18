const Timeline = () => {
  return (
    <div className="container mx-auto md:py-16 md:mb-28" id="timeline">
      <div className="text-center mb-8">
        <h2 className="font-mono text-2xl md:text-3xl font-bold">Timeline</h2>
      </div>

      <ol className="relative border-l border-gray-200 dark:border-gray-700 sm:flex sm:justify-center sm:border-none">
        <li className="relative mb-6 sm:mb-0 sm:flex sm:flex-col sm:items-center sm:w-1/3">
          <div className="z-10 flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <svg
              className="w-5 h-5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 absolute top-10 left-1/2 transform -translate-x-1/2"></div>
          <div className="mt-3 sm:pe-8 sm:text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Registration Open
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              19th - 24th August
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Register for Tekathon 3.0 and secure your spot early.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0 sm:flex sm:flex-col sm:items-center sm:w-1/3">
          <div className="z-10 flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <svg
              className="w-5 h-5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 absolute top-10 left-1/2 transform -translate-x-1/2"></div>
          <div className="mt-3 sm:pe-8 sm:text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Round 1 Results
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              31st August - 1st September
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Check the results to see if you’ve advanced to Round 2.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0 sm:flex sm:flex-col sm:items-center sm:w-1/3">
          <div className="z-10 flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <svg
              className="w-5 h-5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 absolute top-10 left-1/2 transform -translate-x-1/2"></div>
          <div className="mt-3 sm:pe-8 sm:text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Round 2 - Final Round
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              7th September 2024
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Top qualifiers compete in the final round. Showcase your innovations!
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Timeline;
