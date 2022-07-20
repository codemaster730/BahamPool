import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { RadioGroupComp, SettingsModal } from '../components';
import { LiquiditySection, SliderBanner } from '../containers';

import liquidityGif from '../assets/images/gifs/tally-ho_MOD.gif';
import bahamdesign from '../assets/images/Entregable - BahamPool-02.png';

const WhatWeArePage = () => {
    const types = [
        {
            name: 'BecauseIBT',
            value: 'pool',
        },
    ];
    const navigate = useNavigate();
    const { coin } = useParams();

    const [type, setType] = useState(types[0].value);
    const [modalOpen, setModalOpen] = useState(false);

    const setTypeandNavigate = type => {
        setType(type);
        navigate('/liquidity');
    };

    const openSettingsModal = () => {
        setModalOpen(true);
    };

    useEffect(() => {
        if (!coin) {
            setType('pool');
        }
    }, [coin]);

    return (
        <main>
            <section className=' flex-col items-center justify-center bg-primary-sidebar px-4 pt-20 pb-8'>
                <div>
                <img
                    src={bahamdesign}
                    alt='logo img'
                    className='mb-8 w-full max-w-lg flex-1'
                />
                </div>
                
                <h1 className='mb-2 whitespace-nowrap text-center text-2xl font-bold text-white md:text-[40px]'>
                Quienes somos<br/>
                <br/>
                </h1>

                <h3 className='text-center text-base font-light text-white pb-5'>
                Somos un grupo de personas conscientes de la disrupción tecnológica en el 
                <br/>
                sistema financiero, nos capacitamos en el ecosistema Blockchain, criptomonedas y

                </h3>
                <br/>
                <h3 className='text-center text-base font-light text-white pb-5'>
                buscamos oportunidades en proyectos de inversiones sólidas en el mundo<br/> descentralizado.<br/> 

                </h3>
                <h3 className='text-center text-base font-light text-white pb-5'>
                Con la capacitación aprendemos a entender la volatilidad de los cripto activos, el <br/>
                propósito del proyecto y de esta forma reducir el riesgo de caer en estafas. <br/>
                </h3> 
                          
                <Outlet />
            </section>

            <SliderBanner />

            <SettingsModal open={modalOpen} setOpen={setModalOpen} />
        </main>
    );
};

export default WhatWeArePage;
