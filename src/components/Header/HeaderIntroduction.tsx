import { Button } from 'primereact/button'
import React from 'react'
import { HeaderIntroductionProps } from './HeaderProps'

const HeaderIntroduction: React.FC<HeaderIntroductionProps> = ({ introduction }) => {
    const {name, title, headLine, linkButtons} = introduction
    return <>
        {
            introduction &&
            <div className='col-12 md:col-6 p-6 text-center md:text-left flex align-items-center '>
                <section id='titleBlock'>
                    <span className='block text-6xl font-bold mb-1'>{name}</span>
                    <div className='text-6xl text-primary font-bold mb-3'>{title}</div>
                    <p className='mt-0 mb-4 text-700 line-height-3'>{headLine}</p>
                    {
                        linkButtons?.map((button, index) =>
                            <Button key={index} icon={button.icon} label={button.label} type='button' className='mr-3 p-button-raised'
                                onClick={() => window.open(button.href, '_blank')} />)
                    }
                </section>
            </div>
        }

    </>
}

export default HeaderIntroduction