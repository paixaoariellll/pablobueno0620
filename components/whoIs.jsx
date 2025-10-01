import React from "react";
import { MapPin, Mail, FileText, Send, Download } from "lucide-react"; // Importei 'Download'
import Link from "next/link";
import { Button } from "./ui/button";

export default function WhoIs() {
  const phoneNumber = "5512982197868";

  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div id='curriculum' className='py-12 px-6 bg-background'>
      <div className='text-center max-w-4xl mx-auto'>
        <h1 className='text-3xl sm:text-6xl font-black mb-2 tracking-wider text-primary'>
          PABLO AUGUSTO DA SILVA BUENO
        </h1>

        <p className='text-xl sm:text-2xl font-semibold text-primary/80 border-b border-primary/50 inline-block pb-1'>
          Mestre em Pintura | Industrial, Epóxi e Acabamentos Especiais
        </p>

        <div className='mt-8 flex flex-wrap justify-center items-center gap-6 text-base sm:text-lg text-muted-foreground'>
          <div className='flex items-center gap-2'>
            <MapPin className='h-5 w-5 text-primary' />
            <span className='font-medium'>Guaratinguetá - SP</span>
          </div>

          <Link
            href={whatsappLink}
            target='_blank'
            className='flex items-center gap-2 font-bold text-primary hover:text-green-600 transition duration-200'
          >
            <Send className='h-5 w-5 text-green-600' />
            <span className='font-medium'>(12) 98219-7868</span>
          </Link>

          <Link
            href='mailto:pablobueno0620@gmail.com'
            className='flex items-center gap-2 hover:text-primary transition duration-200'
          >
            <Mail className='h-5 w-5 text-primary' />
            <span className='font-medium'>pablobueno0620@gmail.com</span>
          </Link>
        </div>

        {/* --- Seção de Download e Informações PJ --- */}

        <div className='mt-6 pt-4 border-t border-accent max-w-xl mx-auto flex flex-col items-center gap-4'>
          {/* NOVO BOTÃO DE DOWNLOAD */}
          <Link
            href='/pdf/pablobueno.pdf'
            target='_blank' // Abrir em nova aba, comum para downloads/visualização de PDF
            download // Adicionar o atributo 'download' para forçar o download
          >
            <Button>
              <Download className='h-5 w-5 mr-2' />
              Baixar Currículo
            </Button>
          </Link>

          {/* Informações de Contratação PJ - Mantidas e ajustadas */}
          <div className='flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-2 text-sm sm:text-base text-primary/90'>
            <span className='flex items-center gap-2 font-bold'>
              <FileText className='h-4 w-4 text-primary' />
              Contratação PJ - MEI
            </span>

            <span className='text-muted-foreground'>
              | CNPJ: <span className='font-semibold'>59.634.549/0001-80</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
