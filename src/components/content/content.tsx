import React from 'react';
import cn from 'classnames';

import styles from './content.module.css';

interface ContentProps {
    children: React.ReactNode;
    className?: string;
}

export const Content = ({ children, className }: ContentProps) => {
    return <div className={cn(styles.content, className)}>{children}</div>;
};
