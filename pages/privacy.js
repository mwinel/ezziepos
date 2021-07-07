import { DashboardLayout } from "../layout";
import { SideBar, Container, Main } from "../components";

const Privacy = () => {
  return (
    <DashboardLayout>
      <Container>
        <SideBar />
        <Main>Privacy Page</Main>
      </Container>
    </DashboardLayout>
  );
};

export default Privacy;
