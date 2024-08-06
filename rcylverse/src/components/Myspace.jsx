import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import './Myspace.css'
import { MdFileUpload } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { HiFire } from "react-icons/hi";
import { BsClockFill } from "react-icons/bs";
import { IoMdCloud } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";

function Myspace() {
    const projects = [
        {
            img: <img src="/myspc1.svg" alt="" />,
            name: "Project 1",
            time: "last edited: 14:03 - 24th March 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        {
            img: <img src="/myspc1.svg" alt="" />,
            name: "Project 2",
            time: "last edited: 14:03 - 24th March 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        {
            img: <img src="/myspc1.svg" alt="" />,
            name: "Project 3",
            time: "last edited: 14:03 - 24th March 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        {
            img: <img src="/myspc1.svg" alt="" />,
            name: "Project 4",
            time: "last edited: 14:03 - 24th March 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        {
            img: <img src="/myspc1.svg" alt="" />,
            name: "Project 5",
            time: "last edited: 14:03 - 24th March 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        {
            img: <img src="/myspc1.svg" alt="" />,
            name: "Project 6",
            time: "last edited: 14:03 - 24th March 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
       

    ]
    return (
        <div>
            <Nav></Nav>
            <div className='myspace-back' style={{backgroundColor:"rgb(255, 242, 242)"}}>
            <div className='belownav1' id='topup'>
                <div className='navpara1'>
                    <h1 style={{ marginBottom: "-10px" }}>MySpace </h1>
                    <p>Connect, share, and express yourself on Myspace. Build your personal space, showcase your creativity, and engage with your community— All in one place.</p>
                    <div className='navbutton1' >
                        <a href="">upload</a>
                        <a href=""><IoIosSearch style={{marginBottom:"-4px"}} /> Search files</a>
                    </div>
                </div>

                <img src="/myspc.svg" alt="" />
            </div>
            </div>
            <div className='inner-content'>

                <div className='work1'>
                    <div className='headofall2'>
                        <h1>Documents</h1>
                        <p>All your Documents at one place.</p> 
                        <a href="">Add File <FaArrowRightLong style={{paddingLeft:"5px",marginBottom:"-2px"}} /></a>
                    </div>
                    <div className='inner-work1'>
                        <div className='work-content1'>
                            <HiFire style={{ marginLeft: "20px", fontSize: "25px" }} />
                            <h3>Document 1</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className='work-content1'>
                            <IoDocumentTextOutline  style={{ marginLeft: "20px", fontSize: "20px" }} />
                            <h3>Document 2</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className='work-content1'>
                            <IoEye style={{ marginLeft: "20px", fontSize: "25px" }} />
                            <h3>Item 5</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className='work-content1'>
                            <IoMdCloud style={{ marginLeft: "20px", fontSize: "25px" }} />
                            <h3>Item 6</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </div>

                <div className='project-list'>
                    <div className='headofall1'>
                        <h1>My Projects</h1>
                    </div>
                    <div className='inner-pl'>
                        {projects.map((project, index) => (
                            <div key={index} className='pl-content'>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "250px" }}>
                                    {project.img}
                                    <p>{project.name} <br /> {project.time}</p>
                                </div>
                                <p>{project.description}</p>
                            </div>
                        )

                        )}

                    </div>
                </div>

                <div className='portfolio'>
                    <div>
                        <h1>Verify and Sell.</h1>
                        <p>Make the most out of your projects</p>
                    </div>
                    <div className='inner-portfolio'>
                        <a href=""> <IoMdArrowDropdown style={{marginBottom:"-4px"}} /> Drag and Drop Files</a>
                        <a href=""> <MdFileUpload style={{marginBottom:"-4px"}} /> Upload from MySpace</a>
                    </div>

                </div>
                <div className='sellorbuy'>
                    <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_VqklgcdQPwUUmmqp/2p687vyncs5dy8sx.png?w=1200&dpr=2" alt="" />
                </div>

            </div>

            <Footer></Footer>
        </div>
    )
}

export default Myspace