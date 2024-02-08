import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';


const Navbar = ()=>
{

    const[flag, setFlag] = useState(false);


    
    return(
        <>
        <nav className="maincontainer">
            <div className="parent-div">
                
                <div className="mainlogo">
                <Link to={'/'}>Nabaraj</Link>
                </div>

                <div className="pages">
                    <ul className={flag?'open':''}>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/store'}>Store</NavLink></li>
                        <li><NavLink to={'/about'}>About</NavLink></li>
                        <li><NavLink to={'/contact'}>Contact</NavLink></li>
                    </ul>
                </div>
    
                <div className="account">
                    <Link to={'/account'} className={flag?"accountopen":''}>Account</Link>
                </div>

                
                <div className="menu" onClick={()=>setFlag(!flag)}>
                    {flag?(
                        <img src='closemenu.png' width={35}/>
                    ):(
                        <img src='menu.png' width={35}/>
                    )}
                </div>



            </div>    
        </nav>     
        </>
    )
}





export {Navbar};







