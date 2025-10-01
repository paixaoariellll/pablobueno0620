import Image from "next/image";
import React from "react";

export default function Name() {
  return (
    <Image
      src='/nome.png'
      alt='Logomarca'
      width={150}
      height={40}
      className='object-cover'
      unoptimized
    />
  );
}
