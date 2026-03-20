import CustomCursor from "./CustomCusor";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-transparent text-white">
      <CustomCursor />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="floating-orb left-[-8rem] top-20 h-72 w-72 bg-[#eb7f4d]/25" />
        <div
          className="floating-orb right-[-4rem] top-[28rem] h-80 w-80 bg-[#3d8f97]/20"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="floating-orb bottom-[-6rem] left-1/3 h-72 w-72 bg-[#f4c96b]/10"
          style={{ animationDelay: "4s" }}
        />
        <div className="grid-overlay absolute inset-0 opacity-25" />
      </div>
      <Header />
      <main className="relative z-10 pt-20 md:pt-24">{children}</main>
      <Footer />
    </div>
  );
}
