import Image from "next/image";
import React from "react";

export default function Logomarca() {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src='/images/logo horizontal.svg'
        alt='Logomarca'
        width={180}
        height={32}
        className='object-contain'
        unoptimized
      />
    </div>
  );
}
