import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';

import { RiGasStationFill } from 'react-icons/ri';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import GasSpeedRadio from './GasSpeedRadio';
import ToleranceRadio from './ToleranceRadio';
import { AudioSwitch } from '..';

const toleranceOptions = [
    { name: '0.1%', value: 0.1 },
    { name: '0.5%', value: 0.5 },
    { name: '1%', value: 1 },
];

export default function SettingsModal({ open, setOpen }) {
    const [tolerance, setTolerance] = useState(toleranceOptions[0].value);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as='div'
                className='fixed inset-0 z-10 overflow-y-auto'
                onClose={setOpen}
            >
                <div className='flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-50 transition-opacity' />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className='hidden sm:inline-block sm:h-screen sm:align-middle'
                        aria-hidden='true'
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    >
                        <div className='relative inline-block w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white align-bottom shadow-xl transition-all sm:my-8 sm:align-middle'>
                            <div className='bg-white p-4 md:p-8'>
                                <div className='flex items-center justify-between border-b border-[#708db7]/10 pb-6'>
                                    <h2 className='text-xl font-semibold text-primary-darkText'>
                                        Settings
                                    </h2>

                                    <XIcon
                                        className='h-5 w-5 cursor-pointer'
                                        onClick={() => setOpen(false)}
                                    />
                                </div>

                                <div className='flex flex-col space-y-4 border-b border-[#708db7]/10'>
                                    <div className='my-5'>
                                        <h3 className='flex items-center space-x-2 font-semibold text-primary-darkText'>
                                            <RiGasStationFill />
                                            <span>
                                                Default Transaction Speed (GWEI)
                                            </span>
                                            <QuestionMarkCircleIcon className='ml-2 h-4 w-4' />
                                        </h3>

                                        <div className='my-5'>
                                            <GasSpeedRadio />
                                        </div>
                                    </div>
                                </div>

                                <div className='my-5 space-y-4'>
                                    <h3 className='flex items-center space-x-2 font-semibold text-primary-darkText'>
                                        <span>Slippage tolerance</span>
                                        <QuestionMarkCircleIcon className='ml-2 h-4 w-4' />
                                    </h3>

                                    <div className='flex flex-col items-center space-x-4 space-y-3 md:flex-row md:space-y-0'>
                                        <ToleranceRadio
                                            tolerance={tolerance}
                                            setTolerance={setTolerance}
                                            toleranceOptions={toleranceOptions}
                                        />
                                        <div className='flex items-center'>
                                            <input
                                                type='number'
                                                inputMode='decimal'
                                                step={0.1}
                                                min={0.1}
                                                placeholder='5%'
                                                value={tolerance}
                                                onChange={e =>
                                                    setTolerance(e.target.value)
                                                }
                                                className='h-10 rounded-lg border border-[#e5eaf2] bg-transparent px-4 text-primary-darkText focus:outline-none'
                                            />
                                            <span className='ml-3 font-semibold'>
                                                %
                                            </span>
                                        </div>
                                    </div>

                                    {tolerance <= 0.1 && (
                                        <span className='flex justify-self-start text-sm font-semibold text-red-500'>
                                            Your transaction may fail
                                        </span>
                                    )}
                                </div>

                                <div className='my-5 space-y-4'>
                                    <h3 className='flex items-center space-x-2 font-semibold text-primary-darkText'>
                                        <span>Transaction deadline</span>
                                        <QuestionMarkCircleIcon className='ml-2 h-4 w-4' />
                                    </h3>

                                    <div className='flex flex-col items-center justify-between md:flex-row '>
                                        <div className='space-x-4'>
                                            <input
                                                type='number'
                                                inputMode='decimal'
                                                step={1}
                                                min={1}
                                                placeholder='5'
                                                className='h-11 rounded-lg border border-[#e5eaf2] bg-transparent px-4 text-primary-darkText focus:outline-none'
                                            />

                                            <span className=' text-sm font-semibold text-primary-darkText'>
                                                Minutes
                                            </span>
                                        </div>

                                        <div className='mt-4 flex flex-col space-y-4 md:mt-0'>
                                            <span className='text-sm font-semibold text-primary-darkText'>
                                                Audio
                                            </span>
                                            <AudioSwitch />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
