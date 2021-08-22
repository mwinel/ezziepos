interface TableHeadProps {
  children?: any;
}

const TableHead = ({ children }: TableHeadProps) => {
  return <thead className="bg-white">{children}</thead>;
};

export default TableHead;
