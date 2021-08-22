import { FC } from "react";

interface PageHeadingProps {
  title: string;
}

const PageHeading: FC<PageHeadingProps> = ({ title }) => {
  return (
    <h3 className="text-lg leading-6 font-medium text-gray-800">{title}</h3>
  );
};

export default PageHeading;
