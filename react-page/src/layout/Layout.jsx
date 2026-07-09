import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout