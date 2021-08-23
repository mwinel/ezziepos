import { XIcon } from "@heroicons/react/solid";

interface ResultsPillProps {
  children?: any;
  onClick?: any;
}

const ResultsPill = ({ children, onClick }: ResultsPillProps) => {
  return (
    <button
      type="button"
      className="mr-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-gray-600 bg-gray-50 hover:bg-gray-200 focus:outline-none"
    >
      {children}
      <XIcon
        className="ml-2 -mr-0.5 h-4 w-4"
        aria-hidden="true"
        onClick={onClick}
      />
    </button>
  );
};

export default ResultsPill;
