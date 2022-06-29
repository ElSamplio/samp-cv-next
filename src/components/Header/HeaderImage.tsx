/* eslint-disable @next/next/no-img-element */
import React from 'react'

const HeaderImage: React.FC = () => {
    return <>
        <div className='col-12 md:col-6 rightMainImage'>
            <img src='https://i.ibb.co/2gRjZdS/SAMP-Profile.jpg'
                alt='Sergio Andrés Martínez' className='md:ml-auto block md:h-full'
                style={{ clipPath: 'polygon(15% 0, 100% 0%, 100% 100%, 0 100%)' }} />
        </div>
    </>
}

export default HeaderImage