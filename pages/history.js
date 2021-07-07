import { DashboardLayout } from "../layout";
import { SideBar, Container, Main } from "../components";

const History = () => {
  return (
    <DashboardLayout>
      <Container>
        <SideBar />
        <Main>History Page</Main>
      </Container>
    </DashboardLayout>
  );
};

export default History;
