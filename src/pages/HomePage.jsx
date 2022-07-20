import {
    FarmSection,
    FeaturesSection,
    InfoSection,
    Intro,
} from '../containers';

const HomePage = () => {
    return (
        <main>
            <Intro />
            <section className='bg-primary-background'>
                <FarmSection />
                <FeaturesSection />
                <InfoSection />
            </section>
        </main>
    );
};

export default HomePage;
