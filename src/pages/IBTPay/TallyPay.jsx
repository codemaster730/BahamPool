import { Outlet } from 'react-router-dom';
import tallyPayLogo from '../../assets/images/tally-pay/logo-bg-removed.png';

const TallyPay = () => {
    return (
        <main className='min-h-screen bg-primary-dark pt-20'>
            <div className='container mx-auto my-10 h-full max-w-6xl'>
                <div className='flex h-full flex-col items-center justify-center'>
                    {/* <div className='mb-6'>
                        <img
                            src={tallyPayLogo}
                            alt='logo of tally pay'
                            className='w-20'
                        />
                    </div> */}

                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default TallyPay;
