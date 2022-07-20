import { HomeIcon } from "@heroicons/react/solid";

import { FaExchangeAlt } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
// import { GiPayMoney } from "react-icons/gi";

import scamImg from '../images/scam.png';
import raffleImg from '../images/raffle.png';
import ethImg from '../images/eth.png';
// import polygonImg from '../images/polygon.png';
import cardanoImg from '../images/cardano.png';
import chartsImg from '../images/chats.png';
import analyImg from '../images/analy.png';
import tpIcon from '../images/tally-pay/logo-bg-removed.png'

import solanaImg from '../images/tokens/solana-removebg.png';



function LiquidityIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" fill="#fff" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 10.5a8.5 8.5 0 01-12.14 7.683 5 5 0 00-4.727-6.181A8.5 8.5 0 1121 10.5zM13.375 16v-1.056C15.1 14.622 16 13.361 16 12.107c0-1.09-.455-2.92-3.5-2.92-1.75 0-1.75-.609-1.75-.973 0-.47.613-.973 1.75-.973 1.037 0 1.213.621 1.225.99l.875-.017h.875c0-.998-.583-2.402-2.1-2.801v-1.08h-1.75v1.045C9.9 5.7 9 6.96 9 8.214c0 1.09.455 2.92 3.5 2.92 1.75 0 1.75.658 1.75.973 0 .404-.543.973-1.75.973-1.61 0-1.74-.834-1.75-.973H9c0 .894.578 2.485 2.625 2.842V16h1.75z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 17a4 4 0 11-8 0 4 4 0 018 0zm-4-3a1 1 0 011 1v1h1a1 1 0 110 2H5v1a1 1 0 11-2 0v-1H2a1 1 0 110-2h1v-1a1 1 0 011-1z"
      />
    </svg>
  );
}

function FarmIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="#fff" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.536 18.487a1.275 1.275 0 100-2.551 1.275 1.275 0 000 2.55zm0 1.381a2.657 2.657 0 100-5.314 2.657 2.657 0 000 5.314zM6.314 17.743a2.126 2.126 0 100-4.251 2.126 2.126 0 000 4.25zm0 2.125a4.251 4.251 0 100-8.502 4.251 4.251 0 000 8.502z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.21 7.495a.85.85 0 01.781-.359l4.171.417a1.594 1.594 0 011.436 1.587v4.1a4.105 4.105 0 00-4.958 2.908h-2.566a5.7 5.7 0 00-3.104-5.622v-.118l2.001-.444c.39-.087.732-.316.96-.642l1.28-1.827zm3.9 8.312l.888-.55a2.052 2.052 0 00-.887.55z"
      />
      <path d="M3.125 8.71c0-.294.238-.71.532-.71h2.657c.587 0 1.063.653 1.063 1.24v.532h-3.72a.531.531 0 01-.532-.532v-.53zM9.58 7.328L12.72 4l.695.656-3.14 3.328-.695-.656z" />
      <path d="M12.166 5.98l2.32 2.188-.657.695-2.32-2.188.657-.695z" />
    </svg>
  );
}

function NftMarketPlaceIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.006 9.107a1.15 1.15 0 100-2.3 1.15 1.15 0 000 2.3z" fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2h-.594c-6.082 0-6.082-4.304-6.082-4.981H10.66c-.024.073-.037.21-.054.391-.115 1.239-.425 4.59-6 4.59H4a2 2 0 01-2-2V4zm13.406 4.76v3.401s1.713 1.142 2 2.902c.044.273-.183.498-.46.498H7.066c-.276 0-.504-.225-.46-.498.291-1.759 2.023-2.891 2.023-2.891s-.023-1.378-.023-3.411c0-2.72 3.4-4.761 3.4-4.761s3.401 2.04 3.401 4.76zM6 3l.275 1.02a1 1 0 00.705.705L8 5l-1.02.275a1 1 0 00-.705.705L6 7l-.275-1.02a1 1 0 00-.705-.705L4 5l1.02-.275a1 1 0 00.705-.705L6 3zm12.5 4l.38 1.414a1 1 0 00.706.705L21 9.5l-1.414.38a1 1 0 00-.705.706L18.5 12l-.38-1.414a1 1 0 00-.706-.705L16 9.5l1.414-.38a1 1 0 00.705-.706L18.5 7z"
        fill="#fff"
      />
    </svg>
  );
}

function NFTEarnIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.995.127a.96.96 0 00-.95 0L7.525 4.41a.96.96 0 00-.485.834v8.541a.96.96 0 00.485.835l7.52 4.282a.96.96 0 00.95 0l7.52-4.282a.96.96 0 00.485-.835v-8.54a.96.96 0 00-.485-.835L15.995.127zm-6.12 8.634v2.924H8.779V6.978h.96l2.242 2.921V6.978h1.097v4.707h-.948l-2.25-2.924h-.003zm5.758 1.19v1.734h-1.097V6.978h3.319v.976h-2.222v1.08h1.907v.917h-1.907zm5.456-1.997v3.731h-1.09v-3.73H18.68v-.977h3.724v.976H21.09z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.595 10.563C2.384 10.989 0 12.565 0 14.445c0 2.208 3.287 3.996 7.34 3.996 1.162 0 2.26-.147 3.237-.409l-4.482-2.588a1 1 0 01-.5-.866v-4.015zm6.272 8.214c-1.247.533-2.819.85-4.528.85-4.042 0-7.32-1.768-7.339-3.966v1.564c0 2.207 3.285 3.996 7.34 3.996 2.433 0 4.59-.645 5.925-1.637l-1.398-.807zm2.18 1.259c-1.144 1.397-3.716 2.371-6.708 2.371C3.297 22.407.02 20.64 0 18.44v1.564C0 22.212 3.285 24 7.34 24c3.82 0 6.957-1.588 7.307-3.618l-.6-.346z"
      />
    </svg>
  );
}

function TallyCentralisedIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} color="text" xmlns="http://www.w3.org/2000/svg" className="menu-icon" height={24} {...props}>
      <path
        d="M14.454 8.25a4.838 4.838 0 00-1.088-3.055A3.44 3.44 0 0114.454 5c1.809 0 3.273 1.454 3.273 3.25s-1.464 3.25-3.273 3.25c-.351 0-.687-.073-1.006-.17a1.003 1.003 0 00-.082-.025 4.838 4.838 0 001.088-3.055zm1.359 4.168c1.12.756 1.914 1.78 1.914 3.145V18H21v-2.438c0-1.77-2.93-2.819-5.187-3.144zM9.545 5c1.809 0 3.273 1.454 3.273 3.25s-1.464 3.25-3.273 3.25c-1.808 0-3.272-1.454-3.272-3.25S7.737 5 9.545 5zm0 7.313c2.185 0 6.546 1.088 6.546 3.25V18H3v-2.438c0-2.16 4.36-3.25 6.545-3.25z"
        fill="#FFF"
      />
    </svg>
  );
}

export default TallyCentralisedIcon;

export const navigation = [
  { name: "Hogar", href: "", icon: HomeIcon, badge: "" },
 
  //{ name: "Liquidity", href: "liquidity", icon: LiquidityIcon, badge: "" },
  { name: "Intercambio", href: "swap", icon: FaExchangeAlt, badge: "" },
  { name: "Soporte y Seguridad", href: "Support", icon: NftMarketPlaceIcon, badge: "" },
  // { name: "Farms", href: "farms", icon: FarmIcon, badge: "" },
  // { name: "Security", href: "tally-pay", icon: NftMarketPlaceIcon,  badge: "" },
  { name: "Ventaja IBT", href: "IBTadvantage", icon: BiRocket, badge: "" },
  // { name: "Mercado NFT", href: "nftmarket", icon: NFTEarnIcon, badge: "soon" },
  { name: "Compra venta", href: "BuySell", icon: null, badge: "", image: raffleImg },
  //{ name: "NFT Earn", href: "nftearn", icon: NFTEarnIcon, badge: "soon" },
  { name: "Comprobador de fichas", href: "tokenchecker", icon: null, badge: "soon", image: scamImg },
  // { name: "Eth", href: "tally_centralise", icon: null, badge: "soon", image: ethImg },
  // { name: "Solana", href: "tally_centralise", icon: null, badge: "soon", image: solanaImg },
  // { name: "Cardano", href: "tally_centralise", icon: null, badge: "soon", image: cardanoImg },
  // { name: "Bsc Charts", href: "tally_centralise", icon: null, badge: "soon", image: chartsImg },
  { name: "Analítica", href: "analytics", icon: null, badge: "", image: analyImg },
  
];

export const moreNavigation = [
  { name: 'Audit (PDF)', href: 'pdf/TallyAudit.pdf' },
  { name: 'News', href: 'hc/en-us' },
  { name: "About Tally", href: 'bsw_token' },
  { name: "Docs", href: '/' },
  { name: "Voting", href: 'tally_centralise' },
  { name: "Voting2", href: '/' },
]

export const aboutUs = [
  {name: '¿Qué es IBT?', href: '/whatisIBT'},
  {name: 'Tecnología IBT', href: '/Technology'},
  {name: 'Porque IBT', href:'/Because'},
  {name: 'Que somos', href: '/whatweare'}
]