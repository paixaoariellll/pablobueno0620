import React from "react";
import Logomarca from "./start/logomarca";

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-5 text-muted-foreground'>
      <Logomarca />
      <p className='text-xs border-t w-full text-center py-4 '>
        &copy; {new Date().getFullYear()} Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
