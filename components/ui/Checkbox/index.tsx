interface CheckboxProps {
  id: string;
  name: string;
  value?: any;
  checked?: any;
  onChange?: any;
}

const Checkbox = ({ id, name, value, checked, onChange }: CheckboxProps) => {
  return (
    <input
      id={id}
      name={name}
      value={value}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 text-cyan-600 focus:outline-none border-gray-300 rounded-sm"
    />
  );
};

export default Checkbox;
