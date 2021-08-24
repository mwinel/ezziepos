interface PagePanelProps {
  children?: any;
}

const PagePanel = ({ children }: PagePanelProps) => {
  return (
    <div className="mt-8 max-w-7xl flex flex-col justify-center">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PagePanel;
