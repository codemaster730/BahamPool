import { Outlet } from "react-router-dom";
import logobaham3 from "../assets/images/BahamPool-03.png";
import logobaham5 from "../assets/images/BahamPool-05.png";

const SupportPage = () => {
  return (
    <main className="min-h-screen bg-intro_bg pt-20">
      <div className="d-flex flex h-full flex-row justify-center">
        <div className="mb-6">
          <img
            style={{ width: 300, height: 300 }}
            src={logobaham3}
            alt="logo5"
            className="w-20"
          />
        </div>

        <h1 className="text-1xl mb-3 whitespace-nowrap text-center font-bold text-white md:text-[37px]">
        <br />
        <br />
        <br />
          BAHAMPOOL CONT Y SOPORTE TÉCNICO Y SEGURIDAD
        </h1>
      </div>

      <div className="container mx-auto my-10 h-full max-w-6xl">
        <div className="d-flex flex h-full flex-row items-center justify-center">
          <div>
            <h1 className="mb-2 whitespace-nowrap text-center text-2xl font-bold text-white md:text-[30px]">
              CONTACTENOS
              <br />
              <br />
            </h1>

            <div className="pb-5 text-center text-base font-light text-white">
              Cualquier pregunta o aclaración no dude en contactarnos para
              ayudarle a comprender cómo funciona el pool.
              <br /> Nuestro servicio de soporte técnico responderá a su
              solicitud en un plazo de 24 a 72 horas. .
            </div>

            <div className="pb-5 text-center text-base font-light text-white">
              Soporte técnico: <a href='mailto:support@bahampool.site'>support@bahampool.site</a>
            </div>

            <div></div>
          </div>

          <Outlet />
        </div>
      </div>

      <div className="container mx-auto my-10 h-full max-w-6xl">
        <div className="d-flex flex h-full flex-row items-center justify-center">
          {/* <div className="mb-6">
            <img
              style={{ width: 350, height: 230 }}
              src={logobaham4}
              alt="logo5"
              className="w-20"
            />
          </div> */}

          <div>
            <h1 className="mb-2 whitespace-nowrap text-center text-2xl font-bold text-white md:text-[30px]">
              IBT AVAILABLE TO EVERYONE!!
              <br />
              <br />
            </h1>

            <div className="pb-5  text-base font-light text-white">
              -High percentage: up to 25% per month
              <br />
              -Tokemonic without compound interest
              <br />
              -Deflationary mechanisms and the burning of the "body"
              <br />
              -Real-time accumulations, withdrawal at any time
              <br />
              -Period of validity: 45 years
              <br />
            </div>
          </div>

          <Outlet />
        </div>
      </div>

      <div className="container mx-auto my-10 h-full max-w-6xl">
        <div className="d-flex flex h-full flex-row items-center justify-center">
          <div>
            <div>
              <h1 className="mb-2 whitespace-nowrap text-center text-2xl font-bold text-white md:text-[30px]">
                STAKING IBT
                <br />
                <br />
              </h1>

              <div className="pb-5  text-base font-light text-white">
                Para realizar staking con IBT, Simplemente compre los tokens,
                luego desde su billetera depositelos en el pool,
                <br />
                inmediatamente inicia ganando hasta un 25% al mes por el
                momento, ya que cada año cumplido va bajando el porcentaje
                <br />
                de rendimiento.
                <br />
                <br />
                Cualquier persona puede unirse y lograr ingreso extra con IBT.La
                tokenómica deflacionaria está diseñada para
                <br />
                garantizar que el token no se deprecie rápidamente y siempre
                genere ganancias, incluso con un alto porcentaje de
                <br />
                staking. <br />
                <br />
                Cuando deposita tokens al staking, el depósito inicial deja de
                estar disponible, (se quema) y se generan nuevos tokens <br />
                durante un año sin interés compuesto. <br />
              </div>
            </div>

            <div></div>
          </div>

          <Outlet />
        </div>
      </div>

      <div className="container mx-auto my-10 h-full max-w-6xl">
        <div className="d-flex flex h-full flex-row items-center justify-center">
          <div>
            <h1 className="mb-2 whitespace-nowrap text-center text-2xl font-bold text-white md:text-[30px]">
              PORCENTAJE DEL STAKING
              <br />
              <br />
            </h1>

            <div className="mb-6">
              <img
                style={{ width: 900, height: 300 }}
                src={logobaham5}
                alt="logo5"
                className="w-20"
              />
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default SupportPage;
