import React from 'react';
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa6";
import * as HiIcons from "react-icons/hi2";
import * as RiIcons from "react-icons/ri";

/**
 * Resolves an icon name string to a React component.
 * Supports BootstrapIcons (Bs), FontAwesome6 (Fa), Heroicons2 (Hi), and RemixIcons (Ri).
 * @param {string} iconName - The name of the icon (e.g., 'BsShieldCheck')
 * @returns {React.Component|null} - The icon component or null if not found
 */
export const resolveIcon = (iconName) => {
    if (!iconName) return null;

    let IconComponent = null;

    if (iconName.startsWith('Bs')) {
        IconComponent = BsIcons[iconName];
    } else if (iconName.startsWith('Fa')) {
        IconComponent = FaIcons[iconName];
    } else if (iconName.startsWith('Hi')) {
        IconComponent = HiIcons[iconName];
    } else if (iconName.startsWith('Ri')) {
        IconComponent = RiIcons[iconName];
    }

    return IconComponent ? <IconComponent /> : null;
};
