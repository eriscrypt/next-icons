'use client';

import React from 'react';
import { Icon } from '../Icon';

export const HugeComponent: React.FC = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div className="p-8 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl">
            <div className="flex flex-col gap-6 text-white">
                <div className="flex items-center gap-4">
                    <Icon name="next" size={48} color="white" hoverColor="#fbbf24" />
                    <h2 className="text-3xl font-bold">Heavy Component Loaded!</h2>
                </div>

                <p className="text-lg opacity-90">
                    This is a dynamically loaded component with heavy content. It only loads when needed, keeping your initial bundle small.
                </p>

                <div className="flex flex-col gap-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-xl">Counter: {count}</span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setCount((c) => c - 1)}
                                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                            >
                                -
                            </button>
                            <button
                                onClick={() => setCount((c) => c + 1)}
                                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-2">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className="aspect-square bg-white/20 rounded-lg animate-pulse" />
                        ))}
                    </div>
                </div>

                <div className="flex gap-3 justify-center">
                    <Icon name="vercel" size={32} color="white" hoverColor="#fbbf24" />
                    <Icon name="globe" size={32} color="white" hoverColor="#fbbf24" />
                    <Icon name="next" size={32} color="white" hoverColor="#fbbf24" />
                </div>

                <p className="text-sm text-center opacity-75">💡 This component was loaded dynamically with Next.js dynamic imports</p>
            </div>
        </div>
    );
};
