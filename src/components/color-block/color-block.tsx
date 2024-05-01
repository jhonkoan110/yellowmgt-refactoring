import React from 'react';
import cn from 'classnames';

import styles from './color-block.module.css';

interface ColorBlockProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    color?: 'yellow' | 'grey';
}

export const ColorBlock = ({ children, className, color = 'grey', ...rest }: ColorBlockProps) => {
    return (
        <div
            className={cn(
                styles['color-block'],
                {
                    [styles['color-block_yellow']]: color === 'yellow',
                    [styles['color-block_grey']]: color === 'grey',
                },
                className,
            )}
            {...rest}>
            {children}
        </div>
    );
};
