import React from 'react';
import cn from 'classnames';

import { ButtonProps } from './button.types';

import styles from './button.module.css';

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button className={cn(styles.button, className)} {...props}>
            {children}
        </button>
    );
};
