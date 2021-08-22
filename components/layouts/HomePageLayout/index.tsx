import { Header, Container } from "../../../components";

const HomePageLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Container>{children}</Container>
    </div>
  );
};

export default HomePageLayout;
