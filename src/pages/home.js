import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap'
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {AiFillSkype} from 'react-icons/ai';
import {BsBehance} from 'react-icons/bs';
import {BsTelephoneFill} from 'react-icons/bs';
import {FaAngleRight} from 'react-icons/fa';
import {CiLocationOn} from 'react-icons/ci';
import {MdAlternateEmail} from 'react-icons/md';
import {FaThumbsUp} from 'react-icons/fa';
import {FaGlobeAfrica} from 'react-icons/fa';
import {FaTrophy} from 'react-icons/fa';
import {BsFillHeartFill} from 'react-icons/bs';
import {GiBubblingFlask} from 'react-icons/gi';
import {AiOutlineGlobal} from 'react-icons/ai';
import {HiChip} from 'react-icons/hi';
import {GiAtom} from 'react-icons/gi';
import {FaMedal} from 'react-icons/fa';
import {HiOutlineLightBulb} from 'react-icons/hi';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {BsPlayCircleFill} from 'react-icons/bs';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {BsPinterest} from 'react-icons/bs';
import logo from '../assets/logo.png';
import logo1 from '../assets/logo1.png';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';
import p7 from '../assets/p7.jpg';
import p8 from '../assets/p8.jpg';
import photo from '../assets/photo.jpg';
import men from '../assets/men.png';
import videobg from '../assets/videobg.jpg';
import t1 from '../assets/t1.jpg';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import b4 from '../assets/b4.jpg';
import b5 from '../assets/b5.jpg';
import b6 from '../assets/b6.jpg';
import d1 from '../assets/d1.png';
import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png';
import d4 from '../assets/d4.png';
 

