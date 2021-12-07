import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';



function App() {
    return ( <div className = "App">
                <NavBar />
                <ItemListContainer greeting="Welcome to Rolling Store"/>
                <ItemDetailContainer />
            </div>
    );
}
export default App;