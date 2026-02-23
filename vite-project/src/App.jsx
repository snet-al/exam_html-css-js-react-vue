import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import "./style.css";

export default function App() {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}