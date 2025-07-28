import { Map } from "../components/Map";
import MainLayout from "../layouts/MainLayout";
import ImageListSection from "../components/ImageListSection";

const Page2 = () => {
  return (
    <div className="h-screen">
      {" "}
      {/* pantalla completa */}
      <MainLayout>
        <div className="flex h-full overflow-hidden">
          <div className="w-3/5 h-full min-h-[300px]">
            <Map />
          </div>
          <div className="w-2/5 h-full overflow-y-auto">
            <ImageListSection />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Page2;
