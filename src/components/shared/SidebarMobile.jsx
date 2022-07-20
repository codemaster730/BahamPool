import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon, XIcon } from '@heroicons/react/solid';
import { MdMore } from 'react-icons/md';

import { aboutUs, moreNavigation, navigation } from '../../assets/data/sidebarData';
import { classNames } from '../../utils/classNames';

import logo1 from '../../assets/images/btally.png';
import logo3 from '../../assets/images/logo3.png';

const SidebarMobile = ({ setSidebarOpen, sidebarOpen }) => {
    return (
        <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
                as='div'
                className='fixed inset-0 z-40 flex md:hidden'
                onClose={setSidebarOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter='transition-opacity ease-linear duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transition-opacity ease-linear duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Dialog.Overlay className='fixed inset-0 bg-gray-700 bg-opacity-75' />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter='transition ease-in-out duration-300 transform'
                    enterFrom='-translate-x-full'
                    enterTo='translate-x-0'
                    leave='transition ease-in-out duration-300 transform'
                    leaveFrom='translate-x-0'
                    leaveTo='-translate-x-full'
                >
                    <div className='relative flex w-full max-w-xs flex-1 flex-col bg-primary-sidebar pt-5 pb-4'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-in-out duration-300'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='ease-in-out duration-300'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <div className='absolute top-0 right-0 -mr-12 pt-2'>
                                <button
                                    type='button'
                                    className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    <span className='sr-only'>
                                        Close sidebar
                                    </span>
                                    <XIcon
                                        className='h-6 w-6 text-white'
                                        aria-hidden='true'
                                    />
                                </button>
                            </div>
                        </Transition.Child>

                        <div className='mt-5 h-0 flex-1 overflow-y-auto'>
                            <div className='sticky mb-4 px-6 transition-all duration-200'>
                                <Link to='/' className='flex items-center'>
                                    <img
                                        src={logo1}
                                        alt='mobile logo'
                                        className='w-10'
                                    />
                                    <img
                                        src={logo3}
                                        alt='tally ho logo'
                                        className='ml-2  w-32'
                                    />
                                </Link>
                            </div>
                            <nav className='space-y-1 px-2'>
                            <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className='group flex h-12 w-full items-center justify-between rounded-lg py-2 px-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#444444] hover:text-[#646464]'>
                                                <span className='flex items-center font-semibold'>
                                                    <MdMore className='mr-3 h-5 w-5 rotate-180 text-white' />
                                                    <span>Sobre nosotras</span>
                                                </span>
                                                <ChevronDownIcon
                                                    className={`${
                                                        open
                                                            ? 'rotate-180 transform'
                                                            : ''
                                                    } h-5 w-5`}
                                                />
                                            </Disclosure.Button>
                                            <Transition
                                                show={open}
                                                enter='transition ease-out duration-300'
                                                enterFrom='opacity-0 transform scale-95'
                                                enterTo='opacity-100 transform scale-100'
                                                leave='transition ease-in duration-75'
                                                leaveFrom='opacity-100 transform scale-100'
                                                leaveTo='opacity-0 transform scale-95'
                                            >
                                                <Disclosure.Panel className='flex flex-col items-center border-t border-gray-200/10 px-4 pt-4 pb-2 text-sm text-gray-500'>
                                                    {aboutUs.map(
                                                        (item, index) => (
                                                            <Link
                                                                to={item.href}
                                                                key={index}
                                                                className='group flex w-full items-center rounded-lg py-2 px-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#444444] hover:text-[#646464]'
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        )
                                                    )}
                                                </Disclosure.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Disclosure>
                                {navigation.map(item => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className={({ isActive }) =>
                                            classNames(
                                                isActive
                                                    ? 'bg-[#444444] text-white'
                                                    : 'text-white hover:bg-[#444444] hover:text-[#646464]',
                                                'group flex h-12 items-center rounded-lg py-2 px-3 text-sm font-medium transition-colors duration-300'
                                            )
                                        }
                                        end
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <>
                                            {item.icon && (
                                                <item.icon
                                                    className='mr-3 h-5 w-5 flex-shrink-0 fill-white text-white'
                                                    aria-hidden='true'
                                                />
                                            )}

                                            {item.image && (
                                                <img
                                                    src={item.image}
                                                    alt='icon'
                                                    className='mr-2 h-6 w-6 object-cover'
                                                />
                                            )}
                                            <span>{item.name}</span>

                                            {item.badge && (
                                                <span className=' ml-auto inline-flex items-center justify-center rounded-2xl bg-primary-brand px-2 py-[2px] text-[8px] font-semibold leading-3 text-primary-dark'>
                                                    {item.badge}
                                                </span>
                                            )}
                                        </>
                                    </NavLink>
                                ))}

                                
                            </nav>
                        </div>
                    </div>
                </Transition.Child>
                <div className='w-14 flex-shrink-0'></div>
            </Dialog>
        </Transition.Root>
    );
};

export default SidebarMobile;
