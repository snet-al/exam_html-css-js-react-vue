import Header from '../Components/Header.jsx'
import Footer from '../Components/UI/Footer.jsx';

function MainLayout({ children }){
    return(
        <div className ="main-layout">
            <Header/>

            <main>
                {children}
            </main>

            <Footer/>
        </div>
    )
}

export default MainLayout