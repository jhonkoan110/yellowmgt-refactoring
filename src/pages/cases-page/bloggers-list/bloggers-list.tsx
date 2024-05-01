import React from 'react';
import { ColorBlock } from 'components/color-block';

import styles from './bloggers-list.module.css';

interface BloggersListProps {
    data: string[];
}

export const BloggersList = ({ data }: BloggersListProps) => {
    return (
        <ColorBlock color="yellow">
            <h4 className={styles['bloggers-list__title']}>Bloggers:</h4>
            <ul className={styles['bloggers-list']}>
                {data.map((bloggerName, index) => (
                    <li key={bloggerName}>
                        {index !== 0 && <span className={styles['bloggers-list__dot']} />}
                        <span className={styles['bloggers-list__name']}>{bloggerName}</span>
                    </li>
                ))}
            </ul>
        </ColorBlock>
    );
};
