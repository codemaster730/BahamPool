import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { classNames } from '../../utils/classNames';

const speedOptions = [
    { name: 'Standard (5)', value: 5 },
    { name: 'Fast (6)', value: 6 },
    { name: 'Instant (7)', value: 7 },
];

const GasSpeedRadio = () => {
    const [speed, setSpeed] = useState(speedOptions[0].value);

    return (
        <RadioGroup value={speed} onChange={setSpeed}>
            <RadioGroup.Label className='sr-only'>
                Choose a Gas Speed
            </RadioGroup.Label>
            <div className='flex flex-wrap justify-between '>
                {speedOptions.map(option => (
                    <RadioGroup.Option
                        key={option.name}
                        value={option.value}
                        className={({ active, checked }) =>
                            classNames(
                                checked
                                    ? ' bg-[#1263f1] text-white '
                                    : ' bg-[#e4efff] text-[#1263f1]',
                                'flex h-12  cursor-pointer items-center rounded-lg px-3 font-semibold md:px-6'
                            )
                        }
                    >
                        <RadioGroup.Label as='p'>
                            {option.name}
                        </RadioGroup.Label>
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    );
};

export default GasSpeedRadio;
