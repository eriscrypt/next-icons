'use client';

import { Icon } from '@/components/Icon';
import { dynamicComponent } from '@/utils/dynamic-component';
import { useState } from 'react';

const HugeComponent = dynamicComponent(() => import('@/components/HugeComponent'), {
    exportName: 'HugeComponent',
    loading: () => <>loading...</>,
    ssr: false,
});

export default function Home() {
    const [showHeavy, setShowHeavy] = useState(false);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col gap-8 p-8 max-w-4xl w-full">
                <div className="flex flex-col gap-4 mt-8">
                    <button
                        onClick={() => setShowHeavy(!showHeavy)}
                        className="px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                    >
                        {showHeavy ? '🔽 Hide Heavy Component' : '🚀 Load Heavy Component Dynamically'}
                    </button>

                    {showHeavy && <HugeComponent />}

                    <p className="text-center text-white/60 text-sm mt-2">👆 Click to see dynamic component loading in action</p>
                </div>

                <h1 className="text-4xl font-bold text-white text-center">SVG Icons + Dynamic Loading</h1>

                <div className="flex px-12 py-6 gap-6 items-center justify-center rounded-2xl border border-white/10">
                    <Icon name="next" size={64} color="#10b9ae" hoverColor="#ef6f44" />
                    <Icon name="next" size={48} color="#10b981" hoverColor="#ef6f44" />
                    <Icon name="next" size={32} color="#0070f3" hoverColor="#ef6f44" />
                    <Icon name="next" size={24} color="#ffffff" hoverColor="#ef6f44" />
                </div>

                <div className="flex px-12 py-6 gap-6 items-center justify-center rounded-2xl border border-white/10">
                    <Icon name="vercel" size={64} color="#10b9ae" hoverColor="#ef6f44" />
                    <Icon name="vercel" size={48} color="#10b981" hoverColor="#ef6f44" />
                    <Icon name="vercel" size={32} color="#0070f3" hoverColor="#ef6f44" />
                    <Icon name="vercel" size={24} color="#ffffff" hoverColor="#ef6f44" />
                </div>

                <div className="flex px-12 py-6 gap-6 items-center justify-center rounded-2xl border border-white/10">
                    <Icon name="globe" size={64} color="#10b9ae" hoverColor="#ef6f44" />
                    <Icon name="globe" size={48} color="#10b981" hoverColor="#ef6f44" />
                    <Icon name="globe" size={32} color="#0070f3" hoverColor="#ef6f44" />
                    <Icon name="globe" size={24} color="#ffffff" hoverColor="#ef6f44" />
                </div>
            </div>
        </div>
    );
}
