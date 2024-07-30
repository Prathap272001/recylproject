import React from 'react'
import { FaMobile, FaSearch, FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import './Footer.css'


function Footer() {
    
    return (
        <div>
            <footer >
                <hr />
                <div className='footer-content'>
                    <div>
                        <p>Project-Recycleverse</p>
                        <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_BIuFmmpqkRjGIzlY/tx0655jqfqogjuwu.png" alt="" /><br />
                        <a href=""><FaFacebook ></FaFacebook></a>
                        <a href=""><FaInstagram></FaInstagram></a>
                        <a href=""><FaTwitter></FaTwitter></a>
                        <a href=""><FaYoutube></FaYoutube></a>

                    </div>
                    <div>
                        <table>
                            <tr>
                                <td> Features</td>
                                <td> Company</td>
                                <td> Legal</td>
                            </tr>
                            <tr>
                                <td> What's New</td>
                                <td> Blog</td>
                                <td> Privacy Policy</td>
                            </tr>
                            <tr>
                                <td> Updates</td>
                                <td> About Us</td>
                                <td> Terms of USe</td>
                            </tr>
                            <tr>
                                <td>Buy </td>
                                <td>Contact Us</td>
                                <td> Cookie Policy</td>
                            </tr>
                            <tr>
                                <td > Sell</td>
                                <td>Careers</td>
                            </tr>
                            <tr>
                                <td > Affiliate</td>
                            </tr>
                            <tr>
                                <td > Hire a pro.</td>
                            </tr>
                        </table>
                    </div>

                    <div id='news' className='news'>
                        <h2>Join Our Newsletter</h2>
                        <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                        <input type="email" name="" id="" /><br /><button>Subscribe</button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer