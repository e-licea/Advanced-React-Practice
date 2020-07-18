import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Nav = () => {

    const [darkMode, setDarkMode] = useDarkMode('Dark Mode', false)
    const toggle = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode)
        console.log('clicked!')
    }
    
    return (<nav className = 'navbar'>
        <h1 className = 'nav-title'>Men's Soccer Players - World Rankings</h1>
        <button onClick = {toggle} >Toggle</button>
    </nav>)
}


export default Nav;