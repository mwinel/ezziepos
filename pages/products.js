import { DashboardLayout } from "../layout";
import { SideBar, Container, Main } from "../components";

const Products = () => {
  return (
    <DashboardLayout>
      <Container>
        <SideBar />
        <Main>Products Page</Main>
      </Container>
    </DashboardLayout>
  );
};

export default Products;
