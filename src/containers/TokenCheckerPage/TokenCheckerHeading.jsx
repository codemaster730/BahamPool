import { useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { CheckIcon, SearchIcon } from '@heroicons/react/solid';
import { FaCertificate, FaStar, FaBell, FaChartPie } from 'react-icons/fa';

import tokenCheckerImg from '../../assets/images/tokenChecker/TokenChecker.png';
import { MakeAChallangeModal, WatchlistTokenModal } from '../../components';

const routes = [
    {
        id: 'certified',
        path: 'certified',
        icon: CheckIcon,
        label: 'Fichas de lista de vigilancia',
    },
    {
        id: 'scam',
        path: 'scam',
        icon: FaCertificate,
        label: 'Fichas de estafa',
    },
    {
        id: 'checker',
        path: 'checker',
        icon: FaStar,
        label: 'Copiar contrato',
    },
    {
        id: 'doxxed',
        path: 'doxxed',
        icon: FaBell,
        label: 'Fichas Doxxed',
    },
    {
        id: 'advert',
        path: 'advert',
        icon: FaChartPie,
        label: 'Propaganda',
    },
];

const TokenCheckerHeading = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isWatchlistModalOpen, setIsWatchlistModalOpen] = useState(false);

    return (
        <div className='flex flex-col items-center justify-center sm:mx-4 md:mx-11'>
            {/* <img
                src={tokenCheckerImg}
                alt='token checker'
                className='max-h-32 md:max-h-60'
            /> */}

            <div className='my-2 flex w-full items-center place-self-start'>
                <input
                    type='text'
                    placeholder='Nombre del token o dirección del contrato'
                    className='h-9 w-full max-w-[400px] rounded-sm rounded-r-none border border-[#ced4da] bg-[#1f1f1f] bg-clip-padding py-2 px-3 text-sm font-semibold text-[#495057] shadow-sm focus:border-[#d9d9d9] focus:outline-none focus:drop-shadow-search'
                />
                <div className='flex h-9 items-center bg-[#d3d3d3] px-1 py-1'>
                    <SearchIcon className='h-4 w-4 text-[#495057]' />
                </div>
            </div>

            <div className='checkerlinks mb-2 flex w-full items-center space-x-1 place-self-start overflow-x-auto'>
                {routes.map(item => (
                    <NavLink
                        to={item.path}
                        key={item.id}
                        className={({ isActive }) =>
                            classNames(
                                {
                                    'border-b-[5px] border-b-[#211f1f] !text-white':
                                        isActive,
                                },
                                'flex items-center space-x-1 whitespace-nowrap border-[5px] border-b-0 border-l-[#211f1f]  border-t-[#494949] border-r-[#494949] bg-[#262626] px-2 py-2 font-semibold text-[#e7cd86] md:px-5 md:py-[10px]'
                            )
                        }
                        end
                    >
                        <item.icon className='h-6 w-6' />{' '}
                        <span>{item.label}</span>
                    </NavLink>
                ))}

                <div className='flex items-center justify-center space-x-4 whitespace-nowrap pl-5 md:hidden'>
                    <button
                        className='flex h-9 items-center justify-center rounded-2xl bg-red-600 p-3 text-white'
                        onClick={() => setIsModalOpen(true)}
                    >
                        <span>Haz un desafío</span>
                    </button>
                    <button
                        className='flex h-9 items-center justify-center rounded-2xl bg-primary-brand p-3 text-white'
                        onClick={() => setIsWatchlistModalOpen(true)}
                    >
                        <span>Fichas de lista de vigilancia</span>
                    </button>

                    <MakeAChallangeModal
                        open={isModalOpen}
                        setOpen={setIsModalOpen}
                    />
                    <WatchlistTokenModal
                        open={isWatchlistModalOpen}
                        setOpen={setIsWatchlistModalOpen}
                    />
                </div>
            </div>
        </div>
    );
};

export default TokenCheckerHeading;
