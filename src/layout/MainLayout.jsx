export default function MainLayout({ children }) {
  return (
    <main className="page">
      <section className="container">{children}</section>
    </main>
  );
}