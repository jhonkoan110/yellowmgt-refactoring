import React from 'react';
import { ColorBlock } from 'components/color-block';
import cn from 'classnames';

import styles from './cases-page-item.module.css';
import { Image } from 'components/image';
import { TasksList } from '../tasks-list';
import { ActivationList } from '../activation-list/activation-list';

interface CasesPageItemProps {
    title: string;
    logo: string;
    tasks: string[];
    activation: string[];
    text: string;
    imageLinks: string[];
    isShorts?: boolean;
    creators: string;
    extra: {
        title: string;
        text: string;
    };
    views: string;
}

const checkNDA = (value: string) => {
    return value === 'NDA';
};

export const CasesPageItem = ({
    title,
    logo,
    tasks,
    activation,
    text,
    imageLinks,
    isShorts = false,
    creators,
    views,
    extra,
}: CasesPageItemProps) => {
    return (
        <div className={styles['cases-page-item']}>
            <div>
                <h1 className={styles['cases-page-item__header']}>{title}</h1>
                <div
                    className={
                        isShorts
                            ? styles['divs_shorts']
                            : cn(styles.divs, {
                                  [styles['divs-1']]: imageLinks.length === 1,
                                  [styles['divs-2']]: imageLinks.length === 2,
                                  [styles['divs-4']]: imageLinks.length === 4,
                              })
                    }>
                    {imageLinks.map((imageLink) =>
                        isShorts ? (
                            <div key={imageLink} className={styles['div-container-shorts']}>
                                <Image src={imageLink} className={styles['div-container-shorts__item']} />
                            </div>
                        ) : (
                            <div key={imageLink} className={styles['div-container']}>
                                <Image
                                    src={imageLink}
                                    className={cn(styles['div-container__item'], {
                                        [styles['div-container__item_only']]: imageLinks.length === 1,
                                    })}
                                />
                            </div>
                        ),
                    )}
                </div>
            </div>
            <div className={styles['cases-page-item__right']}>
                <div className={styles['cases-page-item__right-top']}>
                    <ColorBlock className={styles['cases-page-item__right-top-logo']}>
                        <Image src={logo} className={styles.logo} />
                    </ColorBlock>
                    <ColorBlock>
                        <TasksList data={tasks} />
                    </ColorBlock>
                </div>
                <ActivationList data={activation} />
                <div className={styles['cases-page-item__right-bottom']}>
                    <ColorBlock className={styles['cases-page-item__right-bottom-text']}>{text}</ColorBlock>
                    <div className={styles['cases-page-item__right-bottom-features']}>
                        <ColorBlock>
                            <h3 className={styles['cases-page-item__right-bottom-feature-item-title']}>{creators}</h3>
                            {!checkNDA(creators) && (
                                <p className={styles['cases-page-item__right-bottom-feature-item-description']}>
                                    Creators
                                </p>
                            )}
                        </ColorBlock>
                        <ColorBlock>
                            <h3 className={styles['cases-page-item__right-bottom-feature-item-title']}>{views}</h3>
                            {!checkNDA(views) && (
                                <p className={styles['cases-page-item__right-bottom-feature-item-description']}>
                                    Views
                                </p>
                            )}
                        </ColorBlock>
                        <ColorBlock>
                            <h3 className={styles['cases-page-item__right-bottom-feature-item-title']}>
                                {extra.title}
                            </h3>
                            {!checkNDA(extra.title) && (
                                <p className={styles['cases-page-item__right-bottom-feature-item-description']}>
                                    {extra.text}
                                </p>
                            )}
                        </ColorBlock>
                    </div>
                </div>
            </div>
        </div>
    );
};
