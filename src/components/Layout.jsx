import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Layout({ children }) {
    return (
      <div className="dark:bg-gray-900 dark:text-white">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </div>
    );
  }