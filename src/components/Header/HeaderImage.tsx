/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const HeaderImage: React.FC = () => {
  return (
    <div className="col-12 md:col-6 cv-hero-photo rightMainImage p-0 md:py-2">
      <div className="cv-hero-photo__frame">
        <Image
          src="/SAMP_Profile.jpg"
          alt="Sergio Andrés Martínez"
          height={480}
          width={480}
          className="md:ml-auto block w-full h-auto max-h-full object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default HeaderImage;
