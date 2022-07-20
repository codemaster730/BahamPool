import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { RadioGroupComp, SettingsModal } from "../components";
import { LiquiditySection, SliderBanner } from "../containers";

// import liquidityGif from '../assets/images/gifs/tally-ho_MOD.gif';
import bahamdesign from "../assets/images/Entregable - BahamPool-02.png";
import bnbcoin from "../assets/images/Logo design/bnbcoin.png";
import stacking from "../assets/images/Logo design/stacking.png";
import product from "../assets/images/Logo design/productor.png";
import roadmap from "../assets/images/Logo design/roadmap.png";
import future from "../assets/images/Logo design/future.png";
import trading from "../assets/images/Logo design/trading.png";
const TechnologyIBTPage = () => {
  const types = [
    {
      name: "BecauseIBT",
      value: "pool",
    },
  ];
  const navigate = useNavigate();
  const { coin } = useParams();

  const [type, setType] = useState(types[0].value);
  const [modalOpen, setModalOpen] = useState(false);

  const setTypeandNavigate = (type) => {
    setType(type);
    navigate("/liquidity");
  };

  const openSettingsModal = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    if (!coin) {
      setType("pool");
    }
  }, [coin]);

  return (
    <main>
      <section className=" flex-col items-center justify-center bg-primary-sidebar px-4 pt-20 pb-8">
        <div
          style={{
            display: "flex",
            justifyConetent: "center",
            alignItem: "center",
          }}
        >
          <div>
            <img
              
              src={bahamdesign}
              alt="logo img"
              className="mb-8 w-full max-w-lg flex-1"
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <h1 className="mb-2 whitespace-nowrap text-center text-2xl font-bold text-white md:text-[40px]">
              <br />
              <br />
              <br />
              <br />
              Technology IBT
            </h1>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItem: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: 200,
                marginBottom: 50,
              }}
            >
              <img src={bnbcoin} alt="logo img" width={220} />
            </div>

            <div>
              <h3 className="pb-5 text-center text-base font-light text-white">
                BLOCKCHAIN BNB Smart Chain <br />
                ofrece un alto nivel de seguridad, transacciones rápidas y bajas
                comisiones
              </h3>
            </div>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: 200,
                marginBottom: 50,
              }}
            >
              <img src={stacking} alt="logo img" width={200} />
            </div>

            <div>
              <h3 className="pb-5 text-center text-base font-light text-white">
                STAKING de hasta un 25% al mes <br /> con mecanismos
                deflacionarios que protegen el token contra la hiper emisión
              </h3>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItem: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: 200,
                marginBottom: 50,
              }}
            >
              <img src={product} alt="logo img" width={220} />
            </div>

            <div>
              <h3 className="pb-5 text-center text-base font-light text-white">
                PRODUCTOS en desarrollo junto con el universo GameFi
              </h3>
            </div>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: 200,
                marginBottom: 50,
              }}
            >
              <img src={roadmap} alt="logo img" width={200} />
            </div>

            <div>
              <h3 className="pb-5 text-center text-base font-light text-white">
                Hoja de ruta diseñada y centrada en planes a largo plazo
              </h3>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItem: "center",
          }}
        >
          <div>
            <div className="pb-5">
              <img src={trading} alt="logo design" style={{width:350, height: 200}}/>
            </div>
            <div className="pb-5 text-center text-base font-light text-white">
              COMERCIO SIMPLE.. Trading de tokens, acceso a<br /> intercambios
              globales
            </div>
          </div>

          <div>
            <div className="pb-5" style={{display: 'flex', justifyContent: 'center'}}>
              <img src={future} alt="logo design" style={{ width: 350, height: 200}}/>
            </div>
            <div className="pb-5 text-center text-base font-light text-white">
              EL FUTURO DE IBT no se trata de solo hacer staking, el <br />
              equipo de IBT está trabajando para mejorar su producto <br />
              especialmente en el creciente sector de GameFi.
            </div>
          </div>
        </div>

        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div><img src={bnbcoin} alt="logo img" width={200} /></div>

          <div><img src={stacking} alt="logo img" width={170} /></div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <h3 className="pb-5 text-center text-base font-light text-white">
          <br/>   BLOCKCHAIN BNB Smart Chain <br/>ofrece un alto nivel de seguridad,
            transacciones rápidas y <br/> bajas comisiones
          </h3>

          <h3 className="pb-5 text-center text-base font-light text-white">
            <br /> STAKING de hasta un 25% al mes <br/> con mecanismos deflacionarios
            que protegen el token contra <br/> la hiper emisión
          </h3>
        </div> */}

        <br />

        {/* <div className='mb-4 flex flex-col text-center text-white'>
                    <a
                        href='https://docs.tally.org/education-hub/how-to-earn-on-tally-farms#:~:text=for%20this%20guide.-,Provide%20Liquidity%2C%20Stake%20LP%20tokens%20%26%20Earn%20BSW,-As%20you%20noticed'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='font-semibold text-primary-brand transition-colors hover:text-primary-brand/80'
                    >
                        Learn how to add liquidity
                    </a>
                </div> */}

        {/* <RadioGroupComp
                    type={type}
                    setType={setTypeandNavigate}
                    types={types}
                />

                {type === 'pool' && !coin && (
                    <LiquiditySection
                        openSettingsModal={openSettingsModal}
                        setType={setType}
                    />
                )} */}
        <Outlet />
      </section>

      <SliderBanner />

      <SettingsModal open={modalOpen} setOpen={setModalOpen} />
    </main>
  );
};

export default TechnologyIBTPage;
