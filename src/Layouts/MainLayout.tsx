import Header from '../components/Header';
import Footer from '../components/Footer';

// const MainLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <>
//       <Header />
//       <main className="flex-1">{children}</main>
//       <Footer />
//     </>
//   );
// };

// const MainLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="flex flex-col h-full"> {/* 👈 h-full agregado aquí */}
//       <Header />
//       <main className="flex-1 overflow-hidden"> {/* 👈 se expande */}
//         {children}
//       </main>
//       <Footer />
//     </div>
//   );
// };

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full"> {/* muy importante */}
      <Header />
      <main className="flex-1 overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
};



export default MainLayout;