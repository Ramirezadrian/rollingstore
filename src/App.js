import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/itemDetailContainer/ItemDetailContainer';
import ItemCount from './Components/itemCount/ItemCount';
/* import { useContext } from "react";*/
import CartContext from './Components/cartContext/CartContext';



function App() {
    return ( <div className = "App">
        <BrowserRouter> 
        <CartContext>
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
                    <ItemCount />
                </Switch>
        </CartContext>        
        </BrowserRouter>
            </div>
    );
}
export default App;