import { FC } from "react";

interface MainProps {
  children?: any;
}

const Main: FC<MainProps> = ({ children }) => {
  return <main className="lg:col-span-9 xl:col-span-7">{children}</main>;
};

export default Main;
