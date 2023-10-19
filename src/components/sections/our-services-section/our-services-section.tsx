import React from 'react';

import { Content } from 'components/content';
import { SectionTitle } from 'components/section-title';
import doneIconSrc from '/public/assets/done-icon.svg';
import { ourServicesData } from './our-services.constants';

import styles from './our-services-section.module.css';

export const OurServicesSection = () => {
    return (
        <section>
            <SectionTitle title="our services" anchorId="our_services" />

            <Content>
                <div className={styles['content-container']}>
                    <ol className={styles['services-list']}>
                        {ourServicesData.map((serviceItem) => (
                            <li key={serviceItem.id} className={styles['services-list__item']}>
                                <div className={styles['services-list__index_number']}>{serviceItem.id}</div>
                                <div>
                                    <h3 className={styles['services-list__item__title']}>{serviceItem.title}</h3>
                                    <p className={styles['services-list__item__text']}>{serviceItem.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                    <img src={doneIconSrc} alt="done text" />
                </div>
            </Content>
        </section>
    );
};
