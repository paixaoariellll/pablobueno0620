import React from "react";
import { Wrench, Shield, Zap, Droplet } from "lucide-react";

const highImpactSkills = [
  {
    icon: Wrench, // Representa a técnica especializada
    title: "Pintura Mecanizada (Airless)",
    description:
      "Uso de equipamentos de <span className='font-bold'>alta pressão Airless</span> para cobertura rápida, uniforme e sem marcas de rolo, garantindo acabamento liso e perfeito.",
    colorClass: "text-primary",
  },
  {
    icon: Shield, // Representa segurança e durabilidade
    title: "Piso Epóxi Industrial",
    description:
      "Especialista em revestimentos <span className='font-bold'>epóxi e poliuretano</span> para pisos de alta resistência, ideal para indústrias, garagens e ambientes de tráfego intenso.",
    colorClass: "text-primary",
  },
  {
    icon: Zap, // Representa conhecimento técnico e segurança
    title: "Certificação NR's e Segurança",
    description:
      "Profissional certificado em normas de segurança (<span className='font-bold'>NR-35</span> - Altura e <span className='font-bold'>NR-33</span> - Confinados), assegurando projetos com risco zero e conformidade total.",
    colorClass: "text-primary",
  },
  {
    icon: Droplet, // Representa a base química
    title: "Conhecimento em Química",
    description:
      "Formação técnica para correta manipulação, diluição e entendimento da <span className='font-bold'>composição química</span> de tintas e resinas de alto desempenho.",
    colorClass: "text-primary",
  },
];

const Diferenciais = () => {
  return (
    <div id='diferenciais' className='py-12 md:py-20 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-extrabold tracking-tight text-primary'>
          Diferenciais Técnicos de Alto Impacto
        </h2>

        <p className='mt-3 text-lg text-muted-foreground max-w-2xl mx-auto'>
          Nossa qualidade é definida pela precisão dos equipamentos e pela nossa
          base técnica especializada.
        </p>

        <div className='mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12'>
          {highImpactSkills.map((item, index) => (
            <div
              key={index}
              className='p-6 rounded-xl transition duration-300 hover:bg-accent/50'
            >
              <div
                className={`mx-auto h-14 w-14 ${item.colorClass} bg-accent/50 rounded-full flex items-center justify-center border-4 border-accent/70`}
              >
                <item.icon className='h-7 w-7' />
              </div>

              <h3 className='mt-6 text-xl font-bold text-primary'>
                {item.title}
              </h3>

              <p
                className='mt-2 text-base text-muted-foreground'
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diferenciais;
