import classNames from 'classnames';
import { memo } from 'react';

const FormTab = ({ tabs, currentTab, dispatch }) => {
    return (
        <div className='mb-20'>
            <div className='bg-tallyPay-dark sm:hidden'>
                <label htmlFor='tabs' className='sr-only'>
                    Select a tab
                </label>
                <select
                    id='tabs'
                    name='tabs'
                    className='block w-full rounded-md bg-tallyPay-dark  py-4 px-6 text-white'
                    defaultValue={currentTab}
                >
                    {tabs.map(tab => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className='hidden sm:block'>
                <nav
                    className='relative z-0 flex rounded-lg shadow'
                    aria-label='Tabs'
                >
                    {tabs.map((tab, tabIdx) => (
                        <p
                            key={tab.name}
                            className={classNames(
                                currentTab === tab.name
                                    ? 'bg-white/10 text-white'
                                    : 'bg-tallyPay-dark text-white',
                                tabIdx === 0 ? 'rounded-tl-lg' : '',
                                tabIdx === tabs.length - 1
                                    ? 'rounded-tr-lg'
                                    : '',
                                'group relative min-w-0 flex-1 cursor-pointer overflow-hidden py-5 px-4 text-center text-lg font-medium hover:bg-white/20 focus:z-10'
                            )}
                            aria-current={
                                currentTab === tab.name ? 'page' : undefined
                            }
                            onClick={() =>
                                dispatch({ type: 'SET_TAB', tab: tab.name })
                            }
                        >
                            <span>{tab.name}</span>
                        </p>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default memo(FormTab);
