import { FC } from "react";

interface AsideProps {
  children?: any;
}

const Aside: FC<AsideProps> = ({ children }) => {
  return (
    <aside className="hidden xl:block xl:col-span-4">
      <div className="sticky top-4 space-y-4">{children}</div>
    </aside>
  );
};

export default Aside;
