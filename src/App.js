import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/itemDetailContainer/ItemDetailContainer';
import ItemCount from './Components/itemCount/ItemCount';



function App() {
    return ( <div className = "App">
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
                    <ItemCount />
                </Switch>
        </BrowserRouter>
            </div>
    );
}
export default App;