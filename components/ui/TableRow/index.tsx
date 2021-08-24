interface TableRowProps {
  children?: any;
  className?: any;
}

const TableRow = ({ children, className }: TableRowProps) => {
  return <tr className={`${className} "flex items-center"`}>{children}</tr>;
};

export default TableRow;
