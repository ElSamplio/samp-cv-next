import { Button } from 'primereact/button'
import React from 'react'
import { HeaderIntroductionProps } from './HeaderProps'

const HeaderIntroduction: React.FC<HeaderIntroductionProps> = ({ introduction }) => {
    return <>
        {
            introduction &&
            <div className='col-12 md:col-6 p-6 text-center md:text-left flex align-items-center '>
                <section id='titleBlock'>
                    <span className='block text-6xl font-bold mb-1'>{introduction.name}</span>
                    <div className='text-6xl text-primary font-bold mb-3'>{introduction.title}</div>
                    <p className='mt-0 mb-4 text-700 line-height-3'>{introduction.headLine}</p>
                    <div className='card'>
                        <div className="flex flex-wrap-reverse md:flex-wrap card-container purple-container" style={{ maxWidth: 500 }}>
                            {
                                introduction.linkButtons?.map((button, index) =>
                                    <div key={index}
                                        className="flex align-items-center justify-content-center"
                                        style={{ minWidth: 200, minHeight: 50 }}>
                                        <Button icon={button.icon} label={button.label} type='button' className='mr-3 p-button-raised'
                                            onClick={() => window.open(button.href, '_blank')} style={{ minWidth: 200 }} />
                                    </div>)
                            }
                        </div>
                    </div>
                </section>
            </div>
        }

    </>
}

export default HeaderIntroduction