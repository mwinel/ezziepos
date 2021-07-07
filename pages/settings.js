import { DashboardLayout } from "../layout";
import { SideBar, Container, Main } from "../components";

const Settings = () => {
  return (
    <DashboardLayout>
      <Container>
        <SideBar />
        <Main>Settings Page</Main>
      </Container>
    </DashboardLayout>
  );
};

export default Settings;
