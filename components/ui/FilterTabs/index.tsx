import classNames from "@common/classnames";

interface FilterTabsProps {
  filter: string;
  filterNames: any;
  setFilter: any;
}

const FilterTabs = ({
  filter,
  filterNames,

  setFilter,
}: FilterTabsProps) => {
  return (
    <div className="bg-white">
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6" aria-label="tabs">
            {filterNames.map((name) => (
              <a
                key={name}
                className={classNames(
                  name === filter
                    ? "border-cyan-500 text-cyan-600"
                    : "border-transparent text-gray-800 hover:text-gray-700 hover:border-gray-200",
                  "whitespace-nowrap flex py-5 px-1 border-b-4 font-medium text-sm cursor-pointer"
                )}
                aria-pressed={name === filter}
                onClick={() => setFilter(name)}
              >
                {name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
