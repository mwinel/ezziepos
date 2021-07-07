import { DashboardLayout } from "../layout";
import { SideBar, Container, Main } from "../components";

const Orders = () => {
  return (
    <DashboardLayout>
      <Container>
        <SideBar />
        <Main>Orders Page</Main>
      </Container>
    </DashboardLayout>
  );
};

export default Orders;
