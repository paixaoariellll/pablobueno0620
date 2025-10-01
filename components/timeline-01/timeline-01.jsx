import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, HardHat } from "lucide-react";

const pabloExperiences = [
  {
    title: "Projetos de Alto Impacto (Autônomo/PJ)",
    company: "PABLO BUENO Pinturas",
    period: "2023 - Presente",
    description:
      "Gestão completa e execução de projetos técnicos. Destaque para: Aplicação de <span className='font-bold'>Piso Epóxi</span> (Airless) na Distribuidora Denigris Mercedes, <span className='font-bold'>Demarcação Esportiva</span> em quadras e execuções residenciais de <span className='font-bold'>Cimento Queimado</span> e Grafiato.",
    technologies: [
      "Epóxi",
      "Airless (Alta Pressão)",
      "Cimento Queimado",
      "Gestão de Projetos",
    ],
  },
  {
    title: "Pintor Industrial Especializado",
    company: "BASF",
    period: "2023 - 2024",
    description:
      "Aplicação de tintas de <span className='font-bold'>alta performance</span> e <span className='font-bold'>epóxi</span> para proteção anticorrosiva em estruturas metálicas e equipamentos industriais, seguindo rigorosos padrões técnicos.",
    technologies: [
      "Proteção Anticorrosiva",
      "Pintura de Estruturas",
      "NR-35",
      "NR-33",
    ],
  },
  {
    title: "Pintor Industrial",
    company: "Serramar Pintura Industrial",
    period: "2021 - 2023",
    description:
      "Preparação e tratamento de superfícies, além da aplicação de tintas industriais em ambientes controlados, garantindo a conformidade com cronogramas e normas de segurança.",
    technologies: [
      "Preparo de Superfícies",
      "Pintura Industrial",
      "Cumprimento de Normas",
    ],
  },
  {
    title: "Formação Técnica e Qualificação",
    company: "Técnico em Química / SENAI",
    period: "2008 - 2011",
    description:
      "Base sólida em Química, fundamental para a correta manipulação, diluição e entendimento técnico de tintas e resinas de alto desempenho. Qualificação em Pintura Residencial (SENAI).",
    technologies: [
      "Química Industrial",
      "Diluição Técnica",
      "Pintura Residencial",
    ],
  },
];

export default function Timeline() {
  return (
    <div id="trajetoria" className='max-w-4xl mx-auto py-12 md:py-20 px-6'>
      <h2 className='text-3xl font-bold mb-10 text-center text-primary'>
        Trajetória Profissional
      </h2>

      <div className='relative ml-3'>
        <div className='absolute left-0 top-4 bottom-0 border-l-2 border-primary' />

        {pabloExperiences.map(
          ({ company, description, period, technologies, title }, index) => (
            <div key={index} className='relative pl-8 pb-12 last:pb-0'>
              <div className='absolute h-4 w-4 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background' />

              <div className='space-y-3 p-2 transition duration-300 hover:bg-accent/50 rounded-lg'>
                <div className='flex items-center gap-4'>
                  <div className='shrink-0 h-10 w-10 bg-accent rounded-full flex items-center justify-center'>
                    {index === 0 ? (
                      <HardHat className='h-6 w-6 text-muted-foreground' />
                    ) : (
                      <Building2 className='h-6 w-6 text-muted-foreground' />
                    )}
                  </div>
                  <div>
                    <span className='text-lg font-bold'>{company}</span>
                    <div className='flex items-center gap-2 mt-1 text-sm text-muted-foreground'>
                      <Calendar className='h-4 w-4' />
                      <span>{period}</span>
                    </div>
                  </div>
                </div>

                <h3 className='text-xl font-bold pt-1 text-primary'>{title}</h3>

                {/* ATENÇÃO: Usando dangerouslySetInnerHTML para renderizar o <span> com font-bold */}
                <p
                  className='text-sm sm:text-base text-muted-foreground text-pretty leading-relaxed'
                  dangerouslySetInnerHTML={{ __html: description }}
                />

                <div className='flex flex-wrap gap-2 pt-2'>
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant='secondary'
                      className='rounded-full px-3 py-1 text-xs font-medium'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
