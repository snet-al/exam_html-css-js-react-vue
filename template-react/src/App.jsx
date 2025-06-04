import './index.css'
import Header from './components/UI/Header'
import Body from './components/UI/Body'
import Footer from './components/UI/Footer'
import Layout from './LAYOUT/Layout.jsx'
import { ApiProvider } from './services/apiContext'
function App() {

  return (
    <ApiProvider>
      <Layout>

          <Header/>
          <Body/>
          <Footer/>

        
      </Layout>
    </ApiProvider>
  )
}

export default App
