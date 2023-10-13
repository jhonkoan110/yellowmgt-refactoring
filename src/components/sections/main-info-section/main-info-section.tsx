import React from 'react';

import { Content } from 'components/content';
import imageTextSrc from 'assets/image-icon.svg';
import mattersALotTheseDaysSrc from 'assets/matters-a-lot-these-days-icon.svg';
import arrowIconSrc from 'assets/arrow-icon.svg';

import styles from './main-info-section.module.css';
import { Button } from 'components/button';

export const MainInfoSection = () => {
    return (
        <section className={styles.root}>
            <Content>
                <div className={styles.container}>
                    <img src={imageTextSrc} alt="image text" className={styles['image-text']} />
                    <div className={styles['right-side']}>
                        <img
                            src={mattersALotTheseDaysSrc}
                            alt="matters a lot these days"
                            className={styles['matters-a-lot-text']}
                        />
                        <p className={styles['info-text']}>
                            We assist clients in building and promoting their online presence through social media,
                            blogs, and other platforms. Our professional strategy helps establish industry leadership
                            and reach target audiences.
                        </p>
                        <Button className={styles['cases-btn']}>
                            <span>Cases</span>
                            <img src={arrowIconSrc} alt="arrow-icon" />
                        </Button>
                    </div>
                </div>
            </Content>
        </section>
    );
};
