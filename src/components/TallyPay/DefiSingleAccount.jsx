const DefiSingleAccount = ({ account }) => {
    // pass the account details in this functions,
    // then show the account details as per need

    return (
        <div className='flex w-full justify-between gap-x-8'>
            <div className='relative flex w-full cursor-default items-center rounded-md border py-3 pl-10 text-left text-white shadow-sm sm:text-sm'>
                <div className='polygonIcon absolute -left-5 z-20 overflow-hidden bg-tallyPay-gray-lighter'>
                    <img
                        src={'https://via.placeholder.com/600x400'}
                        alt=''
                        className='h-12 w-10 flex-shrink-0 object-cover'
                    />
                </div>

                <p className='space-x-4 text-white'>
                    <span>XRP</span>
                    <span className='text-tallyPay-primaryText'>6935</span>
                </p>
            </div>
            <div className='relative flex w-full cursor-default items-center rounded-md border py-3 pl-10 text-left text-white shadow-sm sm:text-sm'>
                <div className='polygonIcon absolute -left-5 z-20 overflow-hidden bg-tallyPay-gray-lighter'>
                    <img
                        src={'https://via.placeholder.com/600x400'}
                        alt=''
                        className='h-12 w-10 flex-shrink-0 object-cover'
                    />
                </div>

                <p className='space-x-4 text-white'>
                    <span className='text-tallyPay-primaryText'>$340</span>
                    <span>USD</span>
                </p>
            </div>

            <button className='ml-auto w-4/5 rounded border border-primary-brand bg-transparent text-center text-white hover:bg-primary-brand/30'>
                Add
            </button>
            <button className='ml-auto w-4/5 rounded border border-tallyPay-red bg-transparent text-center text-white hover:bg-tallyPay-red'>
                Remove
            </button>
        </div>
    );
};

export default DefiSingleAccount;
