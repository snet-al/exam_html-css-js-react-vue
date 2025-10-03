import Header from "../components/Header";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
