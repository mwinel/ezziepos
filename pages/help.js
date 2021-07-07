import { DashboardLayout } from "../layout";
import { SideBar, Container, Main } from "../components";

const Help = () => {
  return (
    <DashboardLayout>
      <Container>
        <SideBar />
        <Main>Help Page</Main>
      </Container>
    </DashboardLayout>
  );
};

export default Help;
