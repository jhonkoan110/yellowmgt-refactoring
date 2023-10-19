import React from 'react';
import cn from 'classnames';

import { ImageProps } from './image.types';

import styles from './image.module.css';

export const Image = ({ className, ...props }: ImageProps) => {
    return <img {...props} loading="lazy" className={cn(styles.image, className)} />;
};
