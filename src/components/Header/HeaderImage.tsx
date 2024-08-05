/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const HeaderImage: React.FC = () => {
  return (
    <>
      <div className="col-12 md:col-6 rightMainImage">
        <Image
          src="/SAMP_Profile.jpg"
          style={{ clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0 100%)" }}
          alt="Sergio Andrés Martínez"
          height={640} width={640}
          className='md:ml-auto block md:h-full'
        />
      </div>
    </>
  );
};

export default HeaderImage;
