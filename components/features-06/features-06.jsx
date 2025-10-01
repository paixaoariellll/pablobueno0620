"use client";

import React from "react";
import { Play } from "lucide-react";

// Componente auxiliar para renderizar o player de vídeo vertical
const VerticalVideoPlayer = ({ videoPath, isGroup = false }) => (
  // Se for um grupo (múltiplos vídeos), o max-w é menor para caber na linha.
  // Se for vídeo único, o max-w é maior para destaque.
  <div
    className={`w-full ${
      isGroup ? "max-w-xs" : "max-w-sm"
    } aspect-[9/16] bg-accent rounded-xl shadow-2xl p-2`}
  >
    <div className='relative w-full h-full overflow-hidden rounded-lg'>
      <video
        key={videoPath}
        controls
        autoPlay
        muted
        loop
        className='w-full h-full object-cover'
      >
        <source src={videoPath} type='video/mp4' />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  </div>
);

// Dados dos projetos de vídeo do Pablo (Total: 7 entradas, 9 vídeos)
const projectVideos = [
  {
    category: "Residencial de Luxo",
    title: "Casa de Alto Padrão - Acabamento Impecável",
    details:
      "Entrega completa do projeto de pintura residencial. Foco na preparação minuciosa de superfícies com massa corrida, aplicação de tinta emborrachada nas paredes para proteção e pintura especializada nos portões.",
    videoPaths: ["/videos/video1.mp4"], // Vídeo 1
  },
  {
    category: "Mão de Obra Especializada",
    title: "Portões e Grades com Esmalte Automotivo",
    details:
      "Serviço completo em superfícies metálicas: lixamento técnico, aplicação de fundo e pintura com **tinta esmalte automotivo**, garantindo acabamento liso, brilho intenso e proteção contra intempéries.",
    videoPaths: ["/videos/video6.mp4"], // Vídeo 6
  },
  {
    category: "Residencial Interno",
    title: "Pintura de Móveis com Pistola Elétrica",
    details:
      "Pintura rápida e uniforme de móveis (camas) utilizando **pistola elétrica** para máxima eficiência e **tinta Coral à base de água**, resultando em um acabamento profissional e ecologicamente correto.",
    videoPaths: ["/videos/video7.mp4"], // Vídeo 7
  },
  {
    category: "Tratamento de Muros e Fachadas",
    title: "Muro com Grafiato e Tinta Emborrachada",
    details:
      "Aplicação completa de fundo preparador para selagem da superfície, criação de textura de **grafiato** para acabamento estético e proteção, finalizada com **tinta emborrachada** para alta resistência e durabilidade externa.",
    videoPaths: ["/videos/video5.mp4"], // Vídeo 5
  },
  {
    category: "Acabamento Decorativo",
    title: "Cimento Queimado e Polimento Profissional",
    details:
      "Criação de efeito decorativo de **cimento queimado** de alta qualidade, finalizado com polimento usando **politriz** para um acabamento liso, espelhado e de grande apelo visual.",
    videoPaths: ["/videos/video9.mp4"], // Vídeo 9
  },
  {
    category: "Piso Esportivo",
    title: "Pintura e Resina de Quadra Poliesportiva",
    details:
      "Revitalização e proteção de quadra esportiva. Aplicação de **tinta piso** de alta resistência para demarcação, seguida de camada de **resina** para aumentar a durabilidade, aderência e longevidade do piso.",
    videoPaths: ["/videos/video8.mp4"], // Vídeo 8
  },
  {
    category: "Pintura Industrial Pesada",
    title: "Distribuidora Denigris Mercedes - Piso Epóxi (Múltiplas Fases)",
    details:
      "Aplicação especializada de Piso Epóxi de alto desempenho em grande escala. Este projeto na Denigris Mercedes exigiu precisão, resistência química e durabilidade em área de tráfego pesado (caminhões e equipamentos). Os vídeos mostram as diferentes fases do projeto.",
    videoPaths: [
      "/videos/video2.mp4",
      "/videos/video3.mp4",
      "/videos/video4.mp4",
    ],
  },
];

const ProjectGallery = () => {
  return (
    <div id='galeria' className='py-12 md:py-20 px-6 bg-background'>
      <div className='max-w-6xl w-full mx-auto'>
        {/* Título da Seção */}
        <h2 className='text-4xl md:text-[2.75rem] md:leading-[1.2] font-extrabold tracking-tight sm:max-w-xl text-pretty sm:mx-auto sm:text-center text-primary'>
          Galeria de Projetos de Alto Desempenho
        </h2>
        <p className='mt-3 text-muted-foreground text-lg sm:text-xl sm:text-center'>
          Veja a aplicação prática das nossas técnicas de Epóxi e Pintura
          Mecanizada.
        </p>

        {/* Container dos Projetos */}
        <div className='mt-12 md:mt-20 w-full mx-auto space-y-20'>
          {projectVideos.map((project, index) => (
            <div
              key={project.videoPaths[0]}
              // Layout alternado: pares ficam com a descrição à esquerda
              className='flex flex-col md:flex-row items-center gap-x-12 gap-y-12 md:even:flex-row-reverse'
            >
              {/* Lado do Vídeo (Mídia) */}
              <div className='w-full basis-1/2 flex justify-center'>
                {/* Lógica para Múltiplos Vídeos (Denigris Mercedes) */}
                {project.videoPaths.length > 1 ? (
                  // Grid de 3 vídeos (empilha no mobile, 3 colunas no desktop)
                  <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl'>
                    {project.videoPaths.map((path, idx) => (
                      <div key={path} className='flex flex-col items-center'>
                        {/* O índice real dos vídeos é 2, 3 e 4, por isso usamos idx + 2 */}
                        <p className='text-xs font-semibold mb-1 text-muted-foreground'>
                          Vídeo {idx + 2}
                        </p>
                        <VerticalVideoPlayer videoPath={path} isGroup={true} />
                      </div>
                    ))}
                  </div>
                ) : (
                  // Lógica para Vídeo Único
                  <VerticalVideoPlayer videoPath={project.videoPaths[0]} />
                )}
              </div>

              {/* Lado da Descrição (Conteúdo) */}
              <div className='basis-1/2 shrink-0'>
                <span className='uppercase font-medium text-sm text-primary/70 tracking-widest'>
                  {project.category}
                </span>
                <h4 className='my-3 text-3xl font-bold tracking-tight text-primary'>
                  {project.title}
                </h4>
                <p className='text-lg text-muted-foreground leading-relaxed'>
                  {project.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
