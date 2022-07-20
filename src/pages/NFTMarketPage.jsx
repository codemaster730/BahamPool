import bannerImg from '../assets/images/nftPageBanner.png';
import { Showcase } from '../containers';

const NFTMarketPage = () => {
    return (
        <main className='bg-primary-sidebar p-6 pt-24 '>
            {/* <section className='container mx-auto max-w-6xl'>
                <img src={bannerImg} alt='banner' className='w-full' />
            </section>

            <section className='mt-8 flex justify-center'>
                <div className='text-center'>
                    <h1 className='font-comfortaa text-5xl text-primary-brand_light'>
                        NFT Marketplace.
                    </h1>
                    <span className='block w-full text-right text-white'>
                        Coming Soon.
                    </span>
                </div>
            </section>

            <Showcase />

            <div className='mt-4 flex justify-center'>
                <p className='text-lg font-light text-white'>
                    (Investors must hold IBT Tokens or stake BUSD to
                    participate on the Launchpad).
                </p>
            </div> */}

            <div className='my-20 mx-auto max-w-5xl space-y-14'>
                <h2 className='text-center font-comfortaa text-3xl text-white md:text-4xl'>
                    Are you looking for investment in a project? Or do you have
                    an asset to trade as a{' '}

                </h2>

                {/* <div className='flex justify-center'>
                    <a
                        href='https://forms.gle/z1LRTLbesKuC7RYv8'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='rounded-full bg-[#3889a1] px-10 py-2 text-xl text-white transition duration-200 hover:-translate-y-2 hover:shadow-md hover:shadow-slate-200/20'
                        role='button'
                    >
                        Apply Here
                    </a>
                </div> */}
            </div>
        </main>
    );
};

export default NFTMarketPage;
