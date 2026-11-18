import Header from '../UI/Header';

export default function MainLayout({ children }) {
  return (
    <div className="container">
      <Header />
      <main className="container">
        {children}
      </main>
    </div>
  );
}
