import React from "react";
import Link from "next/link";
import { BsInstagram, BsTiktok, BsTwitter, BsYoutube, BsFacebook, BsEnvelope } from "react-icons/bs";

const WebFooter: React.FC = () => {
  return (
    <div id="Footer" className="bg-black text-white text-center pt-12">
      <section className="mb-4">SIGUE A TIGRES EN LAS REDES SOCIALES</section>
      <div className="flex flex-col md:flex-row justify-center items-center space-x-8">
        
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="text-lg font-bold mb-2">ACADEMIA TIGRES LINARES</div>
          <div id="RedesBlock" className="flex space-x-4">
            <Link href="https://www.facebook.com/tigres.linares.oficial" aria-label="Facebook">
              <BsFacebook className="text-white text-2xl hover:text-yellow-500" />
            </Link>
            <Link href="https://www.instagram.com/academiatigreslinares/" aria-label="Instagram">
              <BsInstagram className="text-white text-2xl hover:text-yellow-500" />
            </Link>
         
            <Link href="mailto:info@tigreslinares.com" aria-label="Email">
              <BsEnvelope className="text-white text-2xl hover:text-yellow-500" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="text-lg font-bold mb-2">TIGRES</div>
          <div id="RedesBlock2" className="flex space-x-4">
            <Link href="https://www.facebook.com/ClubTigres" aria-label="Facebook">
              <BsFacebook className="text-white text-2xl hover:text-yellow-500" />
            </Link>
            <Link href="https://www.instagram.com/clubtigres/" aria-label="Instagram">
              <BsInstagram className="text-white text-2xl hover:text-yellow-500" />
            </Link>
            <Link href="https://www.youtube.com/user/tigresoficial" aria-label="YouTube">
              <BsYoutube className="text-white text-2xl hover:text-yellow-500" />
            </Link>
            <Link href="https://twitter.com/TigresOficial" aria-label="Twitter">
              <BsTwitter className="text-white text-2xl hover:text-yellow-500" />
            </Link>
            <Link href="https://www.tiktok.com/@clubtigres" aria-label="TikTok">
              <BsTiktok className="text-white text-2xl hover:text-yellow-500" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="text-lg font-bold mb-2">TIGRES FEMENIL</div>
          <div id="RedesBlock3" className="flex space-x-4">
            <Link href="https://www.facebook.com/ClubTigresFemenil/" aria-label="Facebook">
              <BsFacebook className="text-white text-2xl hover:text-yellow-500" />
            </Link>
            <Link href="https://www.instagram.com/clubtigresfemenil/" aria-label="Instagram">
              <BsInstagram className="text-white text-2xl hover:text-yellow-500" />
            </Link>
            <Link href="https://twitter.com/TigresFemenil" aria-label="Twitter">
              <BsTwitter className="text-white text-2xl hover:text-yellow-500" />
            </Link>
            <Link href="https://www.tiktok.com/@clubtigresfemenil" aria-label="TikTok">
              <BsTiktok className="text-white text-2xl hover:text-yellow-500" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="text-lg font-bold mb-2">TIGRES ENGLISH</div>
          <div id="RedesBlock4" className="flex space-x-4">
            <Link href="https://www.instagram.com/clubtigresen/" aria-label="Instagram">
              <BsInstagram className="text-white text-2xl hover:text-yellow-500" />
            </Link>
            <Link href="https://twitter.com/ClubTigresEN" aria-label="Twitter">
              <BsTwitter className="text-white text-2xl hover:text-yellow-500" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="text-lg font-bold mb-2">TIGRETIENDA</div>
          <div id="RedesBlock5" className="flex space-x-4">
            <Link href="https://www.facebook.com/TigreTiendaOficial" aria-label="Facebook">
              <BsFacebook className="text-white text-2xl hover:text-yellow-500" />
            </Link>
            <Link href="https://www.instagram.com/tigretienda/" aria-label="Instagram">
              <BsInstagram className="text-white text-2xl hover:text-yellow-500" />
            </Link>
            <Link href="https://twitter.com/TigreTiendaOfic" aria-label="Twitter">
              <BsTwitter className="text-white text-2xl hover:text-yellow-500" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="text-lg font-bold mb-2">FUERZAS BASICAS</div>
          <div id="RedesBlock6" className="flex space-x-4">
            <Link href="https://www.facebook.com/ClubTigresFuerzasBasicas" aria-label="Facebook">
              <BsFacebook className="text-white text-2xl hover:text-yellow-500" />
            </Link>
            <Link href="https://www.instagram.com/clubtigresfb/" aria-label="Instagram">
              <BsInstagram className="text-white text-2xl hover:text-yellow-500" />
            </Link>
            <Link href="https://twitter.com/ClubTigresFB" aria-label="Twitter">
              <BsTwitter className="text-white text-2xl hover:text-yellow-500" />
            </Link>
          </div>

        </div>

      </div>
      <section className="text-white pt-16 text-left mx-2 md:ml-14 pb-10">
        <span className=" text-m">
        Copyright c 2024. Academia Tigres Linares. Todos los derechos reservados
        </span>
        <br />
        Desarrollado por: Servicios de Formación y Promoción Deportiva, Mfe. Ángel Rodríguez

      </section>
    </div>
  );
};

export default WebFooter;
