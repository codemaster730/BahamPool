import { useReducer } from 'react';
import { PlusIcon, XIcon } from '@heroicons/react/solid';
import {
    ConnectWalletButton,
    SelectTokenCombobox,
    TPDoubleInput,
    TPInput,
    TPPasswordInputs,
} from '../../components';
import { produce } from 'immer';
import { nanoid } from 'nanoid';
import { debounce } from 'lodash';
import tokens from '../../assets/data/tokens';

const reducer = (state, action) => {
    switch (action.type) {
        case 'addInheritor':
            return produce(state, draft => {
                draft.formData.inheritors.push({
                    id: nanoid(),
                    email: '',
                    address: '',
                });
            });
        case 'removeInheritor':
            return produce(state, draft => {
                draft.formData.inheritors.splice(action.index, 1);
            });
        case 'updateInheritor':
            return produce(state, draft => {
                draft.formData.inheritors[action.index][action.field] =
                    action.value;
            });
        case 'updateFormData':
            return produce(state, draft => {
                draft.formData[action.field] = action.value;
            });
        default:
            return state;
    }
};

const TallyWillsNew = () => {
    const [state, dispatch] = useReducer(reducer, {
        formData: {
            token: tokens[0],
            address: '',
            amount: '',
            amountUSD: '',
            email: '',
            password: '',
            confirmPassword: '',
            inheritors: [
                {
                    id: nanoid(),
                    email: '',
                    address: '',
                },
            ],
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
            className='container mx-auto min-h-screen max-w-xl'
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
                    rightIcon={
                        // this will be the first 3 characters of the token name
                        state.formData.token.title.slice(0, 3).toUpperCase()
                    }
                    bottomLabel='Amount in USD'
                    bottomRightIcon='USD'
                    bottomName='amountUSD'
                    dispatch={dispatch}
                />
            </div>

            <div className='mt-6 w-full'>
                {state.formData.inheritors.map((inheritor, index) => (
                    <>
                        <p
                            key={`${inheritor.id}-label`}
                            className='inline-flex items-center text-sm font-normal text-tallyPay-primaryText'
                        >
                            Inheritor {index + 1} wallet address{' '}
                            {index > 0 && (
                                <XIcon
                                    className='ml-3 h-4 w-4 cursor-pointer text-tallyPay-red'
                                    onClick={() =>
                                        dispatch({
                                            type: 'removeInheritor',
                                            index,
                                        })
                                    }
                                />
                            )}
                        </p>
                        <TPDoubleInput
                            name='address'
                            placeholder='Click here to paste Address'
                            bottomPlaceholder='Click here to paste Email Address'
                            bottomName='email'
                            bottomType='email'
                            fee='0.0'
                            key={`${inheritor.id}-input`}
                            dispatch={dispatch}
                            index={index}
                        />
                    </>
                ))}

                <button
                    type='button'
                    className='mr-2 inline-flex items-center rounded-full bg-tallyPay-gray-default px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-tallyPay-gray-light focus:outline-none'
                    onClick={() => dispatch({ type: 'addInheritor' })}
                >
                    <PlusIcon className='mr-2 -ml-1 h-5 w-5' />
                    Add More Addresses
                </button>
            </div>

            <div className='mt-4 w-full'>
                <TPInput
                    label='Your Email Address'
                    name='email'
                    dispatch={dispatch}
                />
            </div>

            <div className='mt-6 w-full'>
                <TPPasswordInputs
                    dispatch={dispatch}
                    password={state.formData.password}
                    confirmPassword={state.formData.confirmPassword}
                />
            </div>

            <div className='mt-6 grid w-full grid-cols-1 gap-y-4 md:grid-cols-2'>
                <div className='flex max-w-fit flex-col'>
                    <div className='flex items-center space-x-2 text-white'>
                        <span>Available :</span>
                        <span>IBT 0.348384</span>
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
                    <span className='capitalize text-tallyPay-primaryText'>
                        View Contract
                    </span>
                </div>
            </div>

            <div className='mt-6 flex w-full flex-col items-center justify-center'>
                <ConnectWalletButton price='1 BNB or 10,000 Tally' />
            </div>
        </form>
    );
};

export default TallyWillsNew;
