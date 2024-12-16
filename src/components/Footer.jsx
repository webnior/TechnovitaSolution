import {
    Instagram,
    Facebook,
    Twitter,
    Youtube,
     
  } from "lucide-react";
  
const Footer = () => {
    return (
      <footer className="text-center py-8 bg-black text-white">
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://www.instagram.com/technovitasolution/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110"
          >
            <Instagram className="w-6 h-6 text-white hover:text-[#F5A841] transition-colors duration-300" />
          </a>
          
          <a 
            href="https://www.facebook.com/people/Technovita-Solution/100078880413401/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110"
          >
            <Facebook className="w-6 h-6 text-white hover:text-[#F5A841] transition-colors duration-300" />
          </a>
          
          <a 
            href="https://twitter.com/x/migrate?tok=7b2265223a222f546563686e6f76697461536f6c7531222c2274223a313733343136373030357d8129418353ccb417d0aa5bdc4a6e6b6f" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110"
          >
            <Twitter className="w-6 h-6 text-white hover:text-[#F5A841] transition-colors duration-300" />
          </a>
          
          <a 
            href="https://www.youtube.com/@TechnovitaSolution" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110"
          >
            <Youtube className="w-6 h-6 text-white hover:text-[#F5A841] transition-colors duration-300" />
          </a>
        </div>
        
        <p>
          Copyright 2019-2024 @
          <a 
            href="https://technovitasolution.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#F5A841] transition-colors duration-300"
          >
            Technovita Solution
          </a>
        </p>
      </footer>
    );
  };



  export default Footer;