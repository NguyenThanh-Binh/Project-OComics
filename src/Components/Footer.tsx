import React from "react";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";
import Logo from '../assets/Logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="flex md:justify-between footer bg-amber-400 h-12  border-5 p-0 ">
      <div className="">
      <img className="hidden md:block h-12 w-24 rounded-md " src={Logo} alt="" />
      </div>
      
      <div className = "flex h-12 justify-end flex space-x-2 ">
      
        <a href="https://fr-fr.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FacebookOutlined className="text-4xl " /> 
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <TwitterOutlined className="text-4xl" /> 
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined className="text-4xl" /> 
        </a>
      </div>
    </footer>
  );
};


/* 
<img className="h-12 w-24 rounded-md " src={Logo} alt="" />

flex h-12 justify-end flex space-x-2 
*/

export default Footer;
