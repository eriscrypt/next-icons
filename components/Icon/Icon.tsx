'use client';

import React from 'react';
import type { IconName } from './icon-names';

type IconProps = {
    name: IconName;
    size?: number;
    color?: string;
    hoverColor?: string;
    className?: string;
    onClick?: () => void;
};

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', hoverColor, onClick }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const isClickable = !!onClick || !!hoverColor;

    return (
        <svg
            width={size}
            height={size}
            fill={isHovered && hoverColor ? hoverColor : color}
            aria-hidden="true"
            style={{
                display: 'inline-block',
                cursor: isClickable ? 'pointer' : 'default',
                transition: 'fill 0.2s ease-in-out',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <use href={`#${name}`} />
        </svg>
    );
};
