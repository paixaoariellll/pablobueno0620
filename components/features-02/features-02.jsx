"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Demarcação de Faixas de Segurança - BASF",
    description:
      "Serviço realizado na BASF, com pintura e demarcação de faixas de segurança em área industrial. Utilização de tinta epóxi de alta durabilidade para máxima visibilidade e segurança.",
    before: "/images/basf-faixas-antes.jpg",
    after: ["/images/basf-faixas-depois.jpg"],
  },
  {
    title: "Demarcação de Segurança do Drone - BASF",
    description:
      "Projeto de demarcação e pintura da área de segurança do drone na BASF. Foram aplicadas marcações precisas e resistentes, garantindo visibilidade e segurança operacional.",
    before: "/images/drone-antes.jpg",
    after: [
      "/images/drone-depois1.jpg",
      "/images/drone-depois2.jpg",
      "/images/drone-depois3.jpg",
    ],
  },
  {
    title: "Restauração e Envernizamento de Piso de Taco",
    description:
      "Restauração completa de piso de taco residencial, com lixamento, nivelamento e aplicação de verniz, resultando em um acabamento brilhante e renovado.",
    before: null, // não tem imagem de antes
    after: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
  },
];

export default function PortfolioPage() {
  return (
    <div
      id='imagens'
      className='min-h-screen py-16 px-6 bg-background flex flex-col items-center'
    >
      <div className='w-full max-w-6xl'>
        <h2 className='text-4xl sm:text-5xl font-semibold tracking-tight text-center mb-14'>
          Trabalhos Realizados
        </h2>

        <div className='space-y-12'>
          {services.map((service) => (
            <Card
              key={service.title}
              className='rounded-2xl shadow-md border border-border/50'
            >
              <CardHeader>
                <CardTitle className='text-2xl font-semibold text-center'>
                  {service.title}
                </CardTitle>
                <p className='text-muted-foreground text-center mt-2 text-[17px] leading-relaxed'>
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className='space-y-10'>
                {service.before && (
                  <div>
                    <h3 className='text-lg font-medium mb-4 text-center'>
                      Antes
                    </h3>
                    <div className='relative w-full aspect-video rounded-xl overflow-hidden shadow-sm'>
                      <Image
                        src={service.before}
                        alt={`${service.title} - Antes`}
                        fill
                        className='object-cover'
                      />
                    </div>
                  </div>
                )}

                <div>
                  <h3 className='text-lg font-medium mb-4 text-center'>
                    Depois
                  </h3>

                  {service.after.length === 1 ? (
                    <div className='relative w-full aspect-video rounded-xl overflow-hidden shadow-sm'>
                      <Image
                        src={service.after[0]}
                        alt={`${service.title} - Depois`}
                        fill
                        className='object-cover'
                      />
                    </div>
                  ) : (
                    <div className='flex gap-4 overflow-x-auto pb-2'>
                      {service.after.map((img, i) => (
                        <div
                          key={i}
                          className='relative flex-shrink-0 w-[90%] sm:w-[48%] lg:w-[32%] aspect-[4/3] rounded-xl overflow-hidden shadow-sm'
                        >
                          <Image
                            src={img}
                            alt={`${service.title} - Depois ${i + 1}`}
                            fill
                            className='object-cover'
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
