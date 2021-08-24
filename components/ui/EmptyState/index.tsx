import { PlusIcon } from "@heroicons/react/solid";
import PagePanel from "@components/ui/PagePanel";

interface EmptyStateProps {
  title: string;
  description: string;
  buttonText: string;
}

const EmptyState = ({ title, description, buttonText }: EmptyStateProps) => {
  return (
    <div className="min-h-full mx-auto bg-white border-b border-gray-200 flex flex-col justify-center shadow overflow-hidden rounded-md py-40 sm:px-6 lg:px-8">
      <div className="text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          />
        </svg>
        <h3 className="mt-2 font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-500">{description}</p>
        <div className="mt-6">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
