import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ClaimCard, RadioGroupComp, SettingsModal } from "../components";
import { SliderBanner, SwapSection } from "../containers";

import exchangeGif from "../assets/images/gifs/Tally-ho_Exchange.gif";

const ExchangePage = () => {
  const types = [
    {
      name: "Exchange",
      value: "swap",
    },
  ];
  const navigate = useNavigate();
  const { coin } = useParams();

  const [type, setType] = useState(types[0].value);
  const [modalOpen, setModalOpen] = useState(false);

  const setTypeandNavigate = (type) => {
    setType(type);
    navigate("/swap");
  };

  const openSettingsModal = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    if (!coin) {
      setType("swap");
    }
  }, [coin]);

  return (
    <main>
      <section className="flex min-h-screen flex-col items-center justify-center bg-intro_bg px-4 pt-40 pb-8">
        <div className="flex w-full flex-col justify-center overflow-hidden xl:flex-row">
          <div className="flex flex-1 flex-col items-center">
            <div>
              <h1 className="mb-2 whitespace-nowrap text-center  text-3xl font-bold text-white md:text-[40px]">
                PancakeSwap
              </h1>
              <br />
              <h3 className="pb-5 text-center text-base font-light text-white">
              Una de las plataformas descentralizadas más grandes del mundo para el comercio de criptomonedas basada en BSC.
              </h3>
              <br />
              <div className="flex items-center justify-center">
                <button className="flex h-12 cursor-pointer items-center justify-center rounded-3xl bg-primary-brand_light px-6 text-xl font-black text-black transition-opacity duration-200 hover:opacity-80">
                  <a href='https://pancakeswap.finance/swap?outputCurrency=0x7dacc2327528a99aa1de0c1f757539a9a2380c04'>PancakeSwap</a>
                </button>
              </div>
              <br />
              <br />
              <h1 className="mb-2 whitespace-nowrap text-center  text-3xl font-bold text-white md:text-[40px]">
                Swap Tokens
              </h1>
              <br />
            </div>

            {/* {type === 'pool' && (
                            <div className='mb-4 flex flex-col text-center text-white'>
                                <h3 className=' text-base font-light'>
                                    Earn high yields from transaction fees.
                                </h3>
                                <a
                                    href='https://docs.tally.org/education-hub/how-to-earn-on-tally-farms#:~:text=for%20this%20guide.-,Provide%20Liquidity%2C%20Stake%20LP%20tokens%20%26%20Earn%20BSW,-As%20you%20noticed'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-semibold text-primary-brand transition-colors hover:text-primary-brand/80'
                                >
                                    Learn how to add liquidity
                                </a>
                            </div>
                        )} */}
            <RadioGroupComp
              type={type}
              setType={setTypeandNavigate}
              types={types}
            />
            <SwapSection openSettingsModal={openSettingsModal} />
            {/* {type === 'pool' && !coin && (
                            <LiquiditySection
                                openSettingsModal={openSettingsModal}
                                setType={setType}
                            />
                        )} */}
            <Outlet />
          </div>

          <div className="relative mt-8 flex items-center justify-center xl:mt-0 xl:items-end xl:justify-end">
            <ClaimCard />
          </div>
        </div>
      </section>

      <SliderBanner />

      <SettingsModal open={modalOpen} setOpen={setModalOpen} />
    </main>
  );
};

export default ExchangePage;
