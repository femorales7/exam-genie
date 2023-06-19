// import "../styles/TopMenu.scss";
// import Profile from "../Auth0/profile";
// import React, { useState } from "react";
// import "../styles/TopNavigationBar.scss";


// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "../Auth0/login";
// import LogoutButton from "../Auth0/logout";

// import logo from "../images/Exam-genie1.png";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import { Link } from "react-router-dom";
// import {
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";
// import { CgFileDocument } from "react-icons/cg";

// const TopMenu = () => {
//   window.addEventListener("scroll", scrollHandler);
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);
//   const { isAuthenticated } = useAuth0();

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Navbar.Brand href="/" className="d-flex">
//         <img src={logo} className="img-fluid logo" alt="brand" />
//       </Navbar.Brand>
//       <Container id="nav-container">
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="Navigation" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
//               </Nav.Link>
//             </Nav.Item>

//             {isAuthenticated && (
//               <>
//                 <Nav.Item>
//                   <Nav.Link
//                     as={Link}
//                     to="/exam"
//                     onClick={() => updateExpanded(false)}
//                   >
//                     <AiOutlineFundProjectionScreen
//                       style={{ marginBottom: "2px" }}
//                     />
//                     Test Exam
//                   </Nav.Link>
//                 </Nav.Item>
//                 {/* <Nav.Item>
//                   <Nav.Link
//                     as={Link}
//                     to="/game"
//                     onClick={() => updateExpanded(false)}
//                   >
//                     <AiOutlineFundProjectionScreen
//                       style={{ marginBottom: "2px" }}
//                     />
//                     Game
//                   </Nav.Link>
//                 </Nav.Item> */}

//                 <Nav.Item>
//                   <Nav.Link
//                     as={Link}
//                     to="/dashboard"
//                     onClick={() => updateExpanded(false)}
//                   >
//                     <CgFileDocument style={{ marginBottom: "2px" }} /> Dashboard
//                   </Nav.Link>
//                 </Nav.Item>
//               </>
//             )}

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineUser style={{ marginBottom: "2px" }} /> About us
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>

//       <Nav.Item className="autentication">
//         <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
//           <AiOutlineUser style={{ marginBottom: "2px" }} />
//           {isAuthenticated ? <LogoutButton /> : <LoginButton />}
//         </Nav.Link>
//       </Nav.Item>
//     </Navbar>
//   );
// };

// export default TopMenu;
