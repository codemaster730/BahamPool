import { MenuIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { FaWallet } from 'react-icons/fa';
import { FcApproval } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { TokenCheckerNav } from '..';
import Web3ConnectModal from './Web3ConnectModal';
import logo2 from '../../assets/images/logo2.png';
import ealogo from '../../assets/images/etherauthority_logo.png';
import { useWeb3React } from "@web3-react/core";
export const short = (s) => `${s.substr(0, 7)}...${s.substr(s.length - 3, 3)}`;
const Navbar = ({ setSidebarOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [scrolled, setScrolled] = useState(false);
    const [onTokenCheckPage, setOnTokenCheckPage] = useState(false);
    const [connectModalOpen, setConnectModalOpen] = useState(false);
    const context = useWeb3React();
    const {
      
      account,
      activate,
      deactivate,
      active,
      error,
    } = context;

    useEffect(() => {
        if (location.pathname.includes('/tokenchecker')) {
            setOnTokenCheckPage(true);
        } else {
            setOnTokenCheckPage(false);
        }
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={classNames(
                'fixed top-0 right-0 left-0 z-30 flex h-20 flex-shrink-0 bg-primary-dark md:left-56',
                {
                    'bg-transparent': !scrolled,
                }
            )}
        >
            <button
                type='button'
                className='focus:ring-primary-black  px-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset md:hidden'
                onClick={() => setSidebarOpen(true)}
            >
                <span className='sr-only'>Open sidebar</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </button>
            <div className='flex w-full flex-1 justify-between px-0 md:px-10'>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <button
                            type='button'
                            className='flex h-10 min-h-[40px] items-center justify-center rounded-lg border-0 border-primary-brand px-4 font-medium text-white transition duration-300 ease-in-out hover:border-white md:mx-4 md:border'
                            onClick={() => navigate('/')}
                        >
                            <img
                                src={logo2}
                                alt='logo'
                                className='mr-0 w-5 md:mr-2'
                            />
                            <span className='hidden md:block'>
                                BahamPool Home
                            </span>
                        </button>
                    </div>

                    {/* <div className='flex items-center'>
                        <button
                            type='button'
                            className='flex items-center justify-center rounded-lg font-medium text-white md:mx-4 md:px-4'
                        >
                            <img
                                src={ealogo}
                                alt='Eather Authority Logo'
                                className='mr-0 h-8  rounded-lg object-cover md:h-12'
                            />
                            <div className='-ml-1 flex flex-col items-center -space-y-1 md:ml-0 md:space-y-0'>
                                <span className='flex items-center font-comfortaa text-[8px] font-light uppercase md:text-xs'>
                                    Audited by{' '}
                                    <FcApproval className='ml-1 h-3 w-3 md:ml-2 md:h-4 md:w-4' />
                                </span>
                                <span className='font-comfortaa text-[10px] md:text-base'>
                                    EtherAuthority
                                </span>
                            </div>
                        </button>
                    </div> */}
                </div>

                <TokenCheckerNav onTokenCheckPage={onTokenCheckPage} />

                <div className='flex items-center' style={{display: active ? "none" : ""}}>
                    <button
                        type='button'
                        className='mx-4 flex h-10 min-h-[40px] items-center justify-center rounded-lg bg-primary-brand px-4 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-primary-brand/60'
                        onClick={() => setConnectModalOpen(true)}
                    >
                        <span>Connect</span>
                        <FaWallet className='ml-2 opacity-40' />
                    </button>

                    <Web3ConnectModal
                        open={connectModalOpen}
                        setOpen={setConnectModalOpen}
                    />
                </div>
                <div className='flex items-center'
                    style={{ display: active ? "" : "none" }}
                >
                    <button
                        type='button'
                        className='mx-4 flex h-10 min-h-[40px] items-center justify-center rounded-lg bg-primary-brand px-4 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-primary-brand/60'
                        onClick={() => {deactivate();setConnectModalOpen(false);} }
                    >
                        <span>{short(account ? account : "")}</span>
                        <FaWallet className='ml-2 opacity-40' />
                    </button>
                    
                </div>

            </div>
        </header>
    );
};

export default Navbar;
