import legacyOfDiscordLogo from 'assets/legacy-of-discord-logo.png';
import legacyOfDiscord1 from 'assets/legacy-of-discord-1.jpg';

import honkaiLogo from 'assets/honkai-logo.png';
import honkai1 from 'assets/honkai-1.jpg';
import honkai2 from 'assets/honkai-2.jpg';
import honkai3 from 'assets/honkai-3.jpg';
import honkai4 from 'assets/honkai-4.jpg';

import nintendoLogo from 'assets/nintendo-logo.png';
import nintendo1 from 'assets/nintendo-1.jpg';

import iggLordsMobile1 from 'assets/cases/igg-lords-mobile-1.jpg';
import iggLordsMobile2 from 'assets/cases/igg-lords-mobile-2.jpg';

import iggTimePrincess1 from 'assets/cases/igg-time-princess-1.jpg';
import iggTimePrincess2 from 'assets/cases/igg-time-princess-2.jpg';
import iggTimePrincess3 from 'assets/cases/igg-time-princess-3.jpg';
import iggTimePrincess4 from 'assets/cases/igg-time-princess-4.jpg';

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

import tencentPubgProLeague1 from 'assets/cases/tencent-pubg-pro-league-1.jpg';
import tencentPubgProLeague2 from 'assets/cases/tencent-pubg-pro-league-2.jpg';
import tencentPubgProLeague3 from 'assets/cases/tencent-pubg-pro-league-3.jpg';

import lordsMobileLogo from 'assets/lords-mobile-logo.png';
import pubgMobileLogo from 'assets/pubg-mobile-logo.png';
import basketballArenaLogo from 'assets/basketball-arena-logo.png';
import abloLogo from 'assets/ablo-logo.png';
import zoobaLogo from 'assets/zooba-logo.png';
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
    Nintendo = 'nintendo',
    Honkai = 'honkai',
    LegacyOfDiscord = 'legacy of discord',
}

export enum Activation {
    YouTube = 'Y',
    TikTok = 'T',
    Instagram = 'I',
    Offline = 'O',
}

export enum Tasks {
    Campaign = '360° Campaign',
    CreativeAndProduction = 'Creative & Production',
    Etc = 'etc.',
    PR = 'PR',
}

