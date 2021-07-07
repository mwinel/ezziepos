import { Header } from "../../components";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
