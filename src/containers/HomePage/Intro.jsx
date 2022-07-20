import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/logo2.png';
import logo5 from '../../assets/images/logo5.png';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { MovingIcons, SlideshowHome } from '../../components';

const Intro = () => {
    return (
        <section className='bg-intro_bg pt-20'>
            <div className='container mx-auto max-w-7xl px-4 pt-10 md:px-6'>
                <div className='pb-4'>
                    <div className='relative mx-auto max-w-lg text-center'>
                        <img src={logo5} alt='logo' className='w-700'/>

                        <span className='mt-3 block text-lg font-semibold text-white'>
                        Somos un grupo de personas conscientes de la disrupción tecnológica en el sistema financiero, nos capacitamos en el ecosistema Blockchain, criptomonedas y buscamos oportunidades en proyectos de inversiones sólidas en el mundo descentralizado.
                        </span>
                        <span className='block text-lg font-semibold text-white'>
                            Con la capacitación aprendemos a entender la volatilidad de los cripto activos, el propósito de proyecto y de esta forma reducir el riesgo de caer en estafas.
                        </span>
                    </div>

                    <div className='flex flex-col gap-x-4 lg:flex-row'>
                        <div className='flex flex-1 flex-col justify-center'>
                            <div className='my-5 flex max-w-xl flex-col space-y-4 rounded-2xl bg-right_gradient p-4 text-xl font-semibold text-white sm:text-2xl'>
                                <span className='pl-5 align-middle leading-6'>
                                    Low fees High Yields
                                </span>
                                <span className='pl-20 align-middle leading-6 text-primary-brand'>
                                    Youtility
                                </span>
                            </div>

                            <div className='my-5 mt-8 flex w-full max-w-xl rounded-2xl bg-right_gradient px-2 py-4 md:p-6 '>
                                <div className='flex items-center border-r border-primary-brand pr-4 md:pr-6'>
                                    <img
                                        src={logo2}
                                        alt='logo'
                                        className=' h-10 w-10 md:h-12 md:w-12'
                                    />
                                    <div className='ml-4 sm:mr-4'>
                                        <span className='mb-1 block text-xs font-bold leading-6 text-primary-brand'>
                                            Total Value Locked
                                        </span>
                                        <span className='text-lg font-semibold text-white md:text-2xl'>
                                            $000, 000,000
                                        </span>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='ml-3 md:ml-8'>
                                        <span className='mb-1 block text-xs font-bold leading-6 text-primary-brand'>
                                            Total Trading Volume
                                        </span>
                                        <span className='text-lg font-semibold text-white md:text-2xl'>
                                            $000, 000,000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    <div className='flex max-h-52 w-full justify-center overflow-hidden pt-6 pb-1 '>
                        <MovingIcons />

                        <Link
                            to='/analytics'
                            className='group ml-auto hidden items-center text-white md:flex'
                        >
                            <span>All Markets</span>
                            <ChevronRightIcon className='ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
