import React, { useEffect } from 'react';

import { ArrowIcon } from 'components/arrow-icon';
import { Content } from 'components/content';
import { Breadcrumbs } from 'components/breadcrumbs';
import { scrollToTop } from 'utils/scrollToTop';
import { ALL_CASES_2 } from 'constants/data';
import { NavLink } from 'react-router-dom';

import styles from './cases-page.module.css';
import { AnimatedRect } from 'components/animated-rect';

const addZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
};

export const CasesPage = () => {
    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <Content>
            <section>
                <Breadcrumbs />

                {/* <AnimatedRect /> */}

                <div className={styles['table-container']}>
                    {ALL_CASES_2.map((item) => (
                        <AnimatedRect>
                            <NavLink to={String(item.id)}>
                                <div className={styles['table-container__item']}>
                                    <div className={styles['table-container__item__top']}>
                                        <div>
                                            <img
                                                src={item.productLogo}
                                                className={styles['table-container__item__image']}
                                            />
                                            <span className={styles['table-container__item__title']}>{item.title}</span>
                                        </div>
                                        <div className={styles['table-container__item__index-number']}>
                                            {addZero(+item.id)}
                                        </div>
                                    </div>
                                    {/* <div className={styles['table-container__item__addition']}>{item.addition}</div> */}
                                    <button className={styles['table-container__item__btn']}>
                                        <ArrowIcon />
                                    </button>
                                </div>
                            </NavLink>
                        </AnimatedRect>
                    ))}
                </div>
            </section>
        </Content>
    );
};
