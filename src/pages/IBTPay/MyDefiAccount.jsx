import { ConnectWalletButton } from '../../components';
import { DefiAccount } from '../../containers';

const MyDefiAccount = () => {
    return (
        <>
            <h1 className='text-center text-5xl font-medium tracking-wider text-white'>
                <span className='underline decoration-primary-brand decoration-2 underline-offset-4'>
                    My Defi
                </span>{' '}
                Accounts
            </h1>

            <div className='container mt-12 max-w-4xl overflow-hidden rounded-lg bg-tallyPay-dark'>
                <form
                    className='container mx-auto my-6 max-w-2xl py-6'
                    onSubmit={e => {
                        e.preventDefault();
                        // console.log(state);
                    }}
                >
                    <p className='my-4 text-primary-brand'>Accounts</p>

                    <div className='space-y-6'>
                        <DefiAccount
                            title='living trust account'
                            accounts={[1, 2]}
                        />
                        <DefiAccount title='temp account' />
                        <DefiAccount title='Tally Will Account' />
                    </div>

                    <div className='mt-6 grid w-full grid-cols-1 gap-y-4'>
                        <div className='flex max-w-fit flex-col'>
                            <div className='flex items-center space-x-2 text-white'>
                                <span>Available :</span>
                                <span>Tally 0.348384</span>
                            </div>
                            <span className='self-end text-tallyPay-primaryText'>
                                0.2445 USD
                            </span>
                        </div>

                        <div className=' flex max-w-fit flex-col'>
                            <div className='flex items-center space-x-2 text-white'>
                                <span>Available :</span>
                                <span>BNB 0.348384</span>
                            </div>
                            <span className='self-end text-tallyPay-primaryText'>
                                0.2445 USD
                            </span>
                        </div>
                    </div>

                    <div className='my-6 flex w-full flex-col items-center justify-center'>
                        <ConnectWalletButton price='10,000 Tally' />
                    </div>
                </form>
            </div>
        </>
    );
};

export default MyDefiAccount;
