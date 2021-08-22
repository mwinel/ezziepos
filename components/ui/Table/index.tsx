interface TableProps {
  children?: any;
}

const Table = ({ children }: TableProps) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">{children}</table>
  );
};

export default Table;
