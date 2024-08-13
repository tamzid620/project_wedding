"use client";
import React from "react";
import { Merriweather } from "next/font/google";
import "../globals.css";

const merriweather = Merriweather({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
const DpLayout = ({ children }) => {

  return (
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
    <div className = { merriweather.className}>
        {children}
    </div>
  );
};

export default DpLayout;
