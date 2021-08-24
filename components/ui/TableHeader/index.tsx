import classNames from "@common/classnames";

interface TableHeaderProps {
  children?: any;
  className?: any;
}

const TableHeader = ({ children, className }: TableHeaderProps) => {
  const rootClassName = classNames(
    "px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
  );

  return (
    <th scope="col" className={`${className} ${rootClassName}`}>
      {children}
    </th>
  );
};

export default TableHeader;
