import Slider from 'react-slick';
import { BenefitItem } from '../../components';

import animImg from '../../assets/images/media/anim.png';
import lowfeesImg from '../../assets/images/media/lowfees.png';
import logoImg from '../../assets/images/logo2.png';
import glassImg from '../../assets/images/media/glass.png';

const FeaturesSection = () => {
    return (
        <section className='mx-auto max-w-6xl bg-primary-background px-4 pt-6'>
            <h2 className='mb-8 text-center text-2xl font-semibold text-primary-darkText'>
                Our Exchange Features to Look Forward to
            </h2>

            <div className='my-6'>
                <Slider
                    infinite={true}
                    autoplay
                    arrows={false}
                    slidesToScroll={1}
                    speed={300}
                    swipe
                    slidesToShow={4}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                    ]}
                    swipeToSlide={true}
                    draggable
                    className='mx-auto w-3/4 xl:w-11/12'
                >
                    <BenefitItem img={glassImg} title='Blockchains in 1 place'>
                        Whether Bep20, Erc20, Matic ERC20 or Cardano ERC20.
                        <br />
                        All can be traded on IBT Exchange.
                        <br /> Starting with Bep20 swaps is our first roll out
                    </BenefitItem>
                    <BenefitItem img={animImg} title='Monthly Raffle'>
                        Participate in the regular IBT Raffle and win prizes
                        or BUSD.
                        <br />
                        5% Goes to charity
                        <br />
                        Coming Soon to this platform
                        <br />
                        <strong>Currently held on Telegram</strong>
                    </BenefitItem>
                    <BenefitItem img={lowfeesImg} title='Low Exchange Fees'>
                        Trade your crypto without concerns about fees.
                        <br />
                        Fees held low serving IBT Users
                    </BenefitItem>
                    <BenefitItem img={logoImg} title='Get $TallyBACK'>
                        Whether trading crypto or
                        <br />
                        swapping stablecoins <br /> Receive $IBT BACK on all
                        transactions.
                    </BenefitItem>
                </Slider>
            </div>
        </section>
    );
};

export default FeaturesSection;
