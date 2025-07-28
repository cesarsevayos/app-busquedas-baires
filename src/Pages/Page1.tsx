import MainLayout from "../Layouts/MainLayout";
import HeroSearch from "../Components/HeroSearch";
import NeighborhoodCards from "../Components/NeighborhoodCards";
import HowItWorks from "../Components/HowItWorks";

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
