import notFoundImg from '../../assets/images/tally-pay/notfound.png';

const DefiNotFoundComp = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img
                src={notFoundImg}
                alt='not found'
                className='w-36 object-contain'
            />
            <h2 className='text-2xl text-tallyPay-primaryText'>Ooops,</h2>
            <p className='pt-2 text-sm text-white'>
                Looks Like, you don’t have Account ?
            </p>

            <button className='mt-4 rounded border border-primary-brand bg-transparent py-3 px-7 text-center text-white hover:bg-primary-brand/30'>
                Create Account
            </button>
        </div>
    );
};

export default DefiNotFoundComp;
