import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { ArrowSmDownIcon, XIcon } from '@heroicons/react/solid';



export default function InputModal({ open, setOpen, availableBalance, setEnterStaking, poolData, account, type, stakedBalance, setLeaveStaking }) {
    const [pendingConfirm, setPendingConfirm] = useState(false);
    const [inputValue, setInputValue] = useState(0);

    return (
        <Transition.Root show={open} as={Fragment} >
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
                        <div className='relative inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:align-middle'>
                            <div className='grid auto-rows-auto gap-y-4 bg-white px-5 pt-5 pb-8'>
                                <div className='flex w-full items-center justify-between'>
                                    <h1 className='flex items-center space-x-3 text-lg font-medium text-primary-darkText'>
                                        Stake IBT Tokens
                                        
                                    </h1>

                                    <XIcon
                                        className='h-5 w-5 cursor-pointer'
                                        onClick={() => {setOpen(false);setInputValue(0)}}
                                    />
                                </div>
                                <div>
                                    {type == 'enter'?
                                        <span className="m-auto">{availableBalance} IBT available</span>
                                        :
                                        <span className="m-auto">Staked IBT: {stakedBalance}</span>
                                    }
                                    <button onClick={()=>{type=='enter'?setInputValue(availableBalance):setInputValue(stakedBalance)}}
                                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded float-right">Max</button>
                                </div>
                                <input value={inputValue}
                                    onChange={(val) => setInputValue(val.target.value)}
                                    type='text'
                                    placeholder=''
                                    className='w-full rounded-lg border border-primary-brand py-2 px-4 text-lg text-[#708db7] outline-none transition placeholder:font-medium focus:border-2 focus:border-primary-darkText'
                                />

                                <div className='flex flex-row rounded-lg border border-[#e4efff] p-2 '>
                                    <button onClick={() => {setOpen(false); setInputValue(0)}}
                                    className='order-1 m-auto flex h-12 items-center justify-center rounded-lg bg-primary-brand px-6 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-80 md:order-1'
                                    >
                                        Cancel
                                    </button>
                                    {!pendingConfirm ?
                                        <button
                                        className='order-2 m-auto flex h-12 items-center justify-center rounded-lg bg-primary-brand px-6 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-80 md:order-1'
                                        onClick={async () => {
                                            setPendingConfirm(true);
                                            try {
                                                let txHash;
                                                if(type=='enter')
                                                {
                                                     txHash = await setEnterStaking(
                                                        poolData?.farmContract,
                                                    
                                                        inputValue,
                                                        account,
                                                    );
                                                }
                                                else{
                                                     txHash = await setLeaveStaking(
                                                        poolData?.farmContract,
                                                        inputValue,
                                                        account,
                                                    );

                                                }
                                                console.log(txHash);
                                                setPendingConfirm(false);
                                                
                                                setOpen(false);
                                               
                                
                                            } catch (e) {
                                                console.log(e);
                                                setPendingConfirm(false);
                                                
                                            }
                                        }}
                                        >
                                            Confirm
                                        </button>
                                        :
                                        <button
                                        className='order-2 m-auto flex h-12 items-center justify-center rounded-lg bg-primary-brand px-6 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-80 md:order-1'
                                        >
                                            Pending ...
                                        </button>
                                    }   
                                </div>

                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
