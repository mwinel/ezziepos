interface MainProps {
  children?: any;
}

const Main = ({ children }: MainProps) => {
  return <main className="lg:col-span-9 xl:col-span-10">{children}</main>;
};

export default Main;
