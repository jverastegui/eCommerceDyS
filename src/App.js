
import PreLoader from './Components/PreLoader';
import NavBart from './Components/NavBar/NavBart';
import Menu from './Components/Menu/Menu';
import ItemListContainer from './Components/Content/ListProduct/ItemListContainer';
import Footer from './Components/Footer';
import ItemDetailContainer from './Components/Content/DetailProduct/ItemDetailContainer';
import Cart from './Components/Content/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Provider from './Components/Content/Utils/Context';
import Checkout from './Components/Content/CheckOut/CheckOut';

function App() {
  return (
    <>
      <PreLoader></PreLoader>
      <Provider>
        <BrowserRouter>
          <div id="main-wrapper">
            <NavBart></NavBart>
            <Menu></Menu>
            <div className="page-wrapper">

              <div className="container-fluid">

                <Routes>
                  <Route exact path='/' element={<ItemListContainer />} />
                  <Route exact path='/category/:id' element={<ItemListContainer />} />
                  <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/checkout' element={<Checkout />} />
                </Routes>
              </div>
              <Footer></Footer>
            </div>

          </div>
        </BrowserRouter>
      </Provider>
    </>
  
  );
}

export default App;
