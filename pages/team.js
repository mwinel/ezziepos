import { DashboardLayout } from "../layout";
import { SideBar, Container, Main } from "../components";

const Team = () => {
  return (
    <DashboardLayout>
      <Container>
        <SideBar />
        <Main>Team Page</Main>
      </Container>
    </DashboardLayout>
  );
};

export default Team;
