const TCCustomInput = ({ label, name, type, placeholder, value, onChange }) => {
    return (
        <>
            <label
                htmlFor={name}
                className='block w-full text-left font-serif text-base font-medium text-white'
            >
                {label}
            </label>
            <div className='mt-1 w-full'>
                <input
                    type={type || 'text'}
                    name={name}
                    id={name}
                    className='mt-1 block w-full rounded-md border border-primary-brand bg-black p-4 text-base font-semibold text-[#708db7] focus:border-white focus:outline-none'
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    );
};

export default TCCustomInput;
