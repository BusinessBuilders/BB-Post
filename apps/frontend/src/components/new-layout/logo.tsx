'use client';

import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="BB Post"
      width={60}
      height={60}
      className="mt-[8px]"
    />
  );
};