interface Tmp {
    id: number | string;
    companyName: Companies;
    isShorts?: boolean;
    tasks: Tasks[];
    // activation: ['youtube'],
    activation: Activation[];
    creators: string;
    views: string;
    extra: {
        title: string;
        text: string;
    };
    // likes: string;
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
    pubg_mobile: {
        id: 'pubg_mobile',
        isShorts: true,
        companyName: Companies.TencentGames,
        addition:
            'PUBG Mobile is a conditional free-to-play mobile multiplayer online battle royal game. ' +
            'PUBG Mobile has an audience of over one hundred million active players worldwide. ' +
            'We have launched over 20 incredible campaigns for PUBGM on YouTube, TikTok, Instagram. ' +
            'We have written and published tracks, created unique content, as well as run a huge number of campaigns with Influencers!',
        productLogo: pubgMobileLogo,
        title: 'pubg mobile',
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
        extra: {
            text: 'Likes',
            title: '1.5M+',
        },
        creators: '25+',
        views: '40M+',
        tasks: [Tasks.Campaign, Tasks.CreativeAndProduction, Tasks.Etc],
        activation: [Activation.YouTube, Activation.TikTok, Activation.Instagram],
    },
    lords_mobile: {
        id: 'lords_mobile',
        companyName: Companies.IGG,
        title: 'lords mobile',
        tasks: [Tasks.Campaign, Tasks.CreativeAndProduction],
        activation: [Activation.YouTube],
        addition:
            'We strategized and selected Influencers in line with the goals of the advertising campaign for Lords Mobile. The right choice of Influencers helped to achieve the necessary results and success in the campaign.',
        extra: {
            text: 'Positive Feedback',
            title: '96%',
        },
        creators: '12+',
        views: '18M+',
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
    nintendo: {
        id: 'nintendo',
        companyName: Companies.Nintendo,
        addition:
            'Nintendo is one of the most popular video game and console companies in the world! ' +
            "We've picked the perfect Influencers to show off all the benefits of Nintendo Switch for kids to play with.",
        productLogo: nintendoLogo,
        activation: [Activation.YouTube],
        cases: [
            {
                id: 1,
                description: '',
                imageSrc: nintendo1,
                link: '',
            },
        ],
        creators: '4+',
        tasks: [Tasks.Campaign, Tasks.CreativeAndProduction],
        title: 'nintendo',
        views: '7M+',
        extra: {
            text: 'KPI',
            title: '100%',
        },
    },
    time_princess: {
        id: 'time_princess',
        companyName: Companies.IGG,
        title: 'time princess',
        tasks: [Tasks.Campaign, Tasks.CreativeAndProduction],
        activation: [Activation.YouTube],
        productLogo: timePrincessLogo,
        addition:
            'We developed a massive advertising campaign for a new game from IGG called Time Princes. We used more than 30 Influencers on TikTok, Instagram and YouTube.',
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
        extra: {
            text: 'KPI',
            title: '160%',
        },
        creators: '34+',
        views: '38M+',
    },
    // time_princess_cosplay_instagram: {
    //     id: 'time_princess_cosplay_instagram',
    //     companyName: Companies.IGG,
    //     title: 'Time Princess. Cosplay. Instagram',
    //     addition: '360° Campaign Development',
    //     productLogo: timePrincessLogo,
    //     cases: [
    //         {
    //             id: 1,
    //             link: 'https://www.instagram.com/p/CNKjXKrMpui/?igshid=ssvgs12nsnhz',
    //             imageSrc: iggCosplay1,
    //             height: 417,
    //             description: 'burning.princess / instagram',
    //         },
    //         {
    //             id: 2,
    //             link: 'https://www.instagram.com/p/CNKi9cmgKmZ/?img_index=1',
    //             imageSrc: iggCosplay2,
    //             height: 417,
    //             description: '_raspytina_ / instagram',
    //         },
    //     ],
    //     likes: 'KPI 100%',
    //     creators: '6+',
    //     views: '2M+',
    //     tasks: ['360° Campaign'],
    //     activation: ['youtube'],
    // },
    zooba: {
        id: 'zooba',
        companyName: Companies.WildLife,
        addition:
            'Zooba is an awesome third-person action game in which you fight enemies as a very cute animal shooter.' +
            ' We selected Influencers with a young audience and ran a successful campaign.',
        cases: [
            {
                id: 1,
                link: 'https://www.youtube.com/watch?v=0xj6QJFzi2g&t=94s',
                imageSrc: wildlifeZooba1,
                description: 'LINE / youtube',
            },
        ],
        tasks: [Tasks.Campaign],
        activation: [Activation.YouTube],
        // productLogo: tennisClashLogo,
        productLogo: zoobaLogo,
        title: 'ZOOBA',
        extra: {
            text: 'KPI',
            title: '100%',
        },
        creators: '6+',
        views: '2M+',
    },
    tennis_clash: {
        id: 'tennis_clash',
        companyName: Companies.WildLife,
        addition:
            'Tennis Clash is an online tennis game where you can play against other players in exciting short matches.' +
            ' We developed a strategy and launched a campaign for an adult target audience.',
        title: 'Tennis Clash',
        productLogo: tennisClashLogo,
        cases: [
            {
                id: 1,
                link: 'https://www.youtube.com/watch?v=cNDxBWToyxQ',
                imageSrc: wildlifeZooba2,
                description: 'Fan PDA / youtube',
            },
            {
                id: 2,
                link: 'https://www.youtube.com/watch?v=lRMgKuV3MrE',
                imageSrc: wildlifeZooba3,
                description: 'КиноИндустрия / youtube',
            },
        ],
        extra: {
            title: '60K+',
            text: 'Likes',
        },
        creators: '4+',
        views: '1.6M+',
        tasks: [Tasks.Campaign],
        activation: [Activation.YouTube],
    },
    // 'zooba_&_tennis_clash': {
    //     id: 'zooba_&_tennis_clash',
    //     companyName: Companies.WildLife,
    //     addition:
    //         'Zooba is an awesome third-person action game in which you fight enemies as a very cute animal shooter.We selected Influencers with a young audience and ran a successful campaign.',
    //     title: 'Zooba & Tennis Clash',
    //     productLogo: tennisClashLogo,
    //     cases: [
    //         {
    //             id: 1,
    //             link: 'https://www.youtube.com/watch?v=0xj6QJFzi2g&t=94s',
    //             imageSrc: wildlifeZooba1,
    //             description: 'LINE / youtube',
    //         },
    //         {
    //             id: 2,
    //             link: 'https://www.youtube.com/watch?v=cNDxBWToyxQ',
    //             imageSrc: wildlifeZooba2,
    //             description: 'Fan PDA / youtube',
    //         },
    //         {
    //             id: 3,
    //             link: 'https://www.youtube.com/watch?v=lRMgKuV3MrE',
    //             imageSrc: wildlifeZooba3,
    //             description: 'КиноИндустрия / youtube',
    //         },
    //     ],
    //     likes: 'KPI 100%',
    //     creators: '6+',
    //     views: '2M+',
    //     tasks: ['360° Campaign'],
    //     activation: ['youtube'],
    // },
    ablo: {
        id: 'ablo',
        companyName: Companies.MatchGroup,
        title: 'Ablo',
        isShorts: true,
        addition:
            'Ablo is a social network for instant communication. ' +
            'It allowed users to communicate with people from anywhere in the world by having live text and video conversations using an automatic translation function. ' +
            'We developed and implemented more than a dozen successful advertising campaigns for Ablo in different countries.',
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
        extra: {
            title: '98%',
            text: 'Positive Feedback',
        },
        creators: '40+',
        views: '27M+',
        tasks: [Tasks.Campaign, Tasks.CreativeAndProduction, Tasks.Etc],
        activation: [Activation.YouTube, Activation.Instagram],
    },
    basketball_arena: {
        id: 'basketball_arena',
        companyName: Companies.Masomo,
        title: 'basketball arena',
        addition:
            'Basketball Arena is a sports game similar to Head Ball that has already won the hearts of a million players around the world. ' +
            "The familiar dummy athletes are back, and this time they're playing basketball. " +
            'Together with Masomo we strategized and selected active, athletic and young Influencers and launched a successful campaign.',
        productLogo: basketballArenaLogo,
        cases: [
            {
                id: 1,
                link: 'https://youtu.be/lmcF7JS4_R4?si=ZN54TUWDt73bd8G1&t=200',
                imageSrc: masomoBasketball1,
                description: 'Lesha Maisak / youtube',
            },
        ],
        extra: {
            text: 'Likes',
            title: '80K+',
        },
        creators: '4+',
        views: '7M+',
        tasks: [Tasks.Campaign, Tasks.CreativeAndProduction],
        activation: [Activation.YouTube],
    },
    // 'pubg_mobile_(song)': {
    //     id: 'pubg_mobile_(song)',
    //     companyName: Companies.TencentGames,
    //     title: 'pubg mobile (song)',
    //     addition: '360° Campaign Development',
    //     productLogo: pubgMobileLogo,
    //     cases: [
    //         {
    //             id: 1,
    //             link: 'https://www.youtube.com/watch?v=mxyu5lIukyM',
    //             imageSrc: tencentPubgMobileSong1,
    //             description: 'PUBG MOBILE СНГ / youtube',
    //         },
    //     ],
    //     likes: 'KPI 100%',
    //     creators: '6+',
    //     views: '2M+',
    //     tasks: ['360° Campaign'],
    //     activation: ['youtube'],
    // },

    // pubg_mobile_x_league_of_legends: {
    //     id: 'pubg_mobile_x_league_of_legends',
    //     companyName: Companies.TencentGames,
    //     addition: '360° Campaign Development',
    //     title: 'pubg mobile x League of Legends',
    //     productLogo: pubgMobileLogo,
    //     cases: [
    //         {
    //             id: 1,
    //             imageSrc: tencentMobileLeagueOfLegends1,
    //             link: 'https://www.youtube.com/watch?v=MXkjK856hKg',
    //             description: 'danya milokhin / youtube',
    //         },
    //     ],
    //     likes: 'KPI 100%',
    //     creators: '6+',
    //     views: '2M+',
    //     tasks: ['360° Campaign'],
    //     activation: ['youtube'],
    // },

    honkai: {
        id: 'honkai',
        companyName: Companies.Honkai,
        addition:
            'Honkai:Star Rail is a popular game from the world famous HoYoverse company. ' +
            "Together with our partners, we developed and recreated an offline event to coincide with the game's release.",
        productLogo: honkaiLogo,
        activation: [Activation.YouTube],
        cases: [
            {
                id: 1,
                description: '',
                imageSrc: honkai1,
                link: '',
            },
            {
                id: 2,
                description: '',
                imageSrc: honkai2,
                link: '',
            },
            {
                id: 3,
                description: '',
                imageSrc: honkai3,
                link: '',
            },
            {
                id: 4,
                description: '',
                imageSrc: honkai4,
                link: '',
            },
        ],
        creators: 'NDA',
        tasks: [Tasks.Campaign, Tasks.CreativeAndProduction],
        title: 'honkai: star rail',
        views: 'NDA',
        extra: {
            text: 'NDA',
            title: 'NDA',
        },
        isShorts: true,
    },
    legacy_of_discord: {
        id: 'legacy_of_discord',
        companyName: Companies.LegacyOfDiscord,
        addition:
            'We prepared and conducted a large-scale advertising campaign to promote a new game from YooZoo called Legacy of Discord.',
        productLogo: legacyOfDiscordLogo,
        activation: [Activation.Offline],
        cases: [
            {
                id: 1,
                description: '',
                imageSrc: legacyOfDiscord1,
                link: '',
            },
        ],
        creators: '14+',
        tasks: [Tasks.Campaign, Tasks.CreativeAndProduction],
        title: 'legacy of discord',
        views: '8M+',
        extra: {
            text: 'Likes',
            title: '400K+',
        },
    },
};

export const ALL_CASES_2 = Object.keys(jData).map((key) => jData[key]);
