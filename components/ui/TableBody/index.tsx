interface TableBodyProps {
  children?: any;
}

const TableBody = ({ children }: TableBodyProps) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
  );
};

export default TableBody;
