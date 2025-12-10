'use client';

import { Icon } from '@/components/Icon';
import { dynamicComponent } from '@/utils/dynamic-component';
import { useState } from 'react';

const HugeComponent = dynamicComponent(
    () =>
        // Add artificial delay to simulate slow network
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(import('@/components/HugeComponent'));
            }, 1000); // 1 second delay
        }),
    {
        exportName: 'HugeComponent',
        loading: () => (
            <div className="flex flex-col items-center justify-center p-8 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-white/20">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-white mb-4"></div>
                <p className="text-white text-lg font-semibold">Loading Heavy Component...</p>
                <p className="text-white/60 text-sm mt-2">Dynamically importing ~600KB of code</p>
                <p className="text-white/40 text-xs mt-1">(Simulating slow 3G network)</p>
            </div>
        ),
        ssr: false,
    },
);

export default function Home() {
    const [showHeavy, setShowHeavy] = useState(false);
    const [loadTime, setLoadTime] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const handleToggle = () => {
        if (!showHeavy) {
            const startTime = performance.now();
            setShowHeavy(true);
            // Measure time when component actually loads
            setTimeout(() => {
                const endTime = performance.now();
                setLoadTime(endTime - startTime);
            }, 100);
        } else {
            setShowHeavy(false);
            setLoadTime(null);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col gap-8 p-8 max-w-4xl w-full">
                <h1 className="text-4xl font-bold text-white text-center">Dynamic Loading</h1>
                <div className="flex flex-col gap-4 mt-8">
                    <button
                        onClick={handleToggle}
                        className="px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                    >
                        {showHeavy ? '🔽 Hide Heavy Component' : '🚀 Load Heavy Component Dynamically'}
                    </button>

                    {loadTime !== null && (
                        <div className="text-center text-green-400 text-sm font-mono">⚡ Component loaded in {loadTime.toFixed(2)}ms</div>
                    )}

                    <button
                        onClick={() => setShowExplanation(!showExplanation)}
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors"
                    >
                        {showExplanation ? '📚 Hide Explanation' : '💡 How does dynamic import work?'}
                    </button>

                    {showExplanation && (
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-white/90 text-sm space-y-4">
                            <h3 className="font-bold text-lg text-white">Dynamic Import Benefits:</h3>

                            <div className="space-y-2">
                                <p>
                                    <strong className="text-blue-400">1. Code Splitting:</strong>
                                </p>
                                <p className="pl-4">• Regular import: HugeComponent (~150KB) is bundled with main page</p>
                                <p className="pl-4">• Dynamic import: HugeComponent is in separate chunk, loaded only when needed</p>
                            </div>

                            <div className="space-y-2">
                                <p>
                                    <strong className="text-green-400">2. Initial Bundle Size:</strong>
                                </p>
                                <p className="pl-4">• Without dynamic: Main bundle = Page + HugeComponent (~200KB)</p>
                                <p className="pl-4">• With dynamic: Main bundle = Page only (~50KB), HugeComponent loaded on click</p>
                            </div>

                            <div className="space-y-2">
                                <p>
                                    <strong className="text-purple-400">3. Performance:</strong>
                                </p>
                                <p className="pl-4">• Faster initial page load (smaller bundle)</p>
                                <p className="pl-4">• Better for mobile users (less data upfront)</p>
                                <p className="pl-4">• Improved Time to Interactive (TTI)</p>
                            </div>

                            <div className="space-y-2">
                                <p>
                                    <strong className="text-yellow-400">4. How it works:</strong>
                                </p>
                                <p className="pl-4">• Next.js creates separate JavaScript chunk for HugeComponent</p>
                                <p className="pl-4">• When you click button, browser downloads that chunk</p>
                                <p className="pl-4">• Shows loading state while downloading</p>
                                <p className="pl-4">• Renders component once loaded</p>
                            </div>

                            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                                <p className="text-blue-300 font-mono text-xs">
                                    Open DevTools → Network → Disable cache → Reload page
                                    <br />
                                    Watch for new chunk being loaded when you click the button!
                                </p>
                            </div>
                        </div>
                    )}

                    {showHeavy && <HugeComponent />}

                    <p className="text-center text-white/60 text-sm mt-2">👆 Click to see dynamic component loading in action</p>

                    <a
                        href="/static-example"
                        className="text-center px-4 py-2 bg-linear-to-r from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 text-orange-300 border border-orange-500/30 rounded-lg transition-colors"
                    >
                        🔄 Compare with Static Import Example →
                    </a>
                </div>

                <h1 className="text-4xl font-bold text-white text-center">SVG Icons</h1>

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
