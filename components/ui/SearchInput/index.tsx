import { SearchIcon } from "@heroicons/react/solid";

interface SearchInputProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: any;
  onChange: any;
}

const SearchInput = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
      <div className="flex items-center px-6 md:max-w-2xl md:mx-auto lg:max-w-xl lg:mx-0 xl:px-0">
        <div className="w-full">
          <label htmlFor="search" className="sr-only">
            {label}
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
              placeholder={placeholder}
              type="search"
              value={value}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
