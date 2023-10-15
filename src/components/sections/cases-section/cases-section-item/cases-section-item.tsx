import React, { useState } from 'react';
import cn from 'classnames';

import { Content } from 'components/content';
import { ArrowIcon } from 'components/arrow-icon';

import styles from './cases-section-item.module.css';

import tmpImageSrc from 'assets/igg-lords-mobile-1.jpg';

export const CasesSectionItem = () => {
    const [expanded, setExpanded] = useState(false);

    const handleClickArrowButton = () => {
        setExpanded(!expanded);
    };

    return (
        <li className={styles['cases-list-item']}>
            <Content className={styles['cases-list-item__content-container']}>
                {expanded && (
                    <div className={styles['cases-list-item__image-container']}>
                        <img className={styles['cases-list-item__image']} src={tmpImageSrc} alt="asdasd" />
                    </div>
                )}
                <div
                    className={cn(styles['cases-list-item__info'], {
                        [styles['cases-list-item__info_expanded']]: expanded,
                    })}>
                    <h4
                        className={cn(styles['cases-list-item__title'], {
                            [styles['cases-list-item__title_expanded']]: expanded,
                        })}>
                        <span>PUBG MOBILE ｜COSMOBOY - Егор Крид</span>
                        <button
                            className={cn(styles['cases-list-item__arrow-btn'], {
                                [styles['none']]: expanded,
                            })}
                            onClick={handleClickArrowButton}>
                            <ArrowIcon mirror={expanded} />
                        </button>
                    </h4>
                    {expanded && (
                        <p className={styles['cases-list-item__service']}>
                            <span>360° Campaign Development</span>
                            <button
                                className={cn(
                                    styles['cases-list-item__arrow-btn'],
                                    styles['cases-list-item__arrow-btn_none'],
                                    {
                                        [styles['none']]: !expanded,
                                    },
                                )}
                                onClick={handleClickArrowButton}>
                                <ArrowIcon mirror={expanded} />
                            </button>
                        </p>
                    )}
                </div>
            </Content>
        </li>
    );
};
