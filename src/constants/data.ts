import iggLordsMobile1 from 'assets/cases/igg-lords-mobile-1.jpg';
import iggLordsMobile2 from 'assets/cases/igg-lords-mobile-2.jpg';

import iggTimePrincess1 from 'assets/cases/igg-time-princess-1.jpg';
import iggTimePrincess2 from 'assets/cases/igg-time-princess-2.jpg';
import iggTimePrincess3 from 'assets/cases/igg-time-princess-3.jpg';
import iggTimePrincess4 from 'assets/cases/igg-time-princess-4.jpg';

import iggCosplay1 from 'assets/cases/igg-cosplay-1.jpg';
import iggCosplay2 from 'assets/cases/igg-cosplay-2.jpg';

import wildlifeZooba1 from 'assets/cases/wildlife-zooba-1.jpg';
import wildlifeZooba2 from 'assets/cases/wildlife-zooba-2.jpg';
import wildlifeZooba3 from 'assets/cases/wildlife-zooba-3.jpg';

import matchGroupAblo1 from 'assets/cases/match-group-ablo-1.jpg';
import matchGroupAblo2 from 'assets/cases/match-group-ablo-2.jpg';
import matchGroupAblo3 from 'assets/cases/match-group-ablo-3.jpg';
import matchGroupAblo4 from 'assets/cases/match-group-ablo-4.jpg';
import matchGroupAblo5 from 'assets/cases/match-group-ablo-5.jpg';
import matchGroupAblo6 from 'assets/cases/match-group-ablo-6.jpg';
import matchGroupAblo7 from 'assets/cases/match-group-ablo-7.jpg';
import matchGroupAblo8 from 'assets/cases/match-group-ablo-8.jpg';
import matchGroupAblo9 from 'assets/cases/match-group-ablo-9.jpg';
import matchGroupAblo10 from 'assets/cases/match-group-ablo-10.jpg';
import matchGroupAblo11 from 'assets/cases/match-group-ablo-11.jpg';

import masomoBasketball1 from 'assets/cases/masomo-basketball-1.jpg';

import tencentPubgMobileSong1 from 'assets/cases/tencent-pubg-mobile-song-1.jpg';

import tencentPubgProLeague1 from 'assets/cases/tencent-pubg-pro-league-1.jpg';
import tencentPubgProLeague2 from 'assets/cases/tencent-pubg-pro-league-2.jpg';
import tencentPubgProLeague3 from 'assets/cases/tencent-pubg-pro-league-3.jpg';

import tencentMobileLeagueOfLegends1 from 'assets/cases/tencent-mobile-league-of-legends-1.jpg';

import lordsMobileLogo from 'assets/lords-mobile-logo.png';
import pubgMobileLogo from 'assets/pubg-mobile-logo.png';
import basketballArenaLogo from 'assets/basketball-arena-logo.png';
import abloLogo from 'assets/ablo-logo.png';
import tennisClashLogo from 'assets/tennis-clash-logo.png';
import timePrincessLogo from 'assets/time-princess-logo.png';

export enum Companies {
    IGG = 'igg',
    WildlifeStudios = 'wildlife studios',
    MatchGroup = 'match group',
    Masomo = 'masomo',
    Nutaku = 'nutaku',
    OasisGames = 'oasis games',
    WildLife = 'wildlife studios',
    TencentGames = 'tencent games',
}

interface Tmp {
    id: number | string;
    companyName: Companies;
    title: string;
    addition: string;
    productLogo: string;
    cases: {
        id: number;
        link: string;
        description: string;
        imageSrc: string;
        height?: number;
        isShortView?: boolean;
    }[];
}

