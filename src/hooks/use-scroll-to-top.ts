import { useEffect } from 'react';
import { scrollToTop } from 'utils/scroll-to-top';

export const useScrollToTop = () => {
    useEffect(() => {
        scrollToTop();
    }, []);
};
