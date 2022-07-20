import { Switch } from '@headlessui/react';
import { useState } from 'react';
import { classNames } from '../../utils/classNames';

const StackedSwitch = () => {
    const [enabled, setEnabled] = useState(false);
    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className='group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none'
        >
            <span className='sr-only'>Use setting</span>

            <span
                aria-hidden='true'
                className='pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out'
            />
            <span
                aria-hidden='true'
                className={classNames(
                    enabled ? 'translate-x-5' : 'translate-x-0 bg-[#555555]',
                    'pointer-events-none absolute left-0 inline-block h-6 w-6 transform rounded-full bg-[#555555] transition-transform duration-200 ease-in-out'
                )}
            />
        </Switch>
    );
};

export default StackedSwitch;
