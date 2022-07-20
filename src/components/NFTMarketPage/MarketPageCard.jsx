import classNames from 'classnames';

const MarketPageCard = ({ title, amount, percentage, off, color }) => {
    // For Reference
    // {
    //     id: 1,
    //     title: 'Cool Investor',
    //     amount: '1,250,000',
    //     percentage: '5%',
    //     off: '0.2%' / null,
    //     color: 'blue / green'
    // },

    return (
        <div
            className={classNames(
                'flex flex-col items-center space-y-1 rounded-xl bg-black p-4 transition-transform duration-200 hover:-translate-y-1 hover:scale-105',
                {
                    'text-primary-brand_light': color === 'green',
                    'text-[#5ebcd7]': color === 'blue',
                }
            )}
        >
            <h2 className='text-xl font-semibold'>{title}</h2>

            <span className='text-sm text-white'>Staking required.</span>

            <span className='text-xl font-semibold'>{amount}</span>

            <span className='text-sm text-white'>Pool weight.</span>
            <span className='text-xl font-semibold'>{percentage}</span>
            {off ? (
                <p className='text-white'>
                    <span className='text-[#5ebcd7]'>{off}</span> off fees.
                </p>
            ) : (
                <p className='text-white'>&nbsp;</p>
            )}

            <span className='text-white'>Guaranteed allocation</span>
            <span>YES</span>
        </div>
    );
};

export default MarketPageCard;
