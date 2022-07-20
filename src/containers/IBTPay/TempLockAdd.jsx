import { useReducer } from 'react';
import {
    ConnectWalletButton,
    SelectTokenCombobox,
    TPDateInput,
    TPDoubleInput,
    TPInput,
    TPTimeInput,
} from '../../components';
import { produce } from 'immer';
import { nanoid } from 'nanoid';
import { debounce } from 'lodash';
import tokens from '../../assets/data/tokens';

const reducer = (state, action) => {
    switch (action.type) {
        case 'addRecipient':
            return produce(state, draft => {
                draft.formData.recipients.push({
                    id: nanoid(),
                    email: '',
                    amount: '',
                    address: '',
                });
            });
        case 'removeRecipient':
            return produce(state, draft => {
                draft.formData.recipients.splice(action.index, 1);
            });
        case 'updateRecipient':
            return produce(state, draft => {
                draft.formData.recipients[action.index][action.field] =
                    action.value;
            });
        case 'updateFormData':
            return produce(state, draft => {
                draft.formData[action.field] = action.value;
            });
        case 'updateReleaseDate':
            return produce(state, draft => {
                draft.formData.recipients[action.index].releaseDate[
                    action.field
                ] = action.value;
            });
        default:
            return state;
    }
};

const TempLockAdd = () => {
    const [state, dispatch] = useReducer(reducer, {
        formData: {
            token: tokens[0],
            address: '',
            amount: '',
            amountUSD: '',
            password: '',
            confirmPassword: '',
            recipients: [
                {
                    id: nanoid(),
                    releaseDate: {
                        day: '',
                        month: '',
                        year: '',
                    },
                    time: '',
                },
                {
                    id: nanoid(),
                    releaseDate: {
                        day: '',
                        month: '',
                        year: '',
                    },
                    time: '',
                },
                {
                    id: nanoid(),
                    releaseDate: {
                        day: '',
                        month: '',
                        year: '',
                    },
                    time: '',
                },
            ],
            releaseDate: {
                day: '',
                month: '',
                year: '',
            },
            time: '',
        },
    });

    const handleChangeToken = debounce(e => {
        dispatch({
            type: 'updateFormData',
            field: 'token',
            value: e,
        });
    }, 500);

    console.log(state.formData);

    return (
        <form
            className='container mx-auto max-w-2xl py-6'
            onSubmit={e => {
                e.preventDefault();
                console.log(state);
            }}
        >
            <div className='w-full'>
                <SelectTokenCombobox
                    tokens={tokens}
                    onChange={handleChangeToken}
                    selected={state.formData.token}
                />
            </div>

            <div className='mt-4 w-full'>
                <TPInput
                    label='Click here to paste Address'
                    name='address'
                    dispatch={dispatch}
                />
            </div>

            <div className='mt-6 w-full'>
                <TPDoubleInput
                    label='Amount'
                    name='amount'
                    rightIcon='BNB'
                    bottomLabel='Amount in USD'
                    bottomRightIcon='USD'
                    bottomName='amountUSD'
                    dispatch={dispatch}
                />
            </div>

            {state.formData.recipients.map((recipient, index) => (
                <div
                    className='mt-6 w-full bg-[#282D32]/40 p-4'
                    key={recipient.id}
                >
                    <div className='inline-flex w-full items-center justify-between text-sm font-normal capitalize text-tallyPay-primaryText'>
                        <p className='text-white/50'>
                            <span className='text-tallyPay-primaryText'>
                                send to:
                            </span>{' '}
                            Recipient {index + 1} wallet address
                        </p>
                        <p>
                            <span className='ml-12 rounded-full bg-[#83BD33]/30 px-2.5 py-0.5 text-xs text-white'>
                                21 Days Max
                            </span>
                        </p>
                        <p className='text-white/50'>
                            Send Amount :
                            <span className='text-tallyPay-primaryText'>
                                {' '}
                                0.00
                            </span>
                        </p>
                    </div>

                    <div className='flex items-start justify-between'>
                        <div className='mt-4 flex basis-2/3 flex-row items-center space-x-2'>
                            <h2 className='mr-auto flex-1 whitespace-nowrap text-sm text-tallyPay-primaryText'>
                                Time Locked:
                            </h2>
                            <p className='inline-flex flex-1 items-center whitespace-nowrap text-sm font-normal capitalize text-white/50'>
                                Release Date
                            </p>
                            <TPDateInput
                                name='releaseDate'
                                dispatch={dispatch}
                                index={index}
                            />
                        </div>

                        <div className='mt-4 ml-4 flex basis-1/4 justify-between'>
                            <p className='inline-flex items-center whitespace-nowrap text-sm font-normal capitalize text-white/50'>
                                Time
                            </p>
                            <TPTimeInput
                                actionType='updateRecipient'
                                name='time'
                                dispatch={dispatch}
                                index={index}
                            />
                        </div>
                    </div>
                </div>
            ))}

            <div className='mt-6 grid w-full grid-cols-1 gap-y-4 md:grid-cols-2'>
                <div className='flex max-w-fit flex-col'>
                    <div className='flex items-center space-x-2 text-white'>
                        <span>Available :</span>
                        <span>Tally 0.348384</span>
                    </div>
                    <span className='self-end text-tallyPay-primaryText'>
                        0.2445 USD
                    </span>
                </div>

                <div className='flex items-start justify-end space-x-2 text-white'>
                    <span>Defi Account Balance : </span>
                    <span className='text-tallyPay-primaryText'>345.73USD</span>
                </div>

                <div className=' flex max-w-fit flex-col'>
                    <div className='flex items-center space-x-2 text-white'>
                        <span>Available :</span>
                        <span>BNB 0.348384</span>
                    </div>
                    <span className='self-end text-tallyPay-primaryText'>
                        0.2445 USD
                    </span>
                </div>
            </div>

            <div className='mt-6 flex w-full flex-col items-center justify-center'>
                <ConnectWalletButton price='10,000 Tally' />
            </div>
        </form>
    );
};

export default TempLockAdd;
