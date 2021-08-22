import classNames from "@common/classnames";

interface TableCellProps {
  children?: any;
  className?: any;
}

const TableCell = ({ children, className }: TableCellProps) => {
  const rootClassName = classNames("px-6 py-4 whitespace-nowrap");

  return (
    <td className={`${className} ${rootClassName}`}>
      <div className="flex items-center">{children}</div>
    </td>
  );
};

export default TableCell;
