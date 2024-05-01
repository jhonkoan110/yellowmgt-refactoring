import React from 'react';
import { ColorBlock } from 'components/color-block';

import styles from './cases-page-item.module.css';
import { Image } from 'components/image';
import { TasksList } from '../tasks-list';
import { BloggersList } from '../bloggers-list';

interface CasesPageItemProps {
    title: string;
    logo: string;
    tasks: string[];
    bloggers: string[];
    text: string;
    imageLinks: string[];
    isShorts?: boolean;
}

export const CasesPageItem = ({
    title,
    logo,
    tasks,
    bloggers,
    text,
    imageLinks,
    isShorts = false,
}: CasesPageItemProps) => {
    return (
        <div className={styles['cases-page-item']}>
            <div>
                <h1 className={styles['cases-page-item__header']}>{title}</h1>
                <div className={styles.divs}>
                    {imageLinks.map((imageLink) =>
                        isShorts ? (
                            <div className={styles['div-container-shorts']}>
                                <Image src={imageLink} className={styles['div-container-shorts__item']} />
                            </div>
                        ) : (
                            <div key={imageLink} className={styles['div-container']}>
                                <Image src={imageLink} className={styles['div-container__item']} />
                            </div>
                        ),
                    )}
                </div>
            </div>
            <div className={styles['cases-page-item__right']}>
                <div className={styles['cases-page-item__right-top']}>
                    <ColorBlock className={styles['cases-page-item__right-top-logo']}>
                        <Image src={logo} width={165} height={100} />
                    </ColorBlock>
                    <ColorBlock>
                        <TasksList data={tasks} />
                    </ColorBlock>
                </div>
                <BloggersList data={bloggers} />
                <div className={styles['cases-page-item__right-bottom']}>
                    <ColorBlock className={styles['cases-page-item__right-bottom-text']}>{text}</ColorBlock>
                    <div className={styles['cases-page-item__right-bottom-features']}>
                        <ColorBlock>
                            <h3 className={styles['cases-page-item__right-bottom-feature-item-title']}>150+</h3>
                            <p className={styles['cases-page-item__right-bottom-feature-item-description']}>
                                Чего-то там кого-то там
                            </p>
                        </ColorBlock>
                        <ColorBlock>
                            <h3 className={styles['cases-page-item__right-bottom-feature-item-title']}>150+</h3>
                            <p className={styles['cases-page-item__right-bottom-feature-item-description']}>
                                Чего-то там кого-то там
                            </p>
                        </ColorBlock>
                        <ColorBlock>
                            <h4 className={styles['date-title']}>september 2020</h4>
                            <p className={styles['cases-page-item__right-bottom-feature-item-description']}>
                                дата как это называется
                            </p>
                        </ColorBlock>
                    </div>
                </div>
            </div>
        </div>
    );
};
