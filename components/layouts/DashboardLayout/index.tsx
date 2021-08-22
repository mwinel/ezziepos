import Header from "@components/ui/Header";
import Container from "@components/ui/Container";
import SideBar from "@components/ui/SideBar";
import Main from "@components/ui/Main";

interface DashboardLayoutProps {
  children?: any;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Container>
        <SideBar />
        <Main>{children}</Main>
      </Container>
    </div>
  );
};

export default DashboardLayout;
