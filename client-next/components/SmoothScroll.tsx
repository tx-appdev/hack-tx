"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

interface SmoothScrollProps {
    children: ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
    return (
        <ReactLenis root options={{
            duration: 1.2,
        }}>
            { children }
        </ReactLenis>
    );
};

export default SmoothScroll;