import Logo from './Logo/logo.jsx';
import MainPage from './MainPage/MainPage.jsx';
import Navbar from "./Nav_bar/nav_bar.jsx";
import "./Header.css";

export default function Header() {
    return ( 
    <>
      <MainPage />
      <Logo />
      <Navbar />
    </>
    )                          
}