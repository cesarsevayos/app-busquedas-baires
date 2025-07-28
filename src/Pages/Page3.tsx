/* import MainLayout from "../layouts/MainLayout";
import VerticalMap from "../Components/VerticalMap";
import CommentSection from "../components/CommentSection";
import DetailMap from "../Components/DetailMap";

const Page3 = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <VerticalMap />
        <DetailMap />
      </div>

      <div className="bg-gray-50 border-t mt-4">
        <CommentSection />
      </div>
    </MainLayout>
  );
};

export default Page3;
 */

// import { Map } from "../components/Map";
// import MainLayout from "../layouts/MainLayout";
// import ImageListSection from "../components/ImageListSection";
// import CommentSection from "../components/CommentSection";
// const Page3 = () => {
//   return (
//     <div className="h-screen">
//       {" "}
//       {/* pantalla completa */}
//       <MainLayout>
//         <div className="flex h-full overflow-hidden">
//           <div className="w-3/5 h-full min-h-[300px]">
//             <Map />
//           </div>
//                     <div className="w-3/5 h-full min-h-[300px]">
//             <Map />
//           </div>
//                 <div className="bg-gray-50 border-t mt-4">
//         <CommentSection />
//       </div>
//         </div>
//       </MainLayout>
//     </div>
//   );
// };

// export default Page3;


// import MainLayout from "../layouts/MainLayout";
// import { Map } from "../components/Map";
// import DetailMap from "../components/DetailMap";
// import CommentSection from "../components/CommentSection";

// const Page3 = () => {
//   return (
//     <MainLayout>
//       <div className="flex flex-col h-screen">
//         {/* Mitad superior: mapas */}
//         <div className="flex flex-col lg:flex-row gap-6 p-6 h-1/2">
//           <div className="flex-1 min-h-[250px] bg-white rounded-2xl shadow-md overflow-hidden">
//             <Map />
//           </div>
//           <div className="flex-1 min-h-[250px] bg-white rounded-2xl shadow-md overflow-hidden">
//             <Map />
//           </div>
//         </div>

//         {/* Mitad inferior: comentarios */}
//         <div className="flex-1 overflow-y-auto px-6 pb-6 bg-gray-50 rounded-t-3xl border-t shadow-inner">
//           <CommentSection />
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default Page3;


// import MainLayout from "../layouts/MainLayout";
// import { Map } from "../components/Map";
// import CommentSection from "../components/CommentSection";

// const Page3 = () => {
//   return (
//     <MainLayout>
//       <div className="flex flex-col h-screen">
//         {/* Mitad superior: mapas */}
//         <div className="flex flex-col lg:flex-row gap-6 p-6 h-1/2">
//           {/* VerticalMap - 30% */}
//           <div className="w-full lg:w-[40%] min-h-[250px] bg-white rounded-2xl shadow-md overflow-hidden">
//             <Map />
//           </div>

//           {/* DetailMap - 70% */}
//           <div className="w-full lg:w-[60%] min-h-[250px] bg-white rounded-2xl shadow-md overflow-hidden">
//             <Map />
//           </div>
//         </div>

//         {/* Mitad inferior: comentarios */}
//         <div className="flex-1 overflow-y-auto px-6 pb-6 bg-gray-50 rounded-t-3xl border-t shadow-inner">
//           <CommentSection />
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default Page3;


import MainLayout from "../layouts/MainLayout";
import { Map } from "../components/Map";
import DetailMap from "../components/DetailMap";
import CommentSection from "../components/CommentSection";

const Page3 = () => {
  return (
    <MainLayout>
      <div className="flex flex-col h-screen">
        {/* Mitad superior: mapas con espacio */}
        <div className="hidden lg:flex p-6 h-1/2">
          {/* Mapa izquierdo - 30% */}
          <div className="w-[30%] min-h-[250px] bg-white rounded-2xl shadow-md overflow-hidden">
            <Map />
          </div>

          {/* Espacio - 20% */}
          <div className="w-[10%]" />

          {/* Mapa derecho - 50% */}
          <div className="w-[60%] min-h-[250px] bg-white rounded-2xl shadow-md overflow-hidden">
            <Map />
          </div>
        </div>

        {/* Responsive para pantallas chicas (stackeado) */}
        <div className="flex flex-col lg:hidden gap-6 p-6 h-1/2">
          <div className="min-h-[250px] bg-white rounded-2xl shadow-md overflow-hidden">
            <Map />
          </div>
          <div className="min-h-[250px] bg-white rounded-2xl shadow-md overflow-hidden">
            <Map />
          </div>
        </div>

        {/* Mitad inferior: comentarios */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 bg-gray-50 rounded-t-3xl border-t shadow-inner">
          <CommentSection />
        </div>
      </div>
    </MainLayout>
  );
};

export default Page3;
