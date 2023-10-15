import React from 'react';

import { Content } from 'components/content';
import imageSrc from 'assets/igg-lords-mobile-1.jpg';

import styles from './concrete-case-page.module.css';
import { Breadcrumbs } from 'components/breadcrumbs';
import { useScrollToTop } from 'hooks/useScrollToTop';

export const ConcreteCasePage = () => {
    useScrollToTop();

    return (
        <Content>
            <Breadcrumbs />

            <h1 className={styles['concrete-case-page__title']}>Lords Mobile</h1>
            <p className={styles['concrete-case-page__addition']}>360° Campaign Development</p>

            <section className={styles['concrete-case-page__gallery']}>
                <div className={styles['concrete-case-page__gallery__item']}>
                    <img className={styles['concrete-case-page__gallery__image']} src={imageSrc} alt="asdasd" />
                    <p className={styles['concrete-case-page__gallery__text']}>/ youtube</p>
                </div>
                <div className={styles['concrete-case-page__gallery__item']}>
                    <img className={styles['concrete-case-page__gallery__image']} src={imageSrc} alt="asdasd" />
                    <p className={styles['concrete-case-page__gallery__text']}>/ youtube</p>
                </div>
                <div className={styles['concrete-case-page__gallery__item']}>
                    <img className={styles['concrete-case-page__gallery__image']} src={imageSrc} alt="asdasd" />
                    <p className={styles['concrete-case-page__gallery__text']}>/ youtube</p>
                </div>
                <div className={styles['concrete-case-page__gallery__item']}>
                    <img className={styles['concrete-case-page__gallery__image']} src={imageSrc} alt="asdasd" />
                    <p className={styles['concrete-case-page__gallery__text']}>/ youtube</p>
                </div>
                <div className={styles['concrete-case-page__gallery__item']}>
                    <img className={styles['concrete-case-page__gallery__image']} src={imageSrc} alt="asdasd" />
                    <p className={styles['concrete-case-page__gallery__text']}>/ youtube</p>
                </div>
                <div className={styles['concrete-case-page__gallery__item']}>
                    <img className={styles['concrete-case-page__gallery__image']} src={imageSrc} alt="asdasd" />
                    <p className={styles['concrete-case-page__gallery__text']}>/ youtube</p>
                </div>
                <div className={styles['concrete-case-page__gallery__item']}>
                    <img className={styles['concrete-case-page__gallery__image']} src={imageSrc} alt="asdasd" />
                    <p className={styles['concrete-case-page__gallery__text']}>/ youtube</p>
                </div>
                <div className={styles['concrete-case-page__gallery__item']}>
                    <img className={styles['concrete-case-page__gallery__image']} src={imageSrc} alt="asdasd" />
                    <p className={styles['concrete-case-page__gallery__text']}>/ youtube</p>
                </div>
                <div className={styles['concrete-case-page__gallery__item']}>
                    <img className={styles['concrete-case-page__gallery__image']} src={imageSrc} alt="asdasd" />
                    <p className={styles['concrete-case-page__gallery__text']}>/ youtube</p>
                </div>
                <div className={styles['concrete-case-page__gallery__item']}>
                    <img className={styles['concrete-case-page__gallery__image']} src={imageSrc} alt="asdasd" />
                    <p className={styles['concrete-case-page__gallery__text']}>/ youtube</p>
                </div>
                <div className={styles['concrete-case-page__gallery__item']}>
                    <img className={styles['concrete-case-page__gallery__image']} src={imageSrc} alt="asdasd" />
                    <p className={styles['concrete-case-page__gallery__text']}>/ youtube</p>
                </div>
            </section>
        </Content>
    );
};
