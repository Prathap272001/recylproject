import React, { useState } from 'react'
import { IoMdNotifications } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { FaMobile, FaSearch, FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';
import { faStar, faStarHalfAlt, faStar as farStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { BsClockFill } from "react-icons/bs";
import { IoMdCloud } from "react-icons/io";
import { HiFire } from "react-icons/hi";
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import { BiSolidUpArrowAlt } from "react-icons/bi";
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { FaBiohazard } from "react-icons/fa";
import { MdAreaChart } from "react-icons/md";
import Nav from './Nav';
import {FaCode, FaBuilding } from 'react-icons/fa';



const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="star-rating">
            {[...Array(fullStars)].map((_, index) => (
                <IoIosStar />
            ))}
            {halfStar && <IoIosStarHalf />}
            {[...Array(emptyStars)].map((_, index) => (
                <IoIosStarOutline />
            ))}
        </div>
    );
};

function Land() {
    const [scrolltrigger, setscrolltrigger] = useState(false)
    const [flip, setflip] = useState(false)
    const [scrollup, setscrollup] = useState(false)

    const [backContentIndex, setBackContentIndex] = useState(0);

    const backContents = [
        {
            icon: <img src="https://p9606ab2o9mfzx5m.umso.co/lib_LhuefaHhCaLhDedO/ixl95hqsrqobkq6s.svg?w=24&h=24&dpr=2" alt="" />,
            title: 'Engineering',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            icon: <FaBiohazard style={{ fontSize: '27px' }} />,
            title: 'Bio',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
            icon: <FaCode style={{ fontSize: '27px' }} />,
            title: 'Software Development',
            description: 'Developing robust and scalable software solutions...',
        },
        {
            icon: <FaBuilding style={{ fontSize: '27px' }} />,
            title: 'Architecture',
            description: 'Designing sustainable and efficient architectural structures...',
        },

    ];
    
                            

    const handleNextBack = () => {
        setBackContentIndex((prevIndex) => (prevIndex + 1) % backContents.length);
    };
    const handlePrevBack = () => {
        setBackContentIndex((prevIndex) => (prevIndex - 1) % backContents.length);
    };

    const nav = useNavigate();
    return (
        <div>
            <Nav></Nav>
            <ScrollTrigger onEnter={() => setscrollup(false)} onExit={() => setscrollup(true)}>
                <div className='belownav' id='topup'>
                    <div className='navpara'>
                        <a href="" id='siup'>Sign In</a>
                        <a href="">Sign Up</a>
                        <h3>PROJECT</h3>
                        <h1>RecycleVerse</h1>
                        <p>Looking to buy or sell unique projects? Join Project RecycleVerse, your one-stop shop for creative and innovative ventures.</p>
                        <div className='navbutton' >
                            <a href="">Browse Project</a>

                            <Link to={'/selpro'}>Sell Your Project</Link>

                            <a href="">Hire a Pro</a>
                        </div>
                    </div>

                    <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_jbNHCiIIrXAzpmCT/e9wezdn39n2sidy4.png" alt="" />
                </div>
            </ScrollTrigger>
            <div className='inner-content'>
                <div className='grab'>
                    <h1 className='grab-h1'>Grab or gone..</h1>
                    <p className='grab-p'>here are some projects based on your interests.</p>
                    <div className='inner-grab'>
                        <div>
                            <div className='grabimg'>
                                <img src="https://p9606ab2o9mfzx5m.umso.co/lib_SUQilvCDrDwywovw/4rrqhp5q0k6asvpd.jpg?w=500&dpr=2" alt="" />
                                <h3>Mountain Sunset</h3>
                                <p>This is a beautiful photo of a mountain peak surrounded by clouds during sunset.</p>
                            </div>
                            <div className='grabimg'>
                                <img src="https://p9606ab2o9mfzx5m.umso.co/lib_SUQilvCDrDwywovw/joqhvhhk073wre4v.jpg?w=500&dpr=2" alt="" />
                                <h3>Airplane Window</h3>
                                <p>The view from an airplane window above the clouds.</p>
                            </div>
                        </div>
                        <div>
                            <div className='grabimg'>
                                <img src="https://p9606ab2o9mfzx5m.umso.co/lib_SUQilvCDrDwywovw/pzx2bcysilmseomr.jpg?w=500&dpr=2" alt="" />
                                <h3>Skatepark</h3>
                            </div>
                            <div className='grabimg'>
                                <img src="https://p9606ab2o9mfzx5m.umso.co/lib_SUQilvCDrDwywovw/u3p0a560mebwkhry.jpg?w=500&dpr=2" alt="" />
                                <h3>Beautiful Forest</h3>
                                <p>A green and foggy forest valley.</p>
                            </div>
                        </div>
                        <div>
                            <div className='grabimg'>
                                <img src="https://p9606ab2o9mfzx5m.umso.co/lib_SUQilvCDrDwywovw/5r3qt5j3pzi3agze.jpg?w=500&dpr=2" alt="" />
                                <h3>Optional Title</h3>
                                <p>Both the title and description are optional and you can leave them blank.</p>
                            </div>
                            <div className='grabimg'>
                                <img src="https://p9606ab2o9mfzx5m.umso.co/lib_SUQilvCDrDwywovw/hbhobx8vg54hkjif.jpg?w=500&dpr=2" alt="" />
                                <h3>Mountain Sunset</h3>
                                <p>Just the description</p>
                            </div>
                        </div>

                        <div>
                            <div className='grabimg'>
                                <img src="https://p9606ab2o9mfzx5m.umso.co/lib_SUQilvCDrDwywovw/ogsussig6wdtykht.jpg?w=500&dpr=2" alt="" />
                                <h3>Water</h3>
                                <p> So Beautiful.</p>
                            </div>
                            <div className='grabimg'>
                                <img src="https://p9606ab2o9mfzx5m.umso.co/lib_SUQilvCDrDwywovw/hpdihc847p22mimc.jpg?w=500&dpr=2" alt="" />
                                <h3>Mountain Road</h3>
                                <p>A mountain Road with deer on it.</p>
                            </div>
                            <div className='grabimg'>
                                <img src="https://p9606ab2o9mfzx5m.umso.co/lib_SUQilvCDrDwywovw/6j2byhsgg270gg1p.jpg?w=500&dpr=2" alt="" />
                                <h3>Beatuiful Mountains</h3>
                                <p>More mountains because who doesn't like mountains.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='sellorbuy'>
                    <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_VqklgcdQPwUUmmqp/2p687vyncs5dy8sx.png?w=1200&dpr=2" alt="" />
                    <div className='inner-sellorbuy'>
                        <div className='ssb'>
                            <h1>BUY</h1>
                            <a href="">Browse all Resources →</a>
                        </div>
                        <div className='ssb'>
                            <h1>SELL</h1>
                            <a href="">Recycle and Earn→</a>
                        </div>
                        <div className='ssb'>
                            <h1>HIRE A PRO!</h1>
                            <a href="">for customized tailored work →</a>
                        </div>

                    </div>
                </div>

                {scrollup && (<a href="#topup" id='up'><BiSolidUpArrowAlt style={{ color: "white" }} /></a>)}

                <div className='mostliked'>
                    <div className='like-content'>
                        <div>
                            <h1>Most Loved projects</h1>
                            <p>Discover most liked and viewed projects that stand out for innovation and profitability on Project RecycleVerse.</p><br />
                            <a href="">Search →</a>
                        </div>
                        <div className='overlike'>
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/cftx5x40cssur9er.svg?w=150&h=30&dpr=2" alt="" />
                            <p>
                                "The intuitive platform made buying my first app project a breeze!" - Jenna K.
                            </p>
                            <div className='inner-overlike'>
                                <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_wfKJyoksALKsfAWv/n2qivwn73qp5m1d5.png?w=50&h=50&fit=crop&dpr=2" alt="" />
                                <p>You Customer
                                    Project Buyer</p>
                            </div>
                        </div>

                    </div>
                    <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_CKYbESFHYFZfLgwR/noyhg1a3jpzswulk.svg" alt="" />
                </div>

                <div className='brand'>
                    <h1>Brand Partners</h1>
                    <p>Collaborating with industry giants, our platform ensures a secure and reliable trading environment.</p>
                    <div className='brand-img'>
                        <div className='img-slide'>
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/cftx5x40cssur9er.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/crl58tr3aum5qqxt.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/m94w5tqxbjg8vdoy.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/f2akjzux5n6kt1hq.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/ucqelacyxyc68bvz.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/2yrc335q2nikn4cc.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/6ovw3a4z6o5mtfzb.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/0dt47g3t2ffy7r28.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/133ugvf43x0psc82.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/4rgex0ascb7yrgsa.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/2a8vrw51vy1lz6ab.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/cftx5x40cssur9er.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/crl58tr3aum5qqxt.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/m94w5tqxbjg8vdoy.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/f2akjzux5n6kt1hq.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/ucqelacyxyc68bvz.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/2yrc335q2nikn4cc.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/6ovw3a4z6o5mtfzb.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/0dt47g3t2ffy7r28.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/133ugvf43x0psc82.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/4rgex0ascb7yrgsa.svg?h=35&dpr=2" alt="" />
                            <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_RlIveqaGCTRDIbSf/2a8vrw51vy1lz6ab.svg?h=35&dpr=2" alt="" />
                            
                        </div>

                    </div>
                </div>

                <div className='tprojects'>
                    <h1 className='tprojects-h1'>Top Trending Projects ➠</h1>
                    <p>Discover the Trend</p>
                    <div className='inner-tprojects'>
                        <div className={`tproject-content ${flip ? 'isflip' : ''}`}>
                            <div className='front'>
                            {backContents[backContentIndex].icon}
                                <h3>{backContents[backContentIndex].title}</h3>
                                <p>{backContents[backContentIndex].description}</p>
                                <button onClick={() => {setflip(true);handleNextBack()}}>Next Project</button>
                                
                            </div>
                            <div className='back'>
                                {backContents[backContentIndex].icon}
                                <h3>{backContents[backContentIndex].title}</h3>
                                <p>{backContents[backContentIndex].description}</p>
                                <button onClick={() => {setflip(false);handleNextBack()}}>Next Project</button>
                            </div>
                        </div>
                        <div className='tproject-content'>
                            <FaBiohazard style={{ fontSize: "27px" }} />
                            <h3>Bio</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <button>Next Project</button>
                        </div>
                        <div className='tproject-content'>
                            <img src="https://p9606ab2o9mfzx5m.umso.co/lib_LhuefaHhCaLhDedO/l95gasi9poj4ksz7.svg?w=24&h=24&dpr=2" alt="" />
                            <h3>Architecture</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <button>Next Project</button>
                        </div>
                        <div className='tproject-content'>
                            <img src="https://p9606ab2o9mfzx5m.umso.co/lib_LhuefaHhCaLhDedO/wgnhwqs8hwtdib3f.svg?w=24&h=24&dpr=2" alt="" />
                            <h3>Phama</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <button>Next Project</button>
                        </div>
                        <div className='tproject-content'>
                            <img src="https://p9606ab2o9mfzx5m.umso.co/lib_LhuefaHhCaLhDedO/lclguv0za3u0jzbb.svg?w=24&h=24&dpr=2" alt="" />
                            <h3>IT/CSE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <button>Next Project</button>
                        </div>
                        <div className='tproject-content'>
                            <MdAreaChart style={{ fontSize: "27px" }} />
                            <h3>Arts</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <button>Next Project</button>
                        </div>
                    </div>


                </div>

                <div className='opportunity'>
                    <h1 className='opportunity-h1'>Discover Your Next Opportunity</h1>
                    <p>Explore a marketplace where buying and selling projects is as easy as a click. Connect, transact, and grow with ProjectHub.</p>
                    <div className='opportunity-content'>
                        <div className='inner-opportunity' >
                            <div className='opportunity-dis'>
                                <h1>Create Your Profile</h1>
                                <p>Sign up and customize your personal dashboard to showcase your projects or discover new opportunities tailored to your skills.</p>
                                <a href="">Create Account/Login</a>
                            </div>

                            <img src="https://p9606ab2o9mfzx5m.umso.co/lib_NzBDnSGOloSegeaJ/5324882.jpeg?w=800&h=800&dpr=2" alt="" />
                        </div>

                        <div className='inner-opportunity'>
                            <img src="https://p9606ab2o9mfzx5m.umso.co/lib_NzBDnSGOloSegeaJ/6347924.jpeg?w=800&h=800&dpr=2" alt="" />
                            <div className='opportunity-dis'>
                                <h1>Post Projects</h1>
                                <p>Upload your projects with ease. Add details, verify, set your price, and connect with buyers all around the world.</p>
                                <a href="">Upload and Verify</a>
                            </div>
                        </div>

                        <div className='inner-opportunity'>
                            <div className='opportunity-last'>
                                <h1>Find Projects</h1>
                                <p>Use our intuitive search filters to find projects that match your interests or business needs and start bidding today.</p>
                                <a href="">Search for Projects</a>
                            </div>
                            <img src="https://p9606ab2o9mfzx5m.umso.co/lib_NzBDnSGOloSegeaJ/6368835.jpeg?w=800&h=800&dpr=2" alt="" />
                        </div>

                    </div>
                </div>


                <div className='portfolio'>
                    <div>
                        <h1>Create your Portfolio</h1>
                        <p>Upload your projects and store them for lifetime!</p>
                    </div>
                    <div className='inner-portfolio'>
                        <a href="">Get Started Now</a>
                        <a href="">See The Treanding Skills</a>
                    </div>

                </div>
                <ScrollTrigger onEnter={() => setscrolltrigger(true)}>
                    <div className='grow'>
                        <h1>Grow and earn with us!</h1>
                        <p> Over thousands have leveraged Project Marketplace to kickstart ventures and transform ideas into businesses.</p>
                        <div className='inner-grow'>
                            <div>
                                <h2>{scrolltrigger && (<CountUp style={{ color: "white" }} start={0} end={5000} duration={2} delay={0}></CountUp>)} +</h2>

                                <p>Projects Listed</p>
                            </div>
                            <div>
                                <h2>{scrolltrigger && (<CountUp style={{ color: "white" }} start={0} end={800} duration={2} delay={0}></CountUp>)} +</h2>
                                <p>projects sold everyday!</p>
                            </div>
                            <div>
                                <h2>{scrolltrigger && (<CountUp style={{ color: "white" }} start={0} end={1000} duration={2} delay={0}></CountUp>)} +</h2>
                                <p>Active Users</p>
                            </div>

                        </div>
                    </div>
                </ScrollTrigger>

                <div className='reviews'>
                    <p>A marketplace dedicated to the exchange of professional projects.</p>
                    <div className='reviews-table'>
                        <table >
                            <tr>
                                <td><StarRating rating={4.5} /></td>
                            </tr>
                            <tr>
                                <td><h4>"A Game-Changer for Selling Ideas"</h4></td>
                            </tr>
                            <tr>
                                <td><p>"ProjectHub revolutionized how I monetize my unused concepts—truly a game-changer in the industry!"</p></td>
                            </tr>
                            <tr>
                                <td><p>Evan Smith - Seller</p></td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td>
                                    <StarRating rating={4} />
                                </td>
                            </tr>
                            <tr>
                                <td><h4>"From Idea to Income"</h4></td>

                            </tr>
                            <tr>
                                <td><p>"I turned my shelved designs into a steady income, thanks to ProjectHub's seamless platform."</p></td>

                            </tr>
                            <tr>
                                <td><p>Taylor - Buyer</p></td>

                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td>
                                    <StarRating rating={5} />

                                </td>
                            </tr>
                            <tr>
                                <td><h4>"Project Discovery Simplified"</h4></td>

                            </tr>
                            <tr>
                                <td><p>"Finding and purchasing projects has never been easier. ProjectHub has simplified my search process."</p></td>

                            </tr>
                            <tr>
                                <td><p>Riley - Investor</p></td>

                            </tr>
                        </table>


                    </div>

                </div>

                <div className='work'>
                    <div className='headofall'>
                        <h1>How It Works</h1>
                        <p>From listing your project to making the sale, discover how Project Marketplace streamlines your experience.</p>
                    </div>
                    <div className='inner-work'>
                        <div className='work-content'>
                            <HiFire style={{ marginLeft: "20px", fontSize: "25px" }} />
                            <h3>Create account</h3>
                            <p> List your project in a few clicks, set your price, and you're ready to connect with buyers worldwide.</p>
                        </div>
                        <div className='work-content'>
                            <BsClockFill style={{ marginLeft: "20px", fontSize: "20px" }} />
                            <h3>List the project</h3>
                            <p>Filter projects by category, price, or popularity to find exactly what you're looking for, quickly and efficiently.</p>
                        </div>
                        <div className='work-content'>
                            <IoMdCloud style={{ marginLeft: "20px", fontSize: "25px" }} />
                            <h3>Earn lifetime!</h3>
                            <p>Transactions are secured with end-to-end encryption, ensuring safety for buyer and seller funds.</p>
                        </div>
                    </div>
                </div>

                <div className='faqs'>
                    <div className='headofall'>
                        <h1>FAQs</h1>
                        <p>Questions on your mind? Get instant answers to common queries right here.</p>
                    </div>
                    <div className='inner-faqs'>
                        <p>  How do I list my project for sale? <br />
                            Start by creating an account, then use the 'Sell Your Project' feature to upload details and set your price.</p>
                        <p>What types of projects can I sell?</p>
                        <p>We use trusted payment gateways with encryption and offer escrow services for peace of mind.</p>
                        <p>
                            What fees are involved in buying and selling?<br />
                            Our platform charges a modest listing fee and a transaction fee upon the successful sale of your project.
                        </p>
                    </div>
                </div>

                <div className='team'>
                    <div className='headofall'>
                        <h1>Meet Our Team</h1>
                        <p>Discover the driving force behind Project MarketPlace – our dedicated team of experts committed to making your buy-and-sell experience seamless and successful.</p>

                    </div>
                    <div className='inner-team'>
                        <div className='team-content'>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "250px" }}>
                                <img src="https://p9606ab2o9mfzx5m.umso.co/lib_CTmRtjaDwwsDLbTJ/qi4aumk129zh567g.png?w=100&h=100&fit=crop&dpr=2" alt="" />
                                <p>Avery<br />
                                    Project Manager</p>
                            </div>
                            <p>With a keen eye for detail and supreme organizational skills, our Project Manager ensures that all marketplace operations run smoothly and efficiently.</p>
                        </div>
                        <div className='team-content'>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "250px" }}>
                                <img src="https://p9606ab2o9mfzx5m.umso.co/lib_CTmRtjaDwwsDLbTJ/vofih0g2a0qftklb.png?w=100&h=100&fit=crop&dpr=2" alt="" />
                                <p>
                                    Evan <br />
                                    Sales Specialist
                                </p>
                            </div>
                            <p>Our Sales Specialist is the maestro of deals, connecting project creators with buyers and fostering an environment of successful transactions.</p>
                        </div>
                        <div className='team-content'>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "200px" }}>
                                <img src="https://p9606ab2o9mfzx5m.umso.co/lib_CTmRtjaDwwsDLbTJ/c6wivaekqho9u45n.png?w=100&h=100&fit=crop&dpr=2" alt="" />
                                <p> Riley<br />
                                    Tech Lead</p>
                            </div>
                            <p>A wizard with code, our Tech Lead is dedicated to maintaining a cutting-edge platform that’s secure, fast, and user-friendly for all your project dealings.</p>
                        </div>

                    </div>
                </div>

                <div className='contactus'>
                    <h1 className='contactus-h1'>Connect with us.</h1>
                    <p style={{ textAlign: "center" }}>Have a requirement or want to explore some exclusive features? Fill the form, our team will contact you shortly.</p>
                    <div className='inner-contactus'>
                        <label htmlFor="">Full Name</label><br />
                        <input type="text" name="" id="" placeholder='Jane Dane' />
                        <div className='contactusdiv'>
                            <div>
                                <label htmlFor="">Email Address</label><br />
                                <input type="text" name="" id="" placeholder='jane.doe@mail.com' />
                            </div>
                            <div>
                                <label htmlFor="">Phone (Optional)</label><br />
                                <input type="text" name="" id="" placeholder='(123) 456-7890' />
                            </div>
                        </div>
                        <label htmlFor="">Your Message</label><br />
                        <textarea className='custom-textarea' name="message" rows={5} cols={79} id=""></textarea>
                        <p>By clicking below, you agree to all terms and conditions.</p>
                        <input type="checkbox" name="" id="cck" /><br />
                        <button>Send Message</button>
                    </div>
                </div>

            </div >


            <Footer></Footer>
        </div >
    )
}


export default Land