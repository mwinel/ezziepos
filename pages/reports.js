import { DashboardLayout } from "../layout";
import { SideBar, Container, Main } from "../components";

const Reports = () => {
  return (
    <DashboardLayout>
      <Container>
        <SideBar />
        <Main>Reports Page</Main>
      </Container>
    </DashboardLayout>
  );
};

export default Reports;
