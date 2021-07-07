import { DashboardLayout } from "../layout";
import { SideBar, Container, Main } from "../components";

const Customers = () => {
  return (
    <DashboardLayout>
      <Container>
        <SideBar />
        <Main>Customers Page</Main>
      </Container>
    </DashboardLayout>
  );
};

export default Customers;
