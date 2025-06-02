import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'

function MainLayout({ children, onLoadMore }){
    return(
        <div className ="main-layout">
            <Header value="Photo Fetcher"/>
            <main>
                {children}
            </main>
            <Footer onLoadMore={onLoadMore}/>
        </div>
    )
}

export default MainLayout