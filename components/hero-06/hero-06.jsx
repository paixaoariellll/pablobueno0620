import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";

const Hero06 = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-6'>
      <div className='py-10 flex flex-col items-center w-full relative z-10 text-center'>
       

        <p className='mt-6 md:text-lg'>
          Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
        </p>
        <div className='mt-12 flex items-center justify-center gap-4'>
          <Button size='lg' className='rounded-full text-base'>
            Get Started <ArrowUpRight className='h-5! w-5!' />
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='rounded-full text-base shadow-none'
          >
            <CirclePlay className='h-5! w-5!' /> Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero06;
