import { Outlet } from 'react-router-dom';
import { AnalyticsHeading } from '../containers';

const AnalyticsPageLayout = () => {
    return (
        <main className='bg-intro_bg'>
            <div className='container mx-auto mt-24 max-w-6xl'>
                <AnalyticsHeading />

                <section className='mt-8 px-6'>
                    <Outlet />
                </section>
            </div>
        </main>
    );
};

export default AnalyticsPageLayout;
