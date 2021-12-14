import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './Components/ItemCount/ItemCount';



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