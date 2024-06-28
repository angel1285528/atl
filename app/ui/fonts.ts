import {  Roboto } from "next/font/google";
import { Anton } from "next/font/google";
// This is the font that is used in the app, it is imported here to be used in the app

export const roboto = Roboto({
    subsets: ['latin'],
    weight: "400"
});

export const anton = Anton({
    subsets: ['latin'],
    weight: "400"
    
});
