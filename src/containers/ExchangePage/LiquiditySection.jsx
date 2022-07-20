import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LiquiditySection = ({ openSettingsModal, setType }) => {
    return (
        <div className='relative z-10 mt-5 w-full max-w-lg rounded-2xl bg-card_gradient py-4 pb-8 text-white'>
            <div className=' p-6'>
                <div className='flex items-center justify-between '>
                    <div className='space-y-2'>
                        <h2 className='text-xl font-semibold leading-6'>
                            Liquidity
                        </h2>
                        <p className='text-sm font-semibold text-primary-brand'>
                            Add liquidity to receive LP tokens
                        </p>
                    </div>
                    <button onClick={openSettingsModal}>
                        <FaCog className='h-6 w-6' />
                    </button>
                </div>

                <Link
                    to='add/ETH'
                    className='my-4 flex h-12 w-full items-center justify-center rounded-lg bg-[#1263f1] px-6'
                >
                    <button
                        onClick={() => setType('')}
                        className='font-semibold'
                    >
                        Add Liquidity +
                    </button>
                </Link>
            </div>

            <div className='grid auto-rows-auto gap-y-6 p-6'>
                <div className='flex items-center justify-between'>
                    <p className='font-semibold leading-6 text-white'>
                        Your Liquidity
                    </p>

                    <span>
                        <QuestionMarkCircleIcon className='h-5 w-5 text-primary-darkText' />
                    </span>
                </div>

                <div className='flex w-full justify-center rounded-2xl p-10'>
                    <span className='text-center font-medium text-primary-brand'>
                        Connect a wallet to view your liquidity.
                    </span>
                </div>

                <div className='space-y-3 text-sm'>
                    <span>
                        Don't see a pool you joined?{' '}
                        <Link
                            to='add'
                            className='font-medium text-primary-brand'
                        >
                            Import it.
                        </Link>
                    </span>

                    <span className='block'>
                        Or, if you staked your LP tokens in a farm, unstake them
                        to see them here.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LiquiditySection;
