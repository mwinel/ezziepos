import classNames from "@common/classnames";
interface TableCellProps {
  children?: any;
  className?: any;
  onClick?: any;
}

const TableCell = ({ children, className, onClick }: TableCellProps) => {
  const rootClassName = classNames("px-6 py-4 whitespace-nowrap");

  return (
    <td className={`${className} ${rootClassName}`} onClick={onClick}>
      <div className="flex items-center">{children}</div>
    </td>
  );
};

export default TableCell;