const Home = () => {
    
    return (
        <>
    	    <div className='header'>
                <div className='header-top-area sec-p-30'>
                    <Container className='w-110'>
                        <div className='row'>
                        <div className='flex'>
                        <div className='col-md-12'>
                                <div className='tractor-lang float-left'>
                                    <select className='tractor-lang'>
                                        <option>English</option>
                                        <option>Bangla</option>
                                        <option>Spanish</option>
                                    </select>
                                </div>
                                <ul className='header-top-social'>
                                    <li><a className='text-white'><FaFacebookF/></a></li>
                                    <li><a className='text-white'><FaTwitter/></a></li>
                                    <li><a className='text-white'><FaLinkedinIn/></a></li>
                                    <li><a className='text-white'><FaInstagram/></a></li>
                                    <li><a className='text-white'><AiFillSkype/></a></li>
                                    <li><a className='text-white'><BsBehance/></a></li>
                                </ul>
                                <div className='quote-btn float-right '>
                                    <a className='btn btn-type-4'>get a quote</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Container>
                </div>
                <div className='header-middle-area sec-p-30'>
                    <Container className='w-1170'>
                        <div className='row'>
                            <div className='col-md-5'>
                                <div className='header-middle-logo'>
                                    <img src={logo}/>
                                </div>
                            </div>
                            <div className='col-md-7'>
                                <ul className='header-middle-short-info'>
                                    <div className='owl-carousel owl-carousel owl-theme float-right owl-loaded owl-drag'>
                                         <div className='owl-stage-outer'>
                                            <li><i><BsTelephoneFill/></i>
                                            <div className='short-info'>phone number:
                                            <h4>00-123-123-4567</h4>
                                            </div>
                                            </li>
                                            <li><i><CiLocationOn/></i>
                                            <div className='short-info'>address location:
                                            <h4>25737 UK Rt 11, BL 22</h4>
                                            </div>
                                            </li>
                                            <li><i><MdAlternateEmail/></i>
                                            <div className='short-info'>email address:
                                            <h4>bd@tractour.com</h4>
                                            </div>
                                            </li>
                                         </div>       
                                    </div>
                                </ul>
                            </div>
                            <Navbar className='head'  expand="lg">
                              <div className='w-1140'>
                               <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                  <Navbar.Collapse id="basic-navbar-nav">
                                      <Nav className="ms-auto gap">
                                      <Nav.Link className='text11' href="#link">Home</Nav.Link>
                                     <NavDropdown title="pages" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                                          <NavDropdown.Item href="#action/3.2">
                                              Services
                                         </NavDropdown.Item>
                                       <NavDropdown.Item href="#action/3.3">Blocks Services</NavDropdown.Item>
                                         <NavDropdown.Divider />
                                       <NavDropdown.Item href="#action/3.4">
                                          Contact
                                        </NavDropdown.Item>
                                 </NavDropdown>
                                 <NavDropdown title="Project" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Project1</NavDropdown.Item>
                                          <NavDropdown.Item href="#action/3.2">
                                              Project2
                                         </NavDropdown.Item>
                                       <NavDropdown.Item href="#action/3.3">Project3</NavDropdown.Item>
                                         <NavDropdown.Divider />
                                       <NavDropdown.Item href="#action/3.4">
                                           Project4
                                        </NavDropdown.Item>
                                 </NavDropdown>
                                 <NavDropdown title="Blogs" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">blogs 2 column</NavDropdown.Item>
                                          <NavDropdown.Item href="#action/3.2">
                                             blogs 3 column
                                         </NavDropdown.Item>
                                       <NavDropdown.Item href="#action/3.3">Masonry blog</NavDropdown.Item>
                                         <NavDropdown.Divider />
                                       <NavDropdown.Item href="#action/3.4">
                                       blogs Details
                                        </NavDropdown.Item>
                                 </NavDropdown>
                                 <NavDropdown title="Shop" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">shop 2 column</NavDropdown.Item>
                                          <NavDropdown.Item href="#action/3.2">
                                             shop 3 column
                                         </NavDropdown.Item>
                                       <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
                                         <NavDropdown.Divider />
                                       <NavDropdown.Item href="#action/3.4">
                                       shop 4 column
                                        </NavDropdown.Item>
                                 </NavDropdown>        
                                </Nav> 
                             </Navbar.Collapse>
                                 </div>
                          </Navbar>
                        </div>
                    </Container>
                </div>
                <div className='slider-area'>
                    <div className='tractor-single-table'>
                        <div className='tractor-single-tablecell'>
                            <Container className='w-1170'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <h1 className='pt-5 trc'>TRACTOUR</h1>
                                        <br/>
                                        <h1 className='trc'>CHOICE FOR INDUSTRY</h1>
                                        <p className='pt-3 dec'>lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do eiusmod
                                            <br/>
                                            teporara incididunt ugt labore.
                                        </p>
                                        <div className='pb-5 pt-5'>
                                        <a className='btn1 btn-type-3'>OUR SERVICES</a>
                                        <a className='btn2 btn-type-4'>PURCHASE NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>
                    <Container className='w-1140'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='single-blocks-services pt-5'>
                                    <div className='single-blocks-img'>
                                    <img src={img1} className='img-fluid'/>
                                    </div>
                                    <h3>
                                        <a className='text-center text-black text-decoration-none'>welding machine using</a>
                                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demor</p>
                                        <a className='btn'>
                                            <i>
                                                <FaAngleRight className='pb-2'/>
                                            </i>
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='single-blocks-services pt-5'>
                                    <div className='single-blocks-img'>
                                    <img src={img2} className='img-fluid'/>
                                    </div>
                                    <h3>
                                        <a className='text-center text-black text-decoration-none'>new compost technology</a>
                                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demor</p>
                                        <a className='btn'>
                                            <i>
                                                <FaAngleRight className='pb-2'/>
                                            </i>
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='single-blocks-services pt-5'>
                                    <div className='single-blocks-img'>
                                    <img src={img3} className='img-fluid'/>
                                    </div>
                                    <h3>
                                        <a className='text-center text-black text-decoration-none'>new welding machine
                                        </a>
                                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demor</p>
                                        <a className='btn'>
                                            <i>
                                                <FaAngleRight className='pb-2'/>
                                            </i>
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='project-area bg-color3 sec-p-100 text-center'>
                <div className='w-1140'>
                            <div className='row'>
                                <div className='col-md-6 mx-auto'>
                                    <div className='section-title text-center mb-70'>
                                        <h2>PROJECTS</h2>
                                        <span>
                                            <img src={logo1}/>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ncc msm lal uFlaboreLorem ipsum dolor sit amet,
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                 </div>
                 <div className='project-wraper'>
                    <div className='container-fluid p-0'>
                        <div className='row'>
                            <div className='col-md-3 col-sm-6'>
                                <div className='single-project'>
                                    <img className='img-fluid' src={p1}/>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6'>
                                <div className='single-project'>
                                    <img className='img-fluid' src={p2}/>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6'>
                                <div className='single-project'>
                                    <img className='img-fluid' src={p3}/>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6'>
                                <div className='single-project'>
                                    <img className='img-fluid' src={p4}/>
                                </div>
                            </div>
                           <div className='space-20'></div>
                           <div className='col-md-3 col-sm-6'>
                                <div className='single-project'>
                                    <img className='img-fluid' src={p5}/>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6'> 
                                <div className='single-project'>
                                    <img className='img-fluid' src={p6}/>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6'>
                                <div className='single-project'>
                                    <img className='img-fluid' src={p7}/>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6'>
                                <div className='single-project'>
                                    <img className='img-fluid' src={p8}/>
                                </div>
                            </div>
                            <div className='more pt-3'>
                                <button><a className='btn22'>MORE</a></button>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className='about-area sec-p-100'>
                    <div className='w-1140'>
                        <div className='row'>
                            <div className='col-md-6 '>
                                <h2>About Our History</h2>
                                <p className='pb-3'>But I must explain to you how all this mistaken idea of denouncing pleasure praising pain was born and I will give you a complete account of the system, expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itselfBut I must explain to you how all this mistaken idea of denouncing i and pleasure and praising pain was born and I will give you a complete account of system, and expound the actual teachings of</p>
                                <button className='bt'><a className='btn22'>ABOUT MORE</a></button>
                            </div>
                            <div className='col-md-6'>
                                <img src={photo}/>
                             </div>           
                        </div>
                    </div>
                 </div>
                 <div className='counter-area sec-p-100 counter-bg text-center'>
                    <div className='w-1140'>
                        <div className='row'>
                            <div className='col-md-3 single'>
                                <div className='single-counter'>
                                    <i>
                                    <FaThumbsUp/>
                                    </i>
                                    <div className='counter'>
                                        <span>270</span>
                                    </div>
                                    <div className='count-name'>Projects Done</div>
                                </div>
                            </div>
                            <div className='col-md-3 single'>
                                <div className='single-counter'>
                                    <i>
                                    <FaGlobeAfrica/>
                                    </i>
                                    <div className='counter'>
                                        <span>400</span>
                                    </div>
                                    <div className='count-name'>Across Worldwide</div>
                                </div>
                            </div>
                            <div className='col-md-3 single'>
                                <div className='single-counter'>
                                    <i>
                                    <FaTrophy/>
                                    </i>
                                    <div className='counter'>
                                        <span>690</span>
                                    </div>
                                    <div className='count-name'>Awards Winning</div>
                                </div>
                            </div>
                            <div className='col-md-3 single'>
                                <div className='single-counter'>
                                    <i>
                                    <BsFillHeartFill/>
                                    </i>
                                    <div className='counter'>
                                        <span>100</span>
                                    </div>
                                    <div className='count-name'>Satisfied Customers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className='services-area sec-p-100 text-center'>
                    <div className='w-1140'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='single-services-wraper border-bottom'>
                                    <div className='services-icon'>
                                        <i>
                                            <GiBubblingFlask/>
                                        </i>
                                    </div>
                                    <div className='services-content'>
                                        <h4>Energy & Utilities</h4>
                                        <p>I must explain to you how all this idea of denouncing pleasure and praising</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='single-services-wraper border-bottom'>
                                    <div className='services-icon'>
                                        <i>
                                            <AiOutlineGlobal/>
                                        </i>
                                    </div>
                                    <div className='services-content'>
                                        <h4>Internet Of Things</h4>
                                        <p>I must explain to you how all this idea of denouncing pleasure and praising</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='single-services-wraper border-bottom'>
                                    <div className='services-icon'>
                                        <i>
                                            <HiChip/>
                                        </i>
                                    </div>
                                    <div className='services-content'>
                                        <h4>Artificial Intelligence</h4>
                                        <p>I must explain to you how all this idea of denouncing pleasure and praising</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='single-services-wraper border-bottom'>
                                    <div className='services-icon'>
                                        <i>
                                            <GiAtom/>
                                        </i>
                                    </div>
                                    <div className='services-content'>
                                        <h4>Worldwide Provider</h4>
                                        <p>I must explain to you how all this idea of denouncing pleasure and praising</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='single-services-wraper border-bottom'>
                                    <div className='services-icon'>
                                        <i>
                                            <FaMedal/>
                                        </i>
                                    </div>
                                    <div className='services-content'>
                                        <h4>25+ Best Company Awards</h4>
                                        <p>I must explain to you how all this idea of denouncing pleasure and praising</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='single-services-wraper border-bottom'>
                                    <div className='services-icon'>
                                        <i>
                                            <HiOutlineLightBulb/>
                                        </i>
                                    </div>
                                    <div className='services-content'>
                                        <h4>Best Idea For Evar</h4>
                                        <p>I must explain to you how all this idea of denouncing pleasure and praising</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                            <a className='btn btn-type-3 mt-30'>SEE MORE
                            <i>
                                <AiOutlineArrowRight/>
                            </i>
                            </a>
                        
                    </div>
                 </div>
                 <div className='callto-action-area sec-p-100 cta-bg'>
                    <div className='w-1140'>
                        <div className='row'>
                            <div className='col-md-12 single'>
                                <div className='callto-action-content float-left text-white'>
                                    <h1>Looking for a reliable & stable partner?</h1>
                                    <p className='text-white'>CONTACT US & LEARN MORE ABOUT US</p>
                                </div>
                                <a className='btn btn-type-4 float-right mt-3'>CONTACT US</a>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className='team-area sec-p-100 text-center'>
                    <div className='w-1140'>
                        <div className='row'>
                            <div className='col-md-6 mx-auto'>
                                <div className='section-title text-center mb-70'>
                                    <h2>MEET OUR TEAM</h2>
                                    <span>
                                        <img src={logo1}/>
                                    </span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ncc msm lal uFlaboreLorem ipsum dolor sit amet,</p>

                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className='w-1140'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='single-team-wraper'>
                                <div className='team-img-wrape'>
                                    <img  src={t1} width='100%'/>
                                    <div className='member-desig'>
                                    <h4>FOUNDER</h4>
                                </div>
                                </div>
                                <div className='single-team-content'>
                                    <div className='member-title text-center'>
                                        <h3>
                                            <a>Michael Robert</a>
                                        </h3>
                                        <a>info@rob.com</a>
                                        <div className='team-social-text'>
                                        <ul className='team-social '>
                                            <li className='text-center'>
                                                <a>
                                                    <i>
                                                        <FaFacebookF/>
                                                    </i>
                                                </a>
                                            </li>
                                            <li className='text-center'>
                                                <a>
                                                    <i>
                                                        <FaTwitter/>
                                                    </i>
                                                </a>
                                            </li>
                                            <li className='text-center'>
                                                <a>
                                                    <i>
                                                        <FaLinkedinIn/>
                                                    </i>
                                                </a>
                                            </li>
                                        </ul>
                                        <p>On the other hand, we denounce with me a righteous indignation and dislike men who are so beguiled and demoralized by</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='single-team-wraper'>
                                <div className='team-img-wrape'>
                                    <img src={t2} width='100%'/>
                                    <div className='member-desig'>
                                    <h4>DEVELOPER</h4>   
                                </div>
                                </div>
                                <div className='single-team-content'>
                                    <div className='member-title text-center'>
                                        <h3>
                                            <a>David Shams Lr</a>
                                        </h3>
                                        <a>info@david.com</a>
                                        <div className='team-social-text'>
                                        <ul className='team-social '>
                                            <li className='text-center'>
                                                <a>
                                                    <i>
                                                        <FaFacebookF/>
                                                    </i>
                                                </a>
                                            </li>
                                            <li className='text-center'>
                                                <a>
                                                    <i>
                                                        <FaTwitter/>
                                                    </i>
                                                </a>
                                            </li>
                                            <li className='text-center'>
                                                <a>
                                                    <i>
                                                        <FaLinkedinIn/>
                                                    </i>
                                                </a>
                                            </li>
                                        </ul>
                                        <p>On the other hand, we denounce with me a righteous indignation and dislike men who are so beguiled and demoralized by</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 team'>
                            <div className='single-team-wraper'>
                                <div className='team-img-wrape'>
                                    <img src={t3} width='100%'/>
                                    <div className='member-desig'>
                                    <h4>DESIGNER</h4>
                                </div>
                                </div>
                                <div className='single-team-content'>
                                    <div className='member-title text-center'>
                                        <h3>
                                            <a>William Christopher</a>
                                        </h3>
                                        <a>info@willim.uk</a>
                                        <div className='team-social-text'>
                                        <ul className='team-social'>
                                            <li className='text-center'>
                                                <a>
                                                    <i>
                                                        <FaFacebookF/>
                                                    </i>
                                                </a>
                                            </li>
                                            <li className='text-center'>
                                                <a>
                                                    <i>
                                                        <FaTwitter/>
                                                    </i>
                                                </a>
                                            </li>
                                            <li className='text-center'>
                                                <a>
                                                    <i>
                                                        <FaLinkedinIn/>
                                                    </i>
                                                </a>
                                            </li>
                                        </ul>
                                        <p>On the other hand, we denounce with me a righteous indignation and dislike men who are so beguiled and demoralized by</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className='quote-sologan-area sec-p-100 text-center bg-color3 mt-5'>
                    <div className='w-1140'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h2>Delivering Innovation Sustainability Goals.</h2>
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
                                <a className='btn btn-type-3 mt-30'>get a quote</a>
                            </div>
                        </div>
                    </div>
                 </div>



                <div className='testimonial-area sec-p-100 text-center testimonial-bg'>
                    <div className='w-1140'>
                        <div className='row'>
                            <div className='col-md-12 single'>
                                <div className='all-testimonial-wraper '>
                                    <div className='single-testimonial'>
                                        <div className='client-message'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod you a tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                        </div>
                                        <div className='client-img'>
                                            <img src={men}/>
                                        </div>
                                        <div className='client-title'>
                                            <h3>michael david</h3>
                                            <h5>engineer</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='video-and-accordian-area sec-p-100'>
                    <div className='w-1140'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='tractour-video-area'>
                                    <img src={videobg}/>
                                    <div className='video-hvr'>
                                        <div className='video-view'>
                                            <i>
                                                <BsPlayCircleFill/>
                                            </i>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='tractour-accordian-wrapeer'>
                                    <div className='accordion'>
                                        <div className='card'>
                                            <div className='card-header'>
                                                <p>How Can We Work?                            
                                                </p>
                                            </div>
                                            <div className='card-body'>
                                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle of type and scrambled it to make a type book. It h as survived not only five centuries, but also the leap into ele ctronic typesetting,
                                            </div>
                                        </div>
                                        <div className='card'>
                                            <div className='card-header'>
                                                <p>payment system                            
                                                </p>
                                            </div>
                                            <div className='card-body'>
                                            {/* simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle of type and scrambled it to make a type book. It h as survived not only five centuries, but also the leap into ele ctronic typesetting, */}
                                            </div>
                                        </div>
                                        <div className='card'>
                                            <div className='card-header'>
                                                <p>24/7 supports online                          
                                                </p>
                                            </div>
                                            <div className='card-body'>
                                            {/* simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle of type and scrambled it to make a type book. It h as survived not only five centuries, but also the leap into ele ctronic typesetting, */}
                                            </div>
                                        </div>
                                        <div className='card'>
                                            <div className='card-header'>
                                                <p>bug fixing                           
                                                </p>
                                            </div>
                                            <div className='card-body'>
                                            {/* simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle of type and scrambled it to make a type book. It h as survived not only five centuries, but also the leap into ele ctronic typesetting, */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className='blog-area pb-85 mt-5'>
                    <div className='w-1140'>
                        <div className='row'>
                            <div className='col-md-6 mx-auto'>
                                <div className='section-title text-center mb-70'>
                                    <h2>blog area</h2>
                                    <span>
                                        <img src={logo1}/>
                                    </span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ncc msm lal uFlaboreLorem ipsum dolor sit amet,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                <div className='w-1140'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='single-blog'>
                                <div className='img-date-wrape'>
                                    <img src={b1}/>
                                    <div className='blog-date'>january 01, 2019</div>
                                </div>
                                <div className='blog-content'>
                                    <h3>
                                        <a>industrial revolution factory</a>
                                    </h3>
                                    <span></span>
                                    <p>industry. Lorem Ipsum has been the ever a industry standard dummy text ever since is the 1500 an unknown printer took a text ever since is the 1500</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='single-blog'>
                                <div className='img-date-wrape'>
                                    <img src={b2}/>
                                    <div className='blog-date'>March 11, 2018</div>
                                </div>
                                <div className='blog-content'>
                                    <h3>
                                        <a>Our Genius Engineer</a>
                                    </h3>
                                    <span></span>
                                    <p>industry. Lorem Ipsum has been the ever a industry standard dummy text ever since is the 1500 an unknown printer took a text ever since is the 1500</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='single-blog'>
                                <div className='img-date-wrape'>
                                    <img src={b3}/>
                                    <div className='blog-date'>December 10, 2011</div>
                                </div>
                                <div className='blog-content'>
                                    <h3>
                                        <a>Technical Solution Consultant</a>
                                    </h3>
                                    <span></span>
                                    <p>industry. Lorem Ipsum has been the ever a industry standard dummy text ever since is the 1500 an unknown printer took a text ever since is the 1500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='single-blog'>
                                <div className='img-date-wrape'>
                                    <img src={b4}/>
                                    <div className='blog-date'>December 05, 2019</div>
                                </div>
                                <div className='blog-content'>
                                    <h3>
                                        <a>Main Compost Machine</a>
                                    </h3>
                                    <span></span>
                                    <p>industry. Lorem Ipsum has been the ever a industry standard dummy text ever since is the 1500 an unknown printer took a text ever since is the 1500</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='single-blog'>
                                <div className='img-date-wrape'>
                                    <img src={b5}/>
                                    <div className='blog-date'>Septembor 14, 2020</div>
                                </div>
                                <div className='blog-content'>
                                    <h3>
                                        <a>Gas Plant Operator</a>
                                    </h3>
                                    <span></span>
                                    <p>industry. Lorem Ipsum has been the ever a industry standard dummy text ever since is the 1500 an unknown printer took a text ever since is the 1500</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='single-blog'>
                                <div className='img-date-wrape'>
                                    <img src={b6}/>
                                    <div className='blog-date'>January 17, 2019</div>
                                </div>
                                <div className='blog-content'>
                                    <h3>
                                        <a>Welding Machine Use</a>
                                    </h3>
                                    <span></span>
                                    <p>industry. Lorem Ipsum has been the ever a industry standard dummy text ever since is the 1500 an unknown printer took a text ever since is the 1500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='client-slider-area sec-p-100 bg-color3'>
                    <div className='w-1140'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='all-client-slider '>
                                    <img src={d1}/>
                                    <img src={d2}/>
                                    <img src={d3}/>
                                    <img src={d4}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-area black-bg sec-p-100'>
                    <div className='w-1140'>
                        <div className='row'>
                            <div className='col-md-3 col-sm-6'>
                                <div className='footer-widget widget-1'>
                                    <div className='footer-logo'>
                                        <a>
                                            <img src={logo}/>
                                        </a>
                                    </div>
                                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ands unknown printer took a galley of type and it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic pop</p>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6'>
                                <div className='footer-widget widget-2'>
                                    <h3>popular link</h3>
                                    <ul className='footer-popu-link'>
                                        <li>
                                            <a>
                                            laboratory
                                            <i>
                                                <BsFillArrowRightCircleFill/>
                                            </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            Industry
                                            <i>
                                                <BsFillArrowRightCircleFill/>
                                            </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            Materials
                                            <i>
                                                <BsFillArrowRightCircleFill/>
                                            </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            Audio
                                            <i>
                                                <BsFillArrowRightCircleFill/>
                                            </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            Metallurgy
                                            <i>
                                                <BsFillArrowRightCircleFill/>
                                            </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            video
                                            <i>
                                                <BsFillArrowRightCircleFill/>
                                            </i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6'>
                                <div className='footer-widget widget-3'>
                                    <h3>tags widget</h3>
                                    <ul className='list-inline tag-list'>
                                        <li>
                                            <a>awesome</a>
                                        </li>
                                        <li>
                                            <a>beautiful</a>
                                        </li>
                                        <li>
                                            <a>flat design</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a>ios</a>
                                        </li>
                                        <li>
                                            <a>themforest</a>
                                        </li>
                                        <li>
                                            <a>mass</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a>awesome</a>
                                        </li>
                                        <li>
                                            <a>beautiful</a>
                                        </li>
                                        <li>
                                            <a>flat design</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a>ios</a>
                                        </li>
                                        <li>
                                            <a>themforest</a>
                                        </li>
                                        <li>
                                            <a>mass</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6'>
                                <div className='footer-widget widget-3'>
                                    <h3>contact info</h3>
                                    <div className='office-address border-bottom mb-20 pb-20'>
                                        <h4>
                                            <a>office one</a>
                                        </h4>
                                        <p>123 jessore js, khulna kh, chowrasta, jessore</p>
                                    </div>
                                    <ul className='footer-social p-20'>
                                        <li>
                                            <a className='bg-color4'>
                                                <i>
                                                    <BsPinterest/>
                                                </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className='bg-color5'>
                                                <i>
                                                    <FaLinkedinIn/>
                                                </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className='bg-color6'>
                                                <i>
                                                    <FaTwitter/>
                                                </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className='bg-color7'>
                                                <i>
                                                    <FaFacebookF/>
                                                </i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <div className='w-1140'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='copy-right text-center'>
                                copyright 
                                <a>
                                    tr
                                    <span>a</span>
                                    ct
                                    <span>o</span>
                                    ur
                                </a>
                                | all rights reserved | designed by theme_group
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Home;