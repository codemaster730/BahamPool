import { useReducer } from 'react';
import { PlusIcon, XIcon } from '@heroicons/react/solid';
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
                draft.formData.releaseDate[action.field] = action.value;
            });
        default:
            return state;
    }
};

const TempLockNew = () => {
    const [state, dispatch] = useReducer(reducer, {
        formData: {
            token: tokens[0],
            address: '',
            amount: '',
            amountUSD: '',
            recipients: [{ id: nanoid(), email: '', address: '', amount: '' }],
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
            className='container mx-auto max-w-xl py-6'
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

            <div className='mt-6 w-full'>
                {state.formData?.recipients?.map((recipient, index) => (
                    <div
                        key={recipient.id}
                        className='flex w-full items-start justify-between'
                    >
                        <div className='basis-2/3 pb-5'>
                            <p className='inline-flex items-center text-sm font-normal text-tallyPay-primaryText'>
                                Recipient {index + 1} wallet address{' '}
                                {index > 0 && (
                                    <XIcon
                                        className='ml-3 h-4 w-4 cursor-pointer text-tallyPay-red'
                                        onClick={() =>
                                            dispatch({
                                                type: 'removeRecipient',
                                                index,
                                            })
                                        }
                                    />
                                )}
                            </p>
                            <TPDoubleInput
                                placeholder='Click here to paste Address'
                                dispatch={dispatch}
                                bottomPlaceholder='Click here to paste Email Address'
                                index={index}
                                actionType='updateRecipient'
                                name='address'
                                bottomName='email'
                            />
                        </div>
                        <div className='basis-1/4'>
                            <p className='inline-flex items-center text-sm font-normal text-tallyPay-primaryText'>
                                Send Amount
                            </p>
                            <TPInput
                                placeholder='0.00'
                                name='amount'
                                dispatch={dispatch}
                                actionType='updateRecipient'
                                index={index}
                            />
                            <p className='-mt-6 inline-flex items-center space-x-1 text-xs font-normal text-tallyPay-primaryText'>
                                <span className='text-white'>Balance:</span>
                                <span>3.22$</span>
                            </p>
                        </div>
                    </div>
                ))}

                <button
                    type='button'
                    className='mr-2 inline-flex items-center rounded-full bg-tallyPay-gray-default px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-tallyPay-gray-light focus:outline-none'
                    onClick={() => dispatch({ type: 'addRecipient' })}
                >
                    <PlusIcon className='mr-2 -ml-1 h-5 w-5' />
                    Add More Addresses
                </button>
            </div>

            <div className='mt-6 w-full'>
                <p className='inline-flex w-fit items-center justify-between text-sm font-normal text-tallyPay-primaryText'>
                    <span>Time lock</span>
                    <span className='ml-12 rounded-full bg-[#83BD33]/30 px-2.5 py-0.5 text-xs text-white'>
                        21 Days Max
                    </span>
                </p>

                <div className='flex items-start justify-between'>
                    <div className='mt-4 flex basis-1/2 flex-col space-y-3'>
                        <p className='inline-flex items-center text-sm font-normal capitalize text-white/50'>
                            Release Date
                        </p>
                        <TPDateInput name='releaseDate' dispatch={dispatch} />
                    </div>

                    <div className='mt-4 flex basis-1/3 flex-col space-y-3'>
                        <p className='inline-flex items-center text-sm font-normal capitalize text-white/50'>
                            Select Time
                        </p>
                        <TPTimeInput name='time' dispatch={dispatch} />
                    </div>
                </div>
            </div>

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

                <div className='flex items-start justify-end space-x-2 text-white'>
                    <span className='text-tallyPay-primaryText'>
                        view Contract
                    </span>
                </div>
            </div>

            <div className='mt-6 flex w-full flex-col items-center justify-center'>
                <ConnectWalletButton price='1 BNB or 10,000 Tally' />
            </div>
        </form>
    );
};

export default TempLockNew;
