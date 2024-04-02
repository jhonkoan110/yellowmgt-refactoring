import React from 'react';

import { Content } from 'components/content';
import { CirclePlusIcon } from 'components/circle-plus-icon/circle-plus-icon';

import styles from './our-services-section.module.css';

const services = [
    {
        title: 'influencers',
        text: 'text 1',
    },
    {
        title: 'special projects',
        text: 'Online and offline: we make quests and full-fledged games that work in desktop and mobile browsers, as well as books, installations, events, signs and even... cakes that become hits on social networks. We can create mini-games, chat bots, stickers and masks in mobile applications',
    },
    {
        title: 'content',
        text: 'text 3',
    },
    {
        title: 'design',
        text: 'text 4',
    },
    {
        title: 'video',
        text: 'text 5',
    },
    {
        title: 'promotion',
        text: 'text 6',
    },
    {
        title: 'advertising',
        text: 'text 7',
    },
    {
        title: 'PR',
        text: 'text 8',
    },
    {
        title: 'media',
        text: 'text 9',
    },
];

export const OurServicesSection = () => {
    return (
        <section className={styles.root}>
            <Content>
                <div className={styles['services-list']}>
                    {services.map((service) => (
                        <div key={service.title} className={styles['services-list__item']} title={service.text}>
                            <div className={styles['services-list__item__title']}>{service.title}</div>
                            <div>
                                <CirclePlusIcon />
                            </div>
                        </div>
                    ))}
                </div>
            </Content>
        </section>
    );
};
