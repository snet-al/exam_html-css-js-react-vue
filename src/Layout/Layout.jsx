import Header from "../components/PageHeader/Header";
import "../generalstyles.css";

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
