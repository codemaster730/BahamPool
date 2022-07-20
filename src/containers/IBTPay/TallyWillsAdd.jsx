import { useReducer } from 'react';
import {
    ConnectWalletButton,
    SelectTokenCombobox,
    TPDoubleInput,
    TPEditableButton,
    TPInput,
} from '../../components';
import { produce } from 'immer';
import { nanoid } from 'nanoid';
import { PlusIcon } from '@heroicons/react/solid';
import tokens from '../../assets/data/tokens';
import { debounce } from 'lodash';

const reducer = (state, action) => {
    switch (action.type) {
        case 'updateFormData':
            return produce(state, draft => {
                draft.formData[action.field] = action.value;
            });
        case 'updateOtherInheritors':
            return produce(state, draft => {
                draft.formData.otherInheritors[action.index].percent =
                    action.value;
            });
        default:
            return state;
    }
};

const TallyWillsAdd = () => {
    const [state, dispatch] = useReducer(reducer, {
        formData: {
            token: tokens[0],
            address: '',
            amount: '',
            amountUSD: '',
            password: '',
            confirmPassword: '',
            inheritorAddress: '',
            inheritorEmail: '',
            sendAmount: '',
            otherInheritors: [
                { id: nanoid(), percent: '0.00%' },
                { id: nanoid(), percent: '0.00%' },
                { id: nanoid(), percent: '0.00%' },
                { id: nanoid(), percent: '0.00%' },
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
                    rightIcon='BNB'
                    bottomLabel='Amount in USD'
                    bottomRightIcon='USD'
                    bottomName='amountUSD'
                    dispatch={dispatch}
                />
            </div>

            <div className='mt-6 flex w-full items-center justify-between'>
                <div className='basis-2/3 pb-5'>
                    <p className='inline-flex items-center text-sm font-normal text-tallyPay-primaryText'>
                        Inheritor 5 wallet address{' '}
                    </p>
                    <TPInput
                        name='inheritorAddress'
                        dispatch={dispatch}
                        placeholder='Click here to paste Address'
                    />
                </div>
                <div className='basis-1/4'>
                    <p className='inline-flex items-center text-sm font-normal text-tallyPay-primaryText'>
                        Send Amount
                    </p>
                    <TPInput
                        placeholder='10%'
                        name='sendAmount'
                        dispatch={dispatch}
                    />
                    <p className='-mt-6 inline-flex items-center space-x-1 text-xs font-normal text-tallyPay-primaryText'>
                        <span className='text-white'>Balance:</span>
                        <span>3.22$</span>
                    </p>
                </div>
            </div>

            <div className='mt-6 w-full'>
                <p className='inline-flex items-center text-sm font-normal text-tallyPay-primaryText'>
                    Adjust % of other inheritors{' '}
                </p>

                <div className='flex items-center gap-6'>
                    {state.formData?.otherInheritors?.map((item, index) => (
                        <TPEditableButton
                            item={item}
                            index={index}
                            dispatch={dispatch}
                        />
                    ))}
                </div>
            </div>
            <div className='mt-6 w-2/3'>
                <p className='inline-flex items-center text-sm font-normal text-tallyPay-primaryText'>
                    Inheritor 5 Email address{' '}
                </p>
                <TPInput
                    name='inheritorEmail'
                    dispatch={dispatch}
                    placeholder='Click here to paste Email Address'
                />
            </div>

            <div className='mt-6 w-full'>
                <button
                    type='button'
                    className='mr-2 inline-flex items-center rounded-full bg-tallyPay-gray-default px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-tallyPay-gray-light focus:outline-none'
                >
                    <PlusIcon className='mr-2 -ml-1 h-5 w-5' />
                    Add More Addresses
                </button>
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
            </div>

            <div className='mt-6 flex w-full flex-col items-center justify-center'>
                <ConnectWalletButton price='10,000 Tally' />
            </div>
        </form>
    );
};

export default TallyWillsAdd;
