import { useReducer } from 'react';
import { FormTab } from '../../components';
import {
    LivingTrustAdd,
    LivingTrustNew,
    LivingTrustRecovery,
    LivingTrustRecurring,
    LivingTrustRemove,
} from '../../containers';
import { produce } from 'immer';

const tabs = [
    { name: 'New' },
    { name: 'Add' },
    { name: 'Remove' },
    { name: 'Recurring Payout' },
    { name: 'Recovery' },
];

const LivingTrust = () => {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'SET_TAB':
                    return produce(state, draft => {
                        draft.currentTab = action.tab;
                    });
                default:
                    return state;
            }
        },
        {
            currentTab: tabs[0].name,
            tabs,
        }
    );

    return (
        <>
            <h1 className='text-center text-5xl font-medium tracking-wider text-white'>
                <span className='underline decoration-primary-brand decoration-2 underline-offset-4'>
                    Living
                </span>{' '}
                Trust
            </h1>

            <div className='container mt-12 max-w-4xl overflow-hidden rounded-lg bg-tallyPay-dark'>
                <FormTab
                    tabs={state.tabs}
                    currentTab={state.currentTab}
                    dispatch={dispatch}
                />

                {state.currentTab === 'New' && <LivingTrustNew />}
                {state.currentTab === 'Add' && <LivingTrustAdd />}
                {state.currentTab === 'Remove' && <LivingTrustRemove />}
                {state.currentTab === 'Recurring Payout' && (
                    <LivingTrustRecurring />
                )}
                {state.currentTab === 'Recovery' && <LivingTrustRecovery />}
            </div>
        </>
    );
};

export default LivingTrust;

// export default LivingTrust;
