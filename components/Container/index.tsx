import { FC } from "react";

interface ContentProps {
  children?: any;
}

const Content: FC<ContentProps> = ({ children }) => {
  return (
    <div className="py-10">
      <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-full lg:px-8 lg:grid lg:grid-cols-12 lg:gap-12">
        {children}
      </div>
    </div>
  );
};

export default Content;
