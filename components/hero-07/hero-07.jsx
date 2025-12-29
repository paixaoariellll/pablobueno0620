import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CirclePlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";

const Hero07 = () => {
  return (
    <div
      id='inicio'
      className='relative min-h-screen flex items-center justify-center px-6 bg-gray-900 text-white overflow-hidden'
    >
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.2}
        duration={2}
        className={cn(
          "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />

      <div className='relative z-10 text-center max-w-7xl pt-20 pb-16 sm:py-32'>
        <ImageZoom>
          <Image
            src='/images/logo horizontal.svg'
            alt='Logomarca Pablo Bueno'
            width={700}
            height={150}
            className='sm:flex hidden object-contain mx-auto mb-6 p-2'
            unoptimized
          />
        </ImageZoom>

        <h1 className='text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4'>
          Pintura <span className='text-chart-3'> Residencial </span>&
          <span className='text-chart-3'> Industrial </span>
          <span className=''> com Acabamento Fino</span>
        </h1>

        <p className='mt-6 md:text-2xl font-light text-gray-300 max-w-3xl mx-auto'>
          <span className='font-semibold text-yellow-500'>
            Faça agora mesmo seu orçamento!
          </span>
          <br />
          Soluções de alta durabilidade com foco em Pintura Mecanizada em várias
          texturas: Epóxi, Cimento Queimado e segurança certificada (NR-35/33).
        </p>

        <div className='mt-12 flex flex-wrap items-center justify-center gap-4'>
          <Link
            target='_blank'
            href='https://www.instagram.com/pablobueno0620'
            passHref
          >
            <Button
              variant='outline'
              size='lg'
              className='rounded-full text-base shadow-none border-yellow-500 text-yellow-500 hover:bg-white/10 transition px-8'
            >
              <CirclePlay className='mr-2 h-5 w-5' /> Veja nosso Instagram
            </Button>
          </Link>
        </div>

        <div className='mt-8'>Contratação PJ (MEI) | Emito Nota Fiscal</div>
      </div>
    </div>
  );
};

export default Hero07;
