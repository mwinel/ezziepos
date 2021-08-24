interface PageHeadingProps {
  title: string;
}

const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <h3 className="text-xl leading-6 font-medium text-gray-800">{title}</h3>
  );
};

export default PageHeading;
