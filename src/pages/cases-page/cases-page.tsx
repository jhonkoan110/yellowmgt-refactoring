import React, { useEffect } from 'react';

import { ArrowIcon } from 'components/arrow-icon';
import { Content } from 'components/content';
import { Breadcrumbs } from 'components/breadcrumbs';
import { scrollToTop } from 'utils/scrollToTop';
import { ALL_CASES_2 } from 'constants/data';
import { NavLink } from 'react-router-dom';

import styles from './cases-page.module.css';
import { AnimatedRect } from 'components/animated-rect';

const CasesPage = () => {
    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <Content>
            <section>
                <Breadcrumbs />

                <div className={styles['table-container']}>
                    {ALL_CASES_2.map((item) => (
                        <AnimatedRect key={item.id}>
                            <NavLink to={String(item.id)}>
                                <div className={styles['table-container__item']}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            height: '100%',
                                            // justifyContent: 'space-evenly',
                                        }}>
                                        <div style={{ height: 70, marginTop: 65 }}>
                                            <img
                                                src={item.productLogo}
                                                width={80}
                                                // height={50}
                                                // className={styles['table-container__item__image']}
                                            />
                                        </div>

                                        <span className={styles['table-container__item__title']} style={{ height: 52 }}>
                                            {item.title}
                                        </span>
                                    </div>
                                    {/* <div className={styles['table-container__item__top']}>
                                        <div className={styles['table-container__item__index-number']}>
                                            {addZero(index + 1)}
                                        </div>
                                    </div> */}
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

export default CasesPage;
