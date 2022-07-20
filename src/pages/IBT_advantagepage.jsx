import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { RadioGroupComp, SettingsModal } from "../components";
import { LiquiditySection, SliderBanner } from "../containers";

import liquidityGif from "../assets/images/gifs/tally-ho_MOD.gif";
import bahamdesign from "../assets/images/Entregable - BahamPool-02.png";

const IBT_advantagepage = () => {
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
      <section className=" flex-col items-center justify-center bg-intro_bg px-4 pt-20 pb-8">
        <div>
          <img
            src={bahamdesign}
            alt="logo img"
            className="mb-8 w-full max-w-lg flex-1"
          />
        </div>

        <h1 className="mb-2 whitespace-nowrap text-center text-2xl font-bold text-white md:text-[40px]">
          VENTAJA BSC
          <br />
          <br />
        </h1>

        <h3 className="pb-5 text-center text-base font-light text-white">
          BNB Smart Chain (BSC) es parte del enorme ecosistema de BNB Chain.
          Esta red es conocida en todo el mundo, es <br />
          completamente segura y se utiliza para crear múltiples tokens y
          proyectos. La infraestructura de BSC está bien <br />
          desarrollada y es tecnológicamente avanzada, protege los tokens de los
          usuarios y abre grandes oportunidades para el
          <br />
          comercio y la expansión en los exchanges.
          <br />
        </h3>
        <br />

        <h1 className="mb-2 whitespace-nowrap text-center text-2xl font-bold text-white md:text-[40px]">
          Código Fuente Abierto
          <br />
          <br />
        </h1>

        <h3 className="pb-5 text-center text-base font-light text-white">
          El código fuente de IBT es abierto y accesible para que todos lo
          revisen.
          <br />
          La transparencia es la clave de la seguridad y permite que cualquier
          usuario que entienda de TI pueda verificarla <br />
          personalmente. <br />
        </h3>
        <br />
        <h1 className="mb-2 whitespace-nowrap text-center text-2xl font-bold text-white md:text-[40px]">
          Smart Contract
          <br />
          <br />
        </h1>

        <h3 className="pb-5 text-center text-base font-light text-white">
          El smart contract de staking de IBT está terminado y no puede
          cambiarse.
          <br />
          Nadie, ni siquiera los desarrolladores, pueden detenerlo o cambiar los
          términos de staking durante 45 años. Se trata de <br />
          un sistema monumental que seguirá funcionando de principio a fin, lo
          que inspira gran confianza en la plataforma. <br />
        </h3>
        <br />
        <br />



        <h1 className="mb-2 whitespace-nowrap text-center text-2xl font-bold text-white md:text-[40px]">
        LOS TOKENS ESTÁN PROTEGIDOS
          <br />
          <br />
        </h1>

        <h3 className="pb-5 text-center text-base font-light text-white">
        BahamPool  no almacena ni recopila datos de los usuarios, los usuarios acceden a los tokens exclusivamente a través de sus <br />
        billeteras descentralizadas,  los depósitos y retiradas están disponibles en cualquier momento, el pool es solo un intermediario que<br />
        garantiza la operación de staking para los participantes.<br />
        <br />
        La seguridad está garantizada por la blockchain de BSC como por el smart contract de IBT. Un ataque de piratas informáticos o una<br />
        brecha de seguridad son simplemente imposibles. La única forma de acceder a los tokens es conocer los detalles de su billetera. <br />
        Entonces, al unirse a nuestro pool, siempre estará seguro de que sus tokens están seguros.<br />
          
        </h3>
        <br />
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

export default IBT_advantagepage;
