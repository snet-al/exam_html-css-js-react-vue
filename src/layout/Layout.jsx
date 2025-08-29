import { Header } from '../components/Header'
import './Layout.css'
export function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  )
}