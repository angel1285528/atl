"use client"

import { FaBars } from "react-icons/fa";
import React from "react";
import { useState } from "react";

const [isMenuOpen, setIsMenuOpen] = useState(false);

const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
};


const navBarMenuButton = () => {
    <button className="md:hidden text-white ml-4" onClick={handleMenuToggle}>
    <FaBars className="w-6 h-6" />
</button>
}