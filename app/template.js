import Footer from "@/components/footer";
import Navbar04Page from "@/components/navbar-04/navbar-04";

export default function Template({ children }) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar04Page />
      <div className="flex flex-1 justify-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}