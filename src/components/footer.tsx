'use client'
import { Typography } from "@material-tailwind/react";
 
export default function SimpleFooter() {
  return (
    <div>
      <footer className="flex w-full flex-col flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
        <Typography color="blue-gray" className="font-normal">
          &copy; 2023 Atacadão dos Oculos
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            
          </li>
          <li>
            
          </li>
          <li>
            
          </li>
          <li>
            
          </li>
        </ul>
      </footer>
      <div className="flex max-w-screen m-4 p-2 justify-center flex-row">
        <div className="text-sm">Formas de pagamento:</div>
            <img className="h-5 m-2" src="/mc_symbol.svg" />
            <img className="h-5 m-2" src="/cartao-elo.svg" />
            <img className="h-5 m-2" src="/pix-banco-central.svg" />
            <img className="h-5 m-2" src="/Bandeira-Hipercard-1-removebg-preview.svg" />
            <img className="h-5 m-2" src="https://iconape.com/wp-content/files/rc/184630/svg/184630.svg" />
            <img className="h-5 m-2" src="/picsvg_download.svg" />
            <img className="h-5 m-2" src="/verdecardbonito.svg" />
      </div>
    </div>
  );
}