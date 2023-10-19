import React from 'react';

import { Button } from 'components/button';
import { Content } from 'components/content';
import imageTextSrc from 'assets/image-icon.svg';
import mattersALotTheseDaysSrc from 'assets/matters-a-lot-these-days-icon.svg';
import arrowIconSrc from 'assets/arrow-icon.svg';

import styles from './main-info-section.module.css';
import { NavLink } from 'react-router-dom';
import { Image } from 'components/image';

export const MainInfoSection = () => {
    return (
        <section className={styles.root}>
            <Content>
                <div className={styles.container}>
                    <Image src={imageTextSrc} alt="image text" className={styles['image-text']} />
                    <div className={styles['right-side']}>
                        <Image
                            src={mattersALotTheseDaysSrc}
                            alt="matters a lot these days"
                            className={styles['matters-a-lot-text']}
                        />
                        <p className={styles['info-text']}>
                            We assist clients in building and promoting their online presence through social media,
                            blogs, and other platforms. Our professional strategy helps establish industry leadership
                            and reach target audiences.
                        </p>
                        <NavLink to="/cases">
                            <Button className={styles['cases-btn']}>
                                <span>Cases</span>
                                <Image src={arrowIconSrc} alt="arrow-icon" />
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </Content>
        </section>
    );
};
