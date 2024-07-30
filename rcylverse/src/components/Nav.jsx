import React, { useState } from 'react'
import { IoMdNotifications } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { IoMdMenu } from "react-icons/io";
import './Nav.css';
import { LuMenu } from "react-icons/lu";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const nav=useNavigate()
    

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    console.log(isOpen)


    const [items, setItems] = useState([
        { id: 0, name: 'HTML' },
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'Basic' },
        { id: 3, name: 'PHP' },
        { id: 4, name: 'Java' }])

    const handleOnSearch = (string, results) => {
        // Triggered when the user types in the search input
        console.log(string, results);
    };

    const handleOnHover = (item) => {
        // Triggered when the user hovers over an item in the suggestions list
        console.log('Item hovered:', item);
    };

    const handleOnSelect = (item) => {
        // Triggered when the user selects an item from the suggestions list
        console.log('Item selected:', item);
    };
    return (

        <div>
            <div className='nav' >
                <img onClick={()=>nav('/')} src="https://wpwhdp61xwxnbqd5.umso.co/lib_BIuFmmpqkRjGIzlY/tx0655jqfqogjuwu.png" alt="" />
                
                <LuMenu className="navbar-toggler" onClick={toggleMenu} />
                <div className={`navsearch ${isOpen ? 'is-open' : ''}`}>
                    <Link to={'/selpro'}>Sell</Link>
                    <a href="">Buy</a>
                    <a href="">Community</a>
                    <a href="">What's New</a>
                    <a href="">About Us</a>
                    <a href=""><IoMdNotifications style={{ fontSize: "27px", marginBottom: "-8px" }} /></a>
                    <a href=""><RiMessage2Line style={{ fontSize: "27px", marginBottom: "-8px", textAlign: "center" }} /></a>
                    <a id='serh'>Search</a>
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        placeholder="Type to search"
                        className='search'
                    />

                </div>
                <div className='menu'>
                    <IoMdMenu />
                </div>


            </div>
        </div>
    )
}

export default Nav