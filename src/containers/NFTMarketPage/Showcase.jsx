import { PlusIcon } from '@heroicons/react/solid';
import { cardsData } from '../../assets/data/nftmarketplaceData';
import card1 from '../../assets/images/nftMarketplace/card1.png';
import card2 from '../../assets/images/nftMarketplace/card2.png';
import card3 from '../../assets/images/nftMarketplace/card3.png';
import sharehand from '../../assets/images/nftMarketplace/shareHand.png';
import { MarketPageCard } from '../../components';

const Showcase = () => {
    return (
        <div className='bg-elipseBg bg-[length:125%] bg-bottom bg-no-repeat'>
            <div className='container mx-auto mt-20 max-w-6xl'>
                <div className='flex flex-col justify-center text-white md:flex-row lg:-space-x-4 xl:-space-x-6'>
                    <figure className='relative flex flex-col items-center'>
                        <img
                            src={card1}
                            alt='card1'
                            className='w-60 sm:w-full lg:max-w-[15rem] xl:max-w-xs'
                        />
                        <figcaption className='absolute hidden -rotate-12 md:block lg:-bottom-1 lg:right-[12%] xl:bottom-10 xl:right-[20%]'>
                            Property
                        </figcaption>
                    </figure>
                    <figure className='relative flex flex-col items-center md:-translate-y-8'>
                        <img
                            src={card2}
                            alt='card2'
                            className='z-10 w-60 sm:w-full lg:max-w-[12rem] xl:max-w-[18rem]'
                        />
                        <figcaption className='hidden text-sm md:block xl:text-base'>
                            Back film / media projects.
                        </figcaption>
                    </figure>
                    <figure className='relative flex flex-col items-center'>
                        <img
                            src={card3}
                            alt='card3'
                            className='w-60 sm:w-full lg:max-w-[15rem] xl:max-w-xs'
                        />
                        <figcaption className='absolute hidden rotate-12 text-sm md:block lg:left-[5%] lg:-bottom-1 xl:left-[15%] xl:bottom-8 xl:text-base'>
                            Business investments.
                        </figcaption>
                    </figure>
                </div>

                <h2 className='mx-auto mt-10 max-w-4xl text-center text-white'>
                    Traded as shares, IBT NFTs provide more ways for you to
                    earn back better. Own a share of an asset and earn
                    dividends, capital gains or both!
                </h2>

                <div className='mx-auto my-8 flex justify-center'>
                    <img
                        src={sharehand}
                        alt='sharehand'
                        className='w-36 sm:w-32 lg:w-36 xl:w-44'
                    />
                </div>

                <div className='flex w-full items-center justify-center text-white'>
                    <PlusIcon className='h-10 w-10 ' />
                    <h3 className='text-primary-brand_light lg:text-3xl xl:text-4xl'>
                        Trade ART and Mint your music onto the blockchain!
                    </h3>
                </div>

                <div className='my-10 flex flex-col items-center'>
                    <h2 className='font-comfortaa text-3xl text-white sm:text-4xl md:text-5xl'>
                        <span className='font-comfortaa font-semibold text-primary-brand_light'>
                            IBT
                        </span>
                        NFT Launchpad.
                    </h2>
                    <p className='text-lg text-white'>
                        The presale exclusive area before IBT NFTs enter the
                        marketplace.
                    </p>
                </div>

                {/* <div className='grid grid-cols-2 place-items-center justify-center text-lg font-semibold text-white'>
                    <span>Tally Token Holders.</span>
                    <span>Non-Tally Token Holders.</span>
                </div> */}

                {/* <div className='mx-auto mt-4 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
                    {cardsData.map(item => (
                        <MarketPageCard key={item.id} {...item} />
                    ))}
                </div> */}
                <div className='flex w-full flex-col items-center justify-center gap-4 lg:flex-row'>
                    <div className='flex flex-col items-center'>
                        <span className='text-center text-lg font-semibold text-white'>
                            IBT Token Holders
                        </span>

                        <div className='mt-4 flex flex-wrap justify-center gap-4'>
                            {cardsData.map(
                                item =>
                                    item.color === 'blue' && (
                                        <MarketPageCard
                                            key={item.id}
                                            {...item}
                                        />
                                    )
                            )}
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='text-center text-lg font-semibold text-white'>
                            Non-IBT Token Holders.
                        </span>

                        <div className='mt-4 flex flex-wrap justify-center gap-4'>
                            {cardsData.map(
                                item =>
                                    item.color === 'green' && (
                                        <MarketPageCard
                                            key={item.id}
                                            {...item}
                                        />
                                    )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;
