import React, { useEffect } from 'react';
import cn from 'classnames';

import { Content } from 'components/content';

import styles from './concrete-case-page.module.css';
import { Breadcrumbs } from 'components/breadcrumbs';
import { useScrollToTop } from 'hooks/useScrollToTop';
import { useNavigate, useParams } from 'react-router-dom';
import { jData } from 'constants/data';
import { NavLink } from 'react-router-dom';
import { Image } from 'components/image';

interface Props {
    link?: string;
    children: React.ReactNode;
}

const ConditionalNavlink = ({ children, link }: Props) => {
    return link ? (
        <NavLink to={link} target="_blank">
            {children}
        </NavLink>
    ) : (
        <>{children}</>
    );
};

const ConcreteCasePage = () => {
    useScrollToTop();

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const data = jData[id!];

    useEffect(() => {
        if (!data) {
            navigate('/cases');
        }
    }, []);

    if (!data) {
        return null;
    }

    return (
        <Content>
            <Breadcrumbs />

            <h1 className={styles['concrete-case-page__title']}>{data.title}</h1>
            <p className={styles['concrete-case-page__addition']}>{data.addition}</p>

            <section className={styles['concrete-case-page__gallery']}>
                {data.cases.map((caseItem) => (
                    <div
                        key={caseItem.id}
                        className={cn(styles['concrete-case-page__gallery__item'], {
                            [styles['concrete-case-page__gallery__image_short-view']]: caseItem.isShortView,
                        })}>
                        <ConditionalNavlink link={caseItem.link}>
                            <Image
                                className={cn(styles['concrete-case-page__gallery__image'], {
                                    [styles['concrete-case-page__gallery__image_short-view']]: caseItem.isShortView,
                                })}
                                src={caseItem.imageSrc}
                                alt={caseItem.description}
                            />
                            <p className={styles['concrete-case-page__gallery__text']}>{caseItem.description}</p>
                        </ConditionalNavlink>
                    </div>
                ))}
            </section>
        </Content>
    );
};

export default ConcreteCasePage;
