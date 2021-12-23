import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/itemDetailContainer/ItemDetailContainer';
import {CartContextProvider} from './Components/cartContext/CartContext';
import Cart from './Components/cart/Cart';



function App() {
    return ( 
    
    <div className = "App">
        <CartContextProvider>
            <BrowserRouter> 
                <NavBar />
                <Switch>
                    <Route exact path='/'>
                        <ItemListContainer greeting="Welcome to Rolling Store"/>
                    </Route>
                    <Route  path='/category/:categoryId'>
                        <ItemListContainer greeting="Welcome to Rolling Store"/>
                    </Route>
                    <Route path='/detail/:paramId'>
                        <ItemDetailContainer />
                    </Route>    
                    <Route exact path = '/cart'>
                        <Cart/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </CartContextProvider>        
    </div>
    );
}
export default App;