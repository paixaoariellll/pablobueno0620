"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Home, Truck, Film } from "lucide-react";

// Dados dos projetos de vídeo do Pablo
const projectVideos = [
  {
    icon: Home,
    title: "Casa de Alto Padrão",
    description:
      "Casa entregue com Pintura de acabamento impecável. Este projeto residencial demonstra a qualidade e atenção aos detalhes em ambientes exclusivos.",
    videoPath: "/videos/video1.mp4",
  },
  {
    icon: Truck,
    title: "Piso de Oficina Mecânica",
    description:
      "Instalação de revestimento Epóxi de alta resistência para o piso de uma oficina mecânica, garantindo durabilidade, fácil limpeza e segurança.",
    videoPath: "/videos/video2.mp4",
  },
];

const ProjectGallery = () => {
  // Estado para controlar qual vídeo está ativo no painel de visualização.
  // Começa com 'item-0' (Casa de Alto Padrão)
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Função para lidar com a mudança do Acordeão e atualizar o vídeo ativo
  const handleAccordionChange = (value) => {
    // Extrai o índice do valor (ex: 'item-1' -> 1)
    if (value) {
      const index = parseInt(value.split("-")[1]);
      setActiveVideoIndex(index);
    }
  };

  const activeVideo = projectVideos[activeVideoIndex];

  return (
    <div className='py-12 md:py-20 px-6'>
      <div className='max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-start'>
        {/* Lado Esquerdo: Lista de Projetos (Acordeão) */}
        <div>
          <h2 className='text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-primary'>
            Projetos em Destaque
          </h2>
          <p className='text-lg text-muted-foreground mb-10'>
            Veja o impacto da nossa especialidade em diferentes ambientes:
          </p>

          <Accordion
            defaultValue='item-0'
            type='single'
            className='w-full'
            onValueChange={handleAccordionChange} // Captura qual item foi aberto
          >
            {projectVideos.map(({ title, description, icon: Icon }, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='group/accordion-item data-[state=open]:border-b-2 data-[state=open]:border-primary transition-colors'
              >
                <AccordionTrigger className='text-xl font-semibold [&>svg]:text-primary group-first/accordion-item:pt-0'>
                  <div className='flex items-center gap-4 text-primary'>
                    <Icon className='h-6 w-6 text-primary' />
                    {title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className='text-base leading-relaxed text-muted-foreground pl-10 pt-2 pb-4'>
                  {description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Lado Direito: Visualização do Vídeo Ativo - AJUSTADO PARA VERTICAL */}
        <div className='sticky top-12 w-full h-full rounded-xl p-4 shadow-xl flex justify-center'>
          {/* O container interno agora força um tamanho de tela vertical (mobile/Instagram Reel) */}
          <div className='w-full max-w-xs md:max-w-sm'>
            <h3 className='text-xl font-bold mb-3 text-primary flex items-center gap-2'>
              <Film className='h-5 w-5' />
              {activeVideo.title}
            </h3>

            {/* Container do Vídeo: Usando aspect-[9/16] para vertical */}
            <div className='relative w-full aspect-[9/16] overflow-hidden rounded-lg'>
              <video
                key={activeVideo.videoPath}
                controls
                autoPlay
                muted
                loop
                className='absolute inset-0 w-full h-full object-cover border border-primary/20'
              >
                <source src={activeVideo.videoPath} type='video/mp4' />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>

            {/* Legenda do Vídeo */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
