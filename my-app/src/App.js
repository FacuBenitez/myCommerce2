import React from 'react'
import ItemDetailContainer from './components/ItemDetailContainer';
// import ItemCount from './components/ItemCount';
// import ScrollHooks from './components/ScrollHooks'
// import RelojHooks from './components/RelojHoooks'
import Navbar from './components/Navbar'
import ItemListContainer from './ItemListContainer';
// import ApiFetch from './components/ApiFetch'
// import CrudApp from './components/CrudApp'
// import UseEffect from './components/UseEffect';
// import Ajax from './components/Ajax';


import Cart from './components/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CartContextProvider from './components/context/CartContext';








function App() {
  
  return (
    
    
    
    
    
    
    <div>
    <CartContextProvider>
  
     <BrowserRouter>
      <Navbar/>
      <Switch>

       <Route path={'/category/:categoryId'}>
        <ItemListContainer/>
       </Route>   
        <Route exact path={'/'}>
          <ItemListContainer/>  
        </Route>

        

        <Route path={'/item/:paramId'}>
          <ItemDetailContainer/>

        </Route>
        
        

        <Route path={'/cart'}>
          <Cart/>

        </Route>
        
      </Switch>
      
      </BrowserRouter>
    </CartContextProvider>

    </div>
  );
}

export default App;
