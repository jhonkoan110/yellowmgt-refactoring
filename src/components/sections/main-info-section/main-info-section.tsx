import React from 'react';

import { Button } from 'components/button';
import { Content } from 'components/content';
import imageTextSrc from '/public/assets/image-icon.svg';
import mattersALotTheseDaysSrc from '/public/assets/matters-a-lot-these-days-icon.svg';
import arrowIconSrc from '/public/assets/arrow-icon.svg';

import styles from './main-info-section.module.css';
import { NavLink } from 'react-router-dom';

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
                        <NavLink to="/cases" >
                            <Button className={styles['cases-btn']}>
                                <span>Cases</span>
                                <img src={arrowIconSrc} alt="arrow-icon" />
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </Content>
        </section>
    );
};
