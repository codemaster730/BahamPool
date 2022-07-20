import glassImg from '../../assets/images/media/glass.png';

const BenefitItem = ({ img, title, children }) => {
    return (
        <div className='flex flex-col items-center rounded-2xl p-6 transition-colors duration-300 hover:bg-[#f2f6fc]'>
            <img
                src={img || glassImg}
                alt='low fees'
                className='mb-6 block h-24 max-h-36'
            />

            <h2 className='mb-4 text-center font-semibold text-primary-darkText'>
                {title}
            </h2>

            <p className=' text-center text-xs font-normal leading-[18px] text-[#555555]'>
                {children}
            </p>
        </div>
    );
};

export default BenefitItem;
