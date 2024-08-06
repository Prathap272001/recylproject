import React, { useState } from 'react'
import Footer from './Footer'
import { IoMdNotifications } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Link, useNavigate } from 'react-router-dom';
import { PieChart, BarChart } from '@mui/x-charts'
import { Chart } from "react-google-charts";
import { LineChart } from '@mui/x-charts/LineChart';
import { Box } from '@mui/material';
import { MdOutlinePeople } from "react-icons/md";
import { MdMonetizationOn } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { FaBoxArchive } from "react-icons/fa6";
import Nav from './Nav';
import './Sellproject.css'

function Sellproject() {

    const data = [
        ["Projects", "views"],
        ["Project1", 1000],
        ["Project2", 570],
        ["Project3", 260],
        ["Project4", 430],
    ];

    const nav = useNavigate();
    
    return (
        <div>
            <Nav></Nav>
            <div className='belownav' id='topup'>
                <div className='navpara'>
                    <h1 style={{marginBottom:"-30px"}}>Unleash your </h1>
                    <h1 style={{ color: "rgb(121, 80, 242)", marginBottom:"10px" }}>Creativity</h1>
                    <p>Upload, Verify and Sell your Projects.</p>
                    <div className='navbutton' >
                        <Link to={'/myspace'}>Myspace</Link>
                        <a href="">My Products</a>
                    </div>
                </div>

                <img src="https://5pgakfdyupjksl98.umso.co/lib_jbNHCiIIrXAzpmCT/wma181qyhrnfmtzt.png" alt="" />
            </div>
            <div className='inner-content'>
                <div className='mydash'>
                    <h3>Manage Profile</h3>
                    <h1>My Dashboard</h1>
                    <p style={{fontSize:"25px"}}>All Projects</p>
                    <div className='projectdrop'>

                    </div>
                    <div className='inner-mydash'>
                        <div className='mydash-content1'>
                            <h3>Project Statistics</h3>
                            <p>Total Views:</p>
                            <div className='inner-content1'>

                                <div className='content1-chart'>
                                    <Chart
                                        chartType="Bar"
                                        width="100%"
                                        data={data}
                                        options={{
                                            legend: { position: 'none' },
                                            hAxis: {
                                                title: 'X Axis Title',
                                                textPosition: 'none' // Hide horizontal axis labels
                                            },
                                            vAxis: {
                                                title: 'Y Axis Title',
                                                textPosition: 'none' // Hide vertical axis labels
                                            },
                                            chartArea: { width: '50%' }, // Adjust the chart area
                                        }}
                                    />


                                    <div className='inner-chart2'>
                                        <Chart
                                            chartType="PieChart"
                                            data={data}
                                            options={{
                                                backgroundColor: { fill: 'transparent' }, legend: "none",
                                                pieSliceText: "label",
                                            }}
                                            width={"200px"}

                                        />
                                        <Box
                                            sx={{
                                                width: 200,
                                                height: 200,
                                                backgroundColor: 'white', // White color with 50% transparency
                                                backdropFilter: 'blur(10px)',
                                                borderRadius: '16px', // Add border radius for rounded corners
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <LineChart
                                                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                                series={[
                                                    {
                                                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                                                    },
                                                ]}
                                                width={230}
                                                height={200}
                                            />
                                        </Box>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='mydash-content2'>
                            <h3>Total Revenue</h3>
                            <p> Detailed breakdown</p>
                            <div className='inner-content21'>
                                <div className='content21-pro'>
                                    <p style={{ marginTop: "10px" }}>jhon@gmail.com</p>
                                    <IoMdNotifications style={{ fontSize: "17px", marginTop: "10px", marginLeft: "-30px" }} />

                                    <img src="https://p9606ab2o9mfzx5m.umso.co/lib_CTmRtjaDwwsDLbTJ/vofih0g2a0qftklb.png?w=100&h=100&fit=crop&dpr=2" alt="" />
                                </div>
                                <div className='content21-layout'>
                                    <div className='content21-up'>
                                        <p><FaBoxArchive /> Products</p>
                                        <h2>58</h2>

                                    </div>
                                    <div className='content21-up'>
                                        <p><MdMonetizationOn /> Total Income</p>
                                        <h2>$ 5,558</h2>

                                    </div>
                                    <div className='content21-up'>
                                        <p><GiShoppingCart /> Total Order</p>
                                        <h2>162</h2>

                                    </div>
                                    <div className='content21-up'>
                                        <p><MdOutlinePeople /> visitors</p>
                                        <h2>858</h2>

                                    </div>
                                </div>
                                <div className='inner-charts'>
                                <BarChart
                                    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }]}
                                    width={300}
                                    height={170}
                                />
                                <BarChart
                                    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }]}
                                    width={300}
                                    height={170}
                                />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='inner-mydash'>
                        <div className='mydash-content2'>
                            <h3>My meetings</h3>
                            <p> All business meetings and Clients Messages will be shown here.</p>
                            <div className='inner-content22'>
                                <div className='content21-pro'>
                                    <p style={{ marginTop: "10px" }}>jhon@gmail.com</p>
                                    <IoMdNotifications style={{ fontSize: "17px", marginTop: "10px", marginLeft: "-30px" }} />

                                    <img style={{ marginRight: "20px" }} src="https://p9606ab2o9mfzx5m.umso.co/lib_CTmRtjaDwwsDLbTJ/vofih0g2a0qftklb.png?w=100&h=100&fit=crop&dpr=2" alt="" />
                                </div>
                                <div className='content21-layout'>
                                    <div className='content21-up'>
                                        <p><FaBoxArchive /> Products</p>
                                        <h2>58</h2>

                                    </div>
                                    <div className='content21-up'>
                                        <p><MdMonetizationOn /> Total Income</p>
                                        <h2>$ 5,558</h2>

                                    </div>
                                    <div className='content21-up'>
                                        <p><GiShoppingCart /> Total Order</p>
                                        <h2>162</h2>

                                    </div>
                                    <div className='content21-up'>
                                        <p><MdOutlinePeople /> visitors</p>
                                        <h2>858</h2>

                                    </div>
                                </div>
                                <div className='inner-charts'>
                                    <BarChart
                                        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                                        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }]}
                                        width={300}
                                        height={170}
                                    />
                                    <BarChart
                                        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                                        series={[{ data: [4, 3, 5],barWidth: 5 }, { data: [1, 6, 3] }]}
                                        width={300}
                                        height={170}
                                        barCategoryGap="50%" 
                                        barGap="10%" 
                                    />
                                </div>


                            </div>

                        </div>
                        <div className='mydash-content1'>
                            <h3>Top Skills</h3>
                            <p>Great Skills to have!</p>
                            <div className='inner-content1'>

                            </div>

                        </div>
                    </div>

                </div>


                <div className='sellorbuy'>
                    <img src="https://wpwhdp61xwxnbqd5.umso.co/lib_VqklgcdQPwUUmmqp/2p687vyncs5dy8sx.png?w=1200&dpr=2" alt="" />
                </div>
                <div className='portfolio'>
                    <div>
                        <h1>Create your Portfolio</h1>
                        <p>Upload your projects and store them for lifetime!</p>
                    </div>
                    <div className='inner-portfolio'>
                        <a href="">Get Started Now</a>
                        <a href="">Go to MySpace </a>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Sellproject