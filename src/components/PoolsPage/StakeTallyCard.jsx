import { Disclosure, Transition } from '@headlessui/react';
import { useCallback, useEffect, useState } from  'react'
import { ChevronDownIcon, ExternalLinkIcon } from '@heroicons/react/solid';
import btally from '../../assets/images/logo1.png';
import Web3ConnectModal from '../shared/Web3ConnectModal';
import InputModal from './InputModal';
import { useWeb3React } from "@web3-react/core";
import useAllowance from '../../hooks/useAllowance';
import useApprove from '../../hooks/useApprove';
import useTally from '../../hooks/useTally';
import { bnToDec } from '../../utils';
import { getEarned, getStaked, leaveStaking, enterStaking, harvestStaking } from '../../contracts/utils';
import BigNumber from 'bignumber.js'

const StakeTallyCard = ({ coverImg, avatar, tokenName, apyValue, pool }) => {
    const poolData = pool;
    const [connectModalOpen, setConnectModalOpen] = useState(false);
    const [inputModalOpen, setInputModalOpen] = useState(false);
    const { active, connector, library, chainID, account} = useWeb3React();
    const allowance = useAllowance(poolData?.lpContract, poolData?.farmContract);
    const { onApprove } = useApprove(poolData?.lpContract, poolData?.farmContract);
    const [requestedApproval, setRequestedApproval] = useState(false);
    const [totalStaked, setTotalStaked] = useState(0);
    const [earned, setEarned] = useState(0);
    const [staked, setStaked] = useState(0);
    const [pendingHarvest, setPendingHarvest] = useState(false);
    const [walletTallyBalance, setWalletTallyBalance] = useState(0);
    const [inputType, setInputType] = useState('enter');
    const tally = useTally();
    const pid = poolData?.pid;

    //console.log("Allowance = ", allowance)
    console.log("PoolData = ", poolData);
    useEffect(() => {
        async function fetchEarned() {
            if (!tally) return;
            //const farmContract = getFarmContract(payr);
            const farmContract = poolData?.farmContract;
            const earned = await getEarned(
                farmContract,
                pid,
                account
            );
            const decimals = await poolData?.tokenContract.methods.decimals().call();
            setEarned(bnToDec(new BigNumber(earned), decimals).toFixed(2));
       
            const staked = await getStaked(
                farmContract,
                pid,
                account
            );
           // console.log("staked = ", staked);
            setStaked(bnToDec(new BigNumber(staked.toNumber())).toFixed(2));
            console.log("lpcontract = ",poolData?.lpContract);
            console.log("farmContractaddre = ",farmContract?.options.address);
            const totalStakedValue = await poolData?.lpContract.methods
                .balanceOf(farmContract?.options.address)
                .call();
            setTotalStaked(bnToDec(new BigNumber(totalStakedValue)).toFixed(2));
        }
        if (tally && account) {
            fetchEarned();
        }
        let refreshInterval = setInterval(fetchEarned, 10000)
        return () => clearInterval(refreshInterval)
    }, [tally, account, pid, poolData?.farmContract, poolData?.tokenContract.methods, poolData?.lpContract.methods]);
    
    const handleApprove = useCallback(async () => {
        try {
            setRequestedApproval(true);
            const txHash = await onApprove();
            if (!txHash) {
                setRequestedApproval(false);
            }
        } catch (e) {
            console.log(e);
        }
    }, [onApprove, setRequestedApproval]);
    const handleEnterStaking = async () => {
       
       
        const balance = await poolData.lpContract.methods
            .balanceOf(account)
            .call();
           // console.log("asdfasdf",bnToDec(new BigNumber(balance)))
        setWalletTallyBalance(bnToDec(new BigNumber(balance)));
        setInputType('enter');
        setInputModalOpen(true);
    };
    const handleLeaveStaking = async () => {
       
       
        const balance = await poolData.lpContract.methods
            .balanceOf(account)
            .call();
    
        setWalletTallyBalance(bnToDec(new BigNumber(balance)));
        setInputType('leave');
        setInputModalOpen(true);
    };

    //console.log("account = ", account);
    
    return (
        <div className='flex flex-col rounded-2xl bg-white p-6'>
            <div className='flex flex-row space-x-5 border-b-2 border-[#708eb7]/10 pb-4'>
                <figure className='relative inline-block'>
                    <img className='h-20 w-20' src={btally} alt='token' />
                    <span className='absolute bottom-2 right-2 block translate-y-1/2 translate-x-1/2 transform rounded-full border-2 border-white'>
                        <img
                            className='h-8 w-8 rounded-full'
                            src={btally}
                            alt='token'
                        />
                    </span>
                </figure>

                <div className=' flex flex-col space-y-2'>
                    <h3 className='text-lg font-semibold text-primary-darkText'>
                        Earn IBT
                    </h3>
                    <h4 className='text-xs font-semibold text-[#444444]'>
                        Stake IBT
                    </h4>
                    <p className='text-xl font-medium text-primary-brand'>
                        APY 0%
                    </p>
                </div>
            </div>
            <div className='py-4 px-5' style={{display: active ? "none" : ""}}>
                <button
                    onClick={() => {setConnectModalOpen(true);}}
                    className='flex h-12 w-full items-center justify-center rounded-lg bg-primary-brand px-6 font-semibold text-white'
                    >
                        Unlock Wallet
                </button>
                <Web3ConnectModal
                    open={connectModalOpen}
                    setOpen={setConnectModalOpen}
                />
            </div>
            {!allowance.toNumber() ? (
                <>                
                    <div className='py-4 px-5' style={{display: !active ? "none" : ""}}>
                        { requestedApproval ? (
                            <button
                           
                            className='flex h-12 w-full items-center justify-center rounded-lg bg-primary-brand px-6 font-semibold text-white'
                            >
                                
                            <span> Approving...
                            </span> 
                        </button>
                        ): (
                            <button
                                onClick={handleApprove}
                                className='flex h-12 w-full items-center justify-center rounded-lg bg-primary-brand px-6 font-semibold text-white'
                            >
                            <img
                                    className='h-8 w-8 rounded-full mr-2'
                                    src={btally}
                                    alt='token'
                                />
                                <span>Approve IBT</span> 
                            </button>
                        )}
                        
                    
                    </div>
                </>
            ) : (
                <>
                    <div className='py-4 px-5 '>
                        <div className='mb-2 flex'>
                            <div className='order-1 flex flex-col text-xs font-semibold text-black mr-4 w-18'>
                                    <span className='text-primary-brand'>
                                        Staked
                                    </span>
                                    <span className='text-sm'>{staked} TALLY</span>
                                    <span>$0.0000</span>
                            </div>
                            
                            <button
                                onClick={ handleEnterStaking }
                                className='order-2 mr-2 flex h-12 items-center justify-center rounded-lg bg-primary-brand px-6 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-80 md:order-1'
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            </button>
                            <button
                                onClick={ handleLeaveStaking }
                                className='order-3 flex h-12 items-center justify-center rounded-lg bg-primary-brand px-6 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-80 md:order-1'
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                            </button>
                            <InputModal
                                type={inputType}
                                open={inputModalOpen}
                                availableBalance={walletTallyBalance}
                                stakedBalance={staked}
                                setOpen={setInputModalOpen}
                                setEnterStaking={enterStaking}
                                setLeaveStaking={leaveStaking}
                                poolData={poolData}
                                account={account}
                            />
                            
                            
                        </div>
                        <div className='flex'>
                            <div className='order-1 flex flex-col text-xs font-semibold text-black mr-4 w-18'>
                                    <span className='text-primary-brand'>
                                        Earned
                                    </span>
                                    <span className='text-sm'>{earned} IBT</span>
                                    <span>$0.0000</span>
                            </div>
                            {!pendingHarvest ?
                                <button
                                    onClick={
                                        async() => {
                                            setPendingHarvest(true);
                                            try {
                                                const txHash = await harvestStaking(
                                                    poolData.farmContract,
                                                    account,
                                                );
                                                console.log(txHash);
                                                setPendingHarvest(false);
                                                
                                            } catch (e) {
                                                console.log(e);
                                                setPendingHarvest(false);
                                                
                                            }
                                        }
                                    }
                                    className='order-2 flex h-12 items-center justify-center rounded-lg bg-primary-brand px-6 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-80 md:order-1'
                                >
                                    Harvest
                                </button>
                                :
                                <button className='order-2 flex h-12 items-center justify-center rounded-lg bg-primary-brand px-6 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-80 md:order-1'>
                                    PENDING 
                                </button>
                            }   

                        </div>
                    </div>
                </>
            )}

              
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className='mx-auto flex items-center justify-center px-4 py-2 font-semibold text-primary-brand'>
                            <span>{open ? 'Hide' : 'Details'}</span>
                            <ChevronDownIcon
                                className={`${
                                    open ? 'rotate-180 transform' : ''
                                } h-6 w-6 text-primary-brand`}
                            />
                        </Disclosure.Button>
                        <Transition
                            show={open}
                            enter='transition ease-out duration-300 transform'
                            enterFrom='-translate-y-2 opacity-0'
                            enterTo='translate-y-0 opacity-100'
                            leave='transition ease-in duration-100'
                            leaveFrom='translate-y-0 opacity-100'
                            leaveTo='-translate-y-2 opacity-0'
                        >
                            <Disclosure.Panel className='space-y-4 px-4 pt-3 pb-2 text-xs text-gray-500'>
                                <div className='flex'>
                                    <span className='text-sm text-[#708db7]'>
                                        Total Stake
                                    </span>
                                    <div className='flex-1 border-b border-dotted border-[#708db7]'></div>
                                    <span className='text-sm text-primary-darkText'>
                                        {totalStaked}
                                    </span>
                                </div>

                                <a
                                    href='#!'
                                    className='flex items-center space-x-1'
                                >
                                    <span className='text-base text-primary-brand'>
                                        View Contact
                                    </span>
                                    <ExternalLinkIcon className='ml-2 h-6 w-6 text-primary-brand' />
                                </a>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default StakeTallyCard;
