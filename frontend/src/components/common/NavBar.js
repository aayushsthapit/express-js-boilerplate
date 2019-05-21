import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '../../services/authService';
import swal from 'sweetalert2';

const logOut =()=>{
    let refreshToken=localStorage.getItem('refreshToken')
    swal.fire("Hey!", "Are you sure you want to logout now?", "warning")
    .then((value)=>{
        if (value.value){
            signOut(refreshToken).then(res=>{
                localStorage.clear();
            })
            .catch(err=>{
                console.log("ERROR",err)
            })
        }
        
    })
    
}
const NavBar=({openNavToggle,switchSelectedToggle,...props})=>{
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">The Curio Gallery</a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className={`nav-item ${openNavToggle==='category'?'active':''}`} onClick={switchSelectedToggle('category')}>
                                <Link to={`${props.match.url}/category`} className="nav-link">Category</Link>
                            </li>
                            <li className={`nav-item ${openNavToggle==='products'?'active':''}`} onClick={switchSelectedToggle('products')}>
                                <Link to={`${props.match.url}/products`} className="nav-link">Product</Link>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><button className="nav-link" onClick={()=>logOut()}>Sign Out</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
export default NavBar;