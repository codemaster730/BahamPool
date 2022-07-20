const CommonBaseToken = ({ icon, name }) => {
    return (
        <div className='flex items-center justify-center space-x-2 rounded-lg bg-white p-2 transition-colors duration-200 hover:bg-[#f2f6fc]'>
            <img
                src={icon}
                alt='tally icon'
                className='h-6 w-6 rounded-full shadow-md'
            />
            <span className='text-sm font-semibold uppercase text-primary-darkText'>
                {name}
            </span>
        </div>
    );
};

export default CommonBaseToken;
