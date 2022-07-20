// Prop Options will be an array like this,

// const people = [
//     { id: 1, name: 'All', value: 'all' },
//     { id: 2, name: 'APR', value: 'apr' },
//     { id: 3, name: 'Staked', value: 'staked' },
// ];

export default function TCCustomSelect({ options, selected, onChange, label }) {
    return (
        <>
            <label
                htmlFor={label?.toLowerCase()}
                className='block w-full text-left font-serif text-base font-medium text-white'
            >
                {label}
            </label>
            <select
                id={label?.toLowerCase()}
                name={label?.toLowerCase()}
                className='mt-1 block w-full rounded-md border border-primary-brand bg-black p-4 text-base font-semibold text-[#708db7] focus:border-white focus:outline-none'
                defaultValue=''
                value={selected}
                onChange={onChange}
            >
                <option value=''></option>
                {options.map(option => (
                    <option
                        key={option.value}
                        value={option.value}
                        className='my-2 text-lg font-semibold'
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </>
    );
}