export const jData: Record<string, Tmp> = {
    lords_mobile: {
        id: 'lords_mobile',
        companyName: Companies.IGG,
        title: 'lords mobile',
        addition: '360° Campaign Development',
        productLogo: lordsMobileLogo,
        cases: [
            {
                id: 1,
                link: 'https://www.youtube.com/watch?v=pK_UM3VHraM',
                imageSrc: iggLordsMobile1,
                description: 'BRIGMAN / youtube',
            },
            {
                id: 2,
                link: 'https://www.youtube.com/watch?v=p_rI2lskBps&t=7s',
                imageSrc: iggLordsMobile2,
                description: 'ЛЁЛЯ ТАКСИ / youtube',
            },
        ],
    },
    time_princess: {
        id: 'time_princess',
        companyName: Companies.IGG,
        title: 'time princess',
        productLogo: timePrincessLogo,
        addition: '360° Campaign Development',
        cases: [
            {
                id: 1,
                link: 'https://youtu.be/fluUtob2Vb4?si=pC7lvEnAxt9fY6eP',
                imageSrc: iggTimePrincess1,
                description: 'Tilka Play / youtube',
            },
            {
                id: 2,
                link: 'https://youtu.be/DXcGCzN5Guo',
                imageSrc: iggTimePrincess2,
                description: 'Алиса Лисова / youtube',
            },
            {
                id: 3,
                link: 'https://www.youtube.com/watch?v=I4dyku1bGmM',
                imageSrc: iggTimePrincess3,
                description: 'eto liana / youtube',
            },
            {
                id: 4,
                link: 'https://www.youtube.com/watch?v=Y91xUOw9N94',
                imageSrc: iggTimePrincess4,
                description: 'Daria Graph / youtube',
            },
        ],
    },
    time_princess_cosplay_instagram: {
        id: 'time_princess_cosplay_instagram',
        companyName: Companies.IGG,
        title: 'Time Princess. Cosplay. Instagram',
        addition: '360° Campaign Development',
        productLogo: timePrincessLogo,
        cases: [
            {
                id: 1,
                link: 'https://www.instagram.com/p/CNKjXKrMpui/?igshid=ssvgs12nsnhz',
                imageSrc: iggCosplay1,
                height: 417,
                description: 'burning.princess / instagram',
            },
            {
                id: 2,
                link: 'https://www.instagram.com/p/CNKi9cmgKmZ/?img_index=1',
                imageSrc: iggCosplay2,
                height: 417,
                description: '_raspytina_ / instagram',
            },
        ],
    },
    'zooba_&_tennis_clash': {
        id: 'zooba_&_tennis_clash',
        companyName: Companies.WildLife,
        addition: '360° Campaign Development',
        title: 'Zooba & Tennis Clash',
        productLogo: tennisClashLogo,
        cases: [
            {
                id: 1,
                link: 'https://www.youtube.com/watch?v=0xj6QJFzi2g&t=94s',
                imageSrc: wildlifeZooba1,
                description: 'LINE / youtube',
            },
            {
                id: 2,
                link: 'https://www.youtube.com/watch?v=cNDxBWToyxQ',
                imageSrc: wildlifeZooba2,
                description: 'Fan PDA / youtube',
            },
            {
                id: 3,
                link: 'https://www.youtube.com/watch?v=lRMgKuV3MrE',
                imageSrc: wildlifeZooba3,
                description: 'КиноИндустрия / youtube',
            },
        ],
    },
    ablo: {
        id: 'ablo',
        companyName: Companies.MatchGroup,
        title: 'Ablo',
        addition: '360° Campaign Development',
        productLogo: abloLogo,
        cases: [
            {
                id: 1,
                link: '',
                imageSrc: matchGroupAblo1,
                isShortView: true,
                description: 'aveme lissa / ig story',
            },
            {
                id: 2,
                link: '',
                imageSrc: matchGroupAblo2,
                isShortView: true,
                description: 'aveme lissa / ig story',
            },
            {
                id: 3,
                link: '',
                imageSrc: matchGroupAblo3,
                isShortView: true,
                description: 'Dima Ermuzevich / ig story',
            },
            {
                id: 4,
                link: '',
                imageSrc: matchGroupAblo4,
                isShortView: true,
                description: 'glossmix / IG story',
            },
            {
                id: 5,
                link: '',
                imageSrc: matchGroupAblo5,
                isShortView: true,
                description: 'Kostiakina Yelyzaveta / IG story',
            },
            {
                id: 6,
                link: '',
                imageSrc: matchGroupAblo6,
                isShortView: true,
                description: 'Maniloun / ig story',
            },
            {
                id: 7,
                link: '',
                imageSrc: matchGroupAblo7,
                isShortView: true,
                description: 'Nastya Molkova / IG story',
            },
            {
                id: 8,
                link: '',
                imageSrc: matchGroupAblo8,
                isShortView: true,
                description: 'mar.maries / IG story',
            },
            {
                id: 9,
                link: '',
                imageSrc: matchGroupAblo9,
                isShortView: true,
                description: 'dgraph / ig story',
            },
            {
                id: 10,
                link: '',
                imageSrc: matchGroupAblo10,
                isShortView: true,
                description: 'Evelinushka / ig story',
            },
            {
                id: 11,
                link: 'https://youtu.be/CiaE8kVSL_0?si=CJTy3mwPAYg2qbkj&t=229',
                imageSrc: matchGroupAblo11,
                description: 'mar.maries / youtube',
            },
        ],
    },
    basketball_arena: {
        id: 'basketball_arena',
        companyName: Companies.Masomo,
        title: 'basketball arena',
        addition: '360° Campaign Development',
        productLogo: basketballArenaLogo,
        cases: [
            {
                id: 1,
                link: 'https://youtu.be/lmcF7JS4_R4?si=ZN54TUWDt73bd8G1&t=200',
                imageSrc: masomoBasketball1,
                description: 'Lesha Maisak / youtube',
            },
        ],
    },
    'pubg_mobile_(song)': {
        id: 'pubg_mobile_(song)',
        companyName: Companies.TencentGames,
        title: 'pubg mobile (song)',
        addition: '360° Campaign Development',
        productLogo: pubgMobileLogo,
        cases: [
            {
                id: 1,
                link: 'https://www.youtube.com/watch?v=mxyu5lIukyM',
                imageSrc: tencentPubgMobileSong1,
                description: 'PUBG MOBILE СНГ / youtube',
            },
        ],
    },
    pubg_mobile_pro_league: {
        id: 'pubg_mobile_pro_league',
        companyName: Companies.TencentGames,
        addition: '360° Campaign Development',
        productLogo: pubgMobileLogo,
        title: 'pubg mobile. pro league europe championship season 1',
        cases: [
            {
                id: 1,
                link: 'https://www.tiktok.com/@kikakiim/video/7030026999682927873',
                imageSrc: tencentPubgProLeague1,
                isShortView: true,
                description: 'Kika Kim / tiktok',
            },
            {
                id: 2,
                link: 'https://vm.tiktok.com/ZGJnnQhKs/',
                imageSrc: tencentPubgProLeague2,
                isShortView: true,
                description: 'Dasha Dzhakeli / tiktok',
            },
            {
                id: 3,
                link: 'https://vm.tiktok.com/ZGJnn5Kr4/',
                imageSrc: tencentPubgProLeague3,
                isShortView: true,
                description: 'TIM / tiktok',
            },
        ],
    },
    pubg_mobile_x_league_of_legends: {
        id: 'pubg_mobile_x_league_of_legends',
        companyName: Companies.TencentGames,
        addition: '360° Campaign Development',
        title: 'pubg mobile x League of Legends',
        productLogo: pubgMobileLogo,
        cases: [
            {
                id: 1,
                imageSrc: tencentMobileLeagueOfLegends1,
                link: 'https://www.youtube.com/watch?v=MXkjK856hKg',
                description: 'danya milokhin / youtube',
            },
        ],
    },
};

export const ALL_CASES_2 = Object.keys(jData).map((key) => jData[key]);
