import React from 'react';
import { Link } from 'react-router-dom';

const NavBar=({openNavToggle,switchSelectedToggle,...props})=>{
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <div class="navbar-header">
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
                    </div>
                </div>
            </nav>
        )
    }
export default NavBar;