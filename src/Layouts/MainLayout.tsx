import Header from '../components/Header';
import Footer from '../components/Footer';

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