import bannerImg from "../assets/images/nftPageBanner.png";
import { Showcase } from "../containers";
import binancechain from "../assets/images/binancechain.jpg";

const BuySellPage = () => {
  const copyLink = () => {
    let val = document.getElementById("address").innerHTML;
    navigator.clipboard.writeText(val);
  };
  return (
    <main className="bg-intro_bg p-6 pt-24">
      <div className="my-20 mx-auto max-w-5xl space-y-14">
        <h2 className="text-center font-comfortaa text-3xl text-white md:text-4xl">
          DONDE SE PUEDE COMPRAR/VENDER IBT
        </h2>
        <div className="pb-5 text-center text-base font-light text-white">
        Para intercambiar IBT en DEX, utilice la dirección de contrato de la
          red BSC:
          <br />
          <br />
          <a
            className="hover:underline"
            id="address"
            href="https://bscscan.com/address/0x9d0c7A4560628cf41e8C5746696662279A43448a"
          >
            0x9d0c7A4560628cf41e8C5746696662279A43448a
          </a>
          <span
            className="ml-2 -mt-1 inline-block h-6 w-6 cursor-pointer rounded-md bg-[#2DA9E9A6] text-center align-middle leading-6 text-white"
            onClick={copyLink}
          >
            <svg
              viewBox="0 0 15 17"
              className="svg-icon inline-block h-3 w-3 fill-transparent stroke-current align-middle text-inherit"
            >
              <path
                pid="0"
                d="M4.25 4.333V11c0 .442.171.866.476 1.178.305.313.718.489 1.149.489h4.875m-6.5-8.334V2.667c0-.442.171-.866.476-1.179A1.605 1.605 0 015.875 1h3.726c.216 0 .422.088.575.244l3.586 3.679a.844.844 0 01.238.589V11c0 .442-.171.866-.476 1.178a1.604 1.604 0 01-1.149.489H10.75m-6.5-8.334H2.625c-.431 0-.844.176-1.149.488A1.689 1.689 0 001 6v8.333c0 .442.171.866.476 1.179.305.312.718.488 1.149.488h6.5c.431 0 .844-.176 1.149-.488.305-.313.476-.737.476-1.179v-1.666"
                _stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <img
            src={binancechain}
            alt="binance"
            className="mb-8 w-full max-w-lg flex-1"
          />
        </div>
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

export default BuySellPage;
