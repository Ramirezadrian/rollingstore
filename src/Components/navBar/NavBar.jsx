import React from "react";
import CartWidget from "../cardWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext, useEffect , useState } from "react";
import CartContext from '../cartContext/CartContext';
import {db} from '../../services/firebase/firebase';
import {getDocs, collection} from 'firebase/firestore';

const NavBar =() => {

  const [categories, setCategories] = useState([]);
  const {getTotal} = useContext(CartContext);

  let total = getTotal();

  useEffect(()=>{
    getDocs(collection(db,'categories')).then((querySnapshot)=>{
      const categories = querySnapshot.docs.map(doc =>{
        return {id:doc.id,...doc.data()}
      })
      setCategories(categories);
    })
  },[])
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <Link className="navbar-brand" to='/'>RollingStore</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {categories.map(cat => <li className = "nav-item"><Link key = {cat.id} className="nav-link" to={`/category/${cat.id}`}>{cat.description}</Link></li>)}
      </ul>
      <Link to ="/cart"><CartWidget/></Link>
      <div>
        <span>{total}</span>
      </div>
    </div>
  </div>
</nav>
)

}

export default NavBar