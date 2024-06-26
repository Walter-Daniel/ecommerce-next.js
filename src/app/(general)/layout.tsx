import Footer from "@/components/Footer";
import HeaderMain from "@/components/HeaderMain";
import HeaderTop from "@/components/HeaderTop";
import NavbarSection from "@/components/NavbarSection";
import 'react-toastify/dist/ReactToastify.css';

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
        <HeaderTop />
        <HeaderMain />
        <NavbarSection />
        {children}
        <Footer />
    </div>
  );
}