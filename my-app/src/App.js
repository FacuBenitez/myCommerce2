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

import { BrowserRouter, Switch, Route } from 'react-router-dom'








function App() {
  
  return (
    
    
    
    
    
    
    <div>
      
     <BrowserRouter>
      <Navbar/>
      <Switch>

      {/* <ScrollHooks/> */}
      {/* <RelojHooks/>
      <UseEffect/> */}
      {/* <Ajax/> */}
      {/* <ApiFetch></ApiFetch> */}
      {/* <CrudApp/> */}
      {/* <ItemCount initial={1} */}
      {/* stock={20} */}
    
      {/* > */}
        
      {/* </ItemCount> */}
       <Route path={'/category/:categoryId'}>
        <ItemListContainer/>
       </Route>   
        <Route path={'/'}>
          <ItemListContainer/>  
        </Route>

        

       <Route path={'/item/:idItem'}>
          <ItemDetailContainer/>

        </Route>
        
        
      
        
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
