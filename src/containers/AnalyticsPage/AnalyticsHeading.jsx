import { SearchIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const navlinks = [
    { name: 'Overview', path: '' },
    { name: 'Pools', path: '/pools' },
    { name: 'Tokens', path: 'tokens' },
];

const AnalyticsHeading = () => {
    return (
        <header className='flex flex-col justify-between space-y-4 px-6 md:flex-row md:space-y-0'>
            <div className='inline-flex max-w-fit rounded-lg bg-primary-brand/10'>
                {navlinks.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.path}
                        end
                        className={({ isActive }) =>
                            classNames(
                                'flex h-10 items-center justify-center rounded-lg  px-4 text-sm font-semibold opacity-100 transition-opacity duration-150 hover:opacity-70',
                                { 'bg-primary-brand text-white': isActive },
                                { 'text-gray-400': !isActive }
                            )
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>

            <div className='w-full md:w-64'>
                <div className='relative'>
                    <input
                        type='text'
                        placeholder='Search pools or tokens'
                        className='focus:shadow-outline block h-10 w-full rounded-lg border border-white/40 bg-primary-dark px-4 text-xs text-white caret-white focus:border-white focus:outline-none'
                    />
                    <SearchIcon className='absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-white' />
                </div>
            </div>
        </header>
    );
};

export default AnalyticsHeading;
