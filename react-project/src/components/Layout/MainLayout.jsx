import Header from '../UI/Header';

export default function MainLayout({ children, currentPage, onNavigate }) {
  return (
    <div className="container">
      <Header />
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <button type="button" className="fetch-button" onClick={() => onNavigate('home')}>
          Home
        </button>
        <button type="button" className="fetch-button" onClick={() => onNavigate('about')}>
          About
        </button>
      </nav>
      <main className="container">{children}</main>
    </div>
  );
}
