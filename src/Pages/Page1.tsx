import MainLayout from "../layouts/MainLayout";
import HeroSearch from "../components/HeroSearch";
import NeighborhoodCards from "../components/NeighborhoodCards";
import HowItWorks from "../components/HowItWorks";

const Page1 = () => {
  return (
    <MainLayout>
      <HeroSearch />
      <NeighborhoodCards />
      <HowItWorks />
    </MainLayout>
  );
};

export default Page1;
