import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { RadioGroupComp, SettingsModal } from '../components';
import { LiquiditySection, SliderBanner } from '../containers';

import liquidityGif from '../assets/images/gifs/tally-ho_MOD.gif';
import bahamdesign from '../assets/images/Entregable - BahamPool-02.png';

const BecauseIBTPage = () => {
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
                Qué es IBT<br/>
                <br/>
                </h1>

                <h3 className='text-center text-base font-light text-white pb-5'>
                IBT como base de la futura industria de los juegos blockchain para todos los gustos,
                <br/>
                abre una amplia gama de oportunidades de interacción entre usuarios y desarrolladores
                en el ecosistema GAMEFI.

                </h3>
                <br/>
                <h3 className='text-center text-base font-light text-white pb-5'>
                La integración del token IBT como moneda dentro del juego y la introducción de NFT,<br/> no solo puede jugar y disfrutar de los juegos, 
                sino también sacar beneficio de sus logros,<br/> así como participar en BahamPool para obtener ingreso extra gracias al STAKING de IBT de hasta un 25% por mes.

                </h3>
                <h3 className='text-center text-base font-light text-white pb-5'>
                IBT lo ayuda a crear pools de staking de manera rápida y conveniente con condiciones flexibles que<br/>
                permiten a los miembros del pool ganar hasta un 25% en tokens por mes.<br/>
                </h3> 


                

                {/* <div className='mb-4 flex flex-col text-center text-white'>
                    <a
                        href='https://docs.tally.org/education-hub/how-to-earn-on-tally-farms#:~:text=for%20this%20guide.-,Provide%20Liquidity%2C%20Stake%20LP%20tokens%20%26%20Earn%20BSW,-As%20you%20noticed'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='font-semibold text-primary-brand transition-colors hover:text-primary-brand/80'
                    >
                        Learn how to add liquidity
                    </a>
                </div> */}

                {/* <RadioGroupComp
                    type={type}
                    setType={setTypeandNavigate}
                    types={types}
                />

                {type === 'pool' && !coin && (
                    <LiquiditySection
                        openSettingsModal={openSettingsModal}
                        setType={setType}
                    />
                )} */}
                <Outlet />
            </section>

            <SliderBanner />

            <SettingsModal open={modalOpen} setOpen={setModalOpen} />
        </main>
    );
};

export default BecauseIBTPage;
