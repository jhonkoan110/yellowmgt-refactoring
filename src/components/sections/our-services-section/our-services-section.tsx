import React from 'react';

import { Content } from 'components/content';
import { CirclePlusIcon } from 'components/circle-plus-icon/circle-plus-icon';

import styles from './our-services-section.module.css';
import { Tooltip } from 'react-tooltip';

const services = [
    {
        title: 'influencers',
        text: 'Produce advertising campaigns with TikTok, Twitch, Instagram and YouTube Influencers. We shoot, write scripts, edit and record music tracks, as well as organize ambassadorial contracts',
    },
    {
        title: 'special_projects',
        text: 'Online and offline: we make quests and full-fledged games that work in desktop and mobile browsers, as well as books, installations, events, signs and even... cakes that become hits on social networks. We can create mini-games, chat bots, stickers and masks in mobile applications',
    },
    {
        title: 'content',
        text: 'Writing articles, shooting photos and videos',
    },
    {
        title: 'design',
        text: 'We make banners and stickers, create characters (mascots), draw illustrations and comics, know how to do motion design and animate all of the above. We are engaged in UI/UX design, web design, develop corporate identity',
    },
    {
        title: 'video',
        text: 'We shoot series, short films, shows, short and long videos for video hosting, TV and outdoor advertising. We do subject shooting, photo projects, animation in 2D and 3D',
    },
    {
        title: 'promotion',
        text: 'Organization of placement at influencers and popular communities, conducting targeting campaigns',
    },
    {
        title: 'advertising',
        text: 'We organize a full-fledged advertising campaign: develop a strategy, organize photo and video shooting, influencers, cover the appropriate target audience.',
    },
    {
        title: 'PR',
        text: 'We integrate into opinion leader channels and podcasts. We write press releases and native long-reads, organize participation in live broadcasts and interviews',
    },
];

export const OurServicesSection = () => {
    return (
        <section className={styles.root}>
            <Content>
                <div className={styles['services-list']}>
                    {services.map((service) => (
                        <>
                            <a
                                id={service.title}
                                key={service.title}
                                className={styles['services-list__item']}
                                title={service.text}>
                                <div className={styles['services-list__item__title']}>{service.title}</div>
                                <div>
                                    <CirclePlusIcon />
                                </div>
                            </a>
                            <Tooltip anchorSelect={`#${service.title}`} content={service.text} opacity={1} className={styles.tooltip} place='bottom' />
                        </>
                    ))}
                </div>
            </Content>
        </section>
    );
};
