import Header from "../components/Header";

export default function Layout({ header, children }) {
  return (
    <>
      {header ?? <Header />}
      <main className="container">{children}</main>
    </>
  );
}
