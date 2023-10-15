import React, { useEffect } from 'react';

import { ArrowIcon } from 'components/arrow-icon';
import { Content } from 'components/content';
import { Breadcrumbs } from 'components/breadcrumbs';
import { scrollToTop } from 'utils/scrollToTop';

import styles from './cases-page.module.css';

const arr = Array(10).fill({
    id: 1,
    imageSrc: '',
    addition: '360° Campaign Development',
    title: 'Time Princess',
    indexString: '01',
});

export const CasesPage = () => {
    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <Content>
            <section>
                <Breadcrumbs />

                <div className={styles['table-container']}>
                    {arr.map((item) => (
                        <div className={styles['table-container__item']}>
                            <div className={styles['table-container__item__top']}>
                                <div>
                                    <img src={item.imageSrc} />
                                    <span className={styles['table-container__item__title']}>{item.title}</span>
                                </div>
                                <div className={styles['table-container__item__index-number']}>{item.indexString}</div>
                            </div>
                            <div className={styles['table-container__item__addition']}>{item.addition}</div>
                            <button className={styles['table-container__item__btn']}>
                                <ArrowIcon />
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </Content>
    );
};
