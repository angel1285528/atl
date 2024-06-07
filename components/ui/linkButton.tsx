"use client"
import React from "react"
import { Button } from "./button"
import Link from "next/link"
import { useState } from "react"

interface linkButtonsProps {
    url: string;
    text: string;
}


const LinkButton: React.FC<linkButtonsProps> = ({url, text})=> {
    const [loading, setLoading] = useState(false);
    return(
        <Link href={url} >
            <Button 
             disabled={loading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
            {loading ? '...' : text }
            </Button>
        </Link>
    )

}

export default LinkButton;