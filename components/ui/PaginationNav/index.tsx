import { Button } from "../../../components";

interface PaginationNavProps {
  startCount: number;
  endCount: number;
  totalCount: number;
}

const PaginationNav = ({
  startCount,
  endCount,
  totalCount,
}: PaginationNavProps) => {
  return (
    <nav
      className="bg-white px-6 py-4 flex items-center justify-between border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{startCount}</span> to{" "}
          <span className="font-medium">{endCount}</span> of{" "}
          <span className="font-medium">{totalCount}</span> results
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <Button variant="primary">Previous</Button>
        <Button variant="primary" className="ml-3">Next</Button>
      </div>
    </nav>
  );
};

export default PaginationNav;
