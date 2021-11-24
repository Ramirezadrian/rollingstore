import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';




function App() {
    return ( <div className = "App">
                <NavBar />
                <ItemListContainer greeting="Welcome to Rolling Store"/>
            </div>
    );
}
export default App;