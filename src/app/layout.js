import React  from "react";
import { Merriweather } from "next/font/google" ;
import "./globals.css";

const merriweather = Merriweather({ 
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
})
const  RootLayout = ({ children }) =>{

  return (
    <html lang="en">
      <body className={merriweather.className}>
      {children}
      </body>
    </html>
  );
}

export default RootLayout ;
