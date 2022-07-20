const CurrencyItem = ({ icon, name }) => {
    return (
        <div className='my-4 flex items-center space-x-6'>
            <img src={icon} alt='icon' className='h-6 w-6 rounded-full' />
            <span className='text-sm font-semibold uppercase leading-6 text-primary-darkText'>
                {name}
            </span>
        </div>
    );
};

export default CurrencyItem;
