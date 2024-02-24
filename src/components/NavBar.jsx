import React, { useContext, useState } from "react";
import ImageContext from "../contexts/ImageContext";

export default function NavBar() {
  const { Icon_more } = useContext(ImageContext);
  const [socialLinks] = useState([
    "fa-x-twitter",
    "fa-facebook",
    "fa-instagram",
    "fa-youtube",
    "fa-tiktok",
    "fa-snapchat",
  ]);
  const [navLinks] = useState(["Movies", "Trailers", "News & Press"]);
  return (
    <div className="text-white h-full">
      <nav className="h-full flex gap-14">
        <ul className="flex justify-center items-center h-full">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="p-6 cursor-pointer hover:bg-[#8080804e] h-full flex justify-center items-center"
            >
              {link}
            </li>
          ))}

          <li className="p-6 cursor-pointer hover:bg-[#8080804e] h-full flex justify-center items-center">
            <img src={Icon_more} className="h-5" alt="" />
          </li>
        </ul>
        <ul className="flex gap-6 text-3xl h-full justify-center items-center">
          {socialLinks.map((icon, index) => (
            <li className="cursor-pointer" key={index}>
              <i className={`fa-brands ${icon}`}></i>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
