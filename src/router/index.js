import { BrowserRouter, Route, NavLink, Redirect} from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../views/home'
import AddPassenger from '../views/addPassenger'
const Router = () => {

  return(
    <BrowserRouter>
      <Header />
      <Route path='/' exact render={Home} />
      <Route path='/new' exact render={AddPassenger} /> 

      <Footer />
    </BrowserRouter>
  )  
}

export default Router