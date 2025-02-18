import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Ajusta la ruta si es necesario

interface GenericLinkButtonProps {
  text: string;
  url: string;
  icon?: React.ReactNode;
  action?: () => void;
}

const GenericLinkButton: React.FC<GenericLinkButtonProps> = ({ text, url, icon, action }) => {
  return (
    <Link href={url} passHref>
      <Button  onClick={action} className="flex items-center space-x-2 bg-yellow-400 text-blue-800 font-bold h-15 rounded-none py-2 px-3 text-xl">
        <span>{icon}</span>
        <span>{text}</span>
      </Button>
    </Link>
  );
};

export default GenericLinkButton;
