import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage"));
const LiquidityPage = lazy(() => import("./LiquidityPage"));
const ExchangePage = lazy(() => import("./ExchangePage"));
const PoolsPage = lazy(() => import("./PoolsPage"));
const FarmsPage = lazy(() => import("./FarmsPage"));
const TallyPay = lazy(() => import("./IBTPay/TallyPay"));
const TallyPayIndex = lazy(() => import("./IBTPay/TallyPayIndex"));
const TallyWills = lazy(() => import("./IBTPay/TallyWills"));
const LivingTrust = lazy(() => import("./IBTPay/LivingTrust"));
const MyDefiAccount = lazy(() => import("./IBTPay/MyDefiAccount"));
const TempLock = lazy(() => import("./IBTPay/TempLock"));
const NFTmarketPage = lazy(() => import("./NFTMarketPage"));
const StakeLaunchPadPage = lazy(() => import("./StakeLaunchpadPage"));
const NFTearnPage = lazy(() => import("./NFTearnPage"));
const TallyCentralisedPage = lazy(() => import("./TallyCetralisedPage"));
const PoolsStakeType = lazy(() => import("./PoolsStakeType"));
const TokenCheckerPage = lazy(() => import("./TokenCheckerPage"));
const AnalyticsPageLayout = lazy(() => import("./AnalyticsPageLayout"));
const AnalyticsOverviewPage = lazy(() => import("./AnalyticsOverviewPage"));
const AnalyticsFilterPage = lazy(() => import("./AnalyticsFilterPage"));
const WhatWeArePage = lazy(() => import("./WhatWeArePage"));
const WhatIsIBTPage = lazy(()=>import("./WhatIsIBTPage"));
const TechnologyIBTPage = lazy(()=> import("./TechnologyIBTPage"));
const BecauseIBTPage = lazy(() =>import("./BecauseIBTPage"));
const BuySellPage = lazy(() =>import("./BuySellPage"));
const SupportPage = lazy(() =>import("./SupportPage"));
const IBT_advantagepage = lazy(() =>import("./IBT_advantagepage"));

export {
    HomePage,
    LiquidityPage,
    ExchangePage,
    PoolsPage,
    FarmsPage,
    TallyPay,
    TallyPayIndex,
    TallyWills,
    LivingTrust,
    TempLock,
    MyDefiAccount,
    NFTmarketPage,
    StakeLaunchPadPage,
    NFTearnPage,
    TallyCentralisedPage,
    PoolsStakeType,
    TokenCheckerPage,
    AnalyticsPageLayout,
    AnalyticsOverviewPage,
    AnalyticsFilterPage,
    WhatWeArePage,
    WhatIsIBTPage,
    TechnologyIBTPage,
    BecauseIBTPage,
    BuySellPage,
    SupportPage,
    IBT_advantagepage
};
