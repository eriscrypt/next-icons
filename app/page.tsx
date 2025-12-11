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
            <div className="flex flex-col items-center justify-center p-8 border bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border-white/20">
                <div className="w-12 h-12 mb-4 border-4 rounded-full animate-spin border-white/20 border-t-white"></div>
                <p className="text-lg font-semibold text-white">Loading Heavy Component...</p>
                <p className="mt-2 text-sm text-white/60">Dynamically importing ~600KB of code</p>
                <p className="mt-1 text-xs text-white/40">(Simulating slow 3G network)</p>
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
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col w-full max-w-4xl gap-8 p-8">
                <h1 className="text-4xl font-bold text-center text-white">Dynamic Loading</h1>
                <div className="flex flex-col gap-4 mt-8">
                    <button
                        onClick={handleToggle}
                        className="px-6 py-3 font-semibold text-white transition-all transform shadow-lg bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl hover:scale-105"
                    >
                        {showHeavy ? '🔽 Hide Heavy Component' : '🚀 Load Heavy Component Dynamically'}
                    </button>

                    {loadTime !== null && (
                        <div className="font-mono text-sm text-center text-green-400">⚡ Component loaded in {loadTime.toFixed(2)}ms</div>
                    )}

                    <button
                        onClick={() => setShowExplanation(!showExplanation)}
                        className="px-4 py-2 text-sm text-white transition-colors rounded-lg bg-white/10 hover:bg-white/20"
                    >
                        {showExplanation ? '📚 Hide Explanation' : '💡 How does dynamic import work?'}
                    </button>

                    {showExplanation && (
                        <div className="p-6 space-y-4 text-sm border bg-white/5 rounded-xl border-white/10 text-white/90">
                            <h3 className="text-lg font-bold text-white">Dynamic Import Benefits:</h3>

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

                            <div className="p-4 mt-4 border rounded-lg bg-blue-500/10 border-blue-500/30">
                                <p className="font-mono text-xs text-blue-300">
                                    Open DevTools → Network → Disable cache → Reload page
                                    <br />
                                    Watch for new chunk being loaded when you click the button!
                                </p>
                            </div>
                        </div>
                    )}

                    {showHeavy && <HugeComponent />}

                    <p className="mt-2 text-sm text-center text-white/60">👆 Click to see dynamic component loading in action</p>

                    <a
                        href="/static-example"
                        className="px-4 py-2 text-center text-orange-300 transition-colors border rounded-lg bg-linear-to-r from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 border-orange-500/30"
                    >
                        🔄 Compare with Static Import Example →
                    </a>
                </div>

                <h1 className="text-4xl font-bold text-center text-white">SVG Icons</h1>

                <div className="flex items-center justify-center gap-6 px-12 py-6 border rounded-2xl border-white/10">
                    <Icon name="usdt" size={64} />
                    <Icon name="atom" size={64} />
                    <Icon name="wkava" size={64} />
                    <Icon name="zodiac-cancer" size={224} />
                    <Icon name="zodiac-unknown" size={200} />
                </div>

                <div className="flex items-center justify-center gap-6 px-12 py-6 border rounded-2xl border-white/10">
                    <Icon name="next" size={64} color="#10b9ae" hoverColor="#ef6f44" />
                    <Icon name="next" size={48} color="#10b981" hoverColor="#ef6f44" />
                    <Icon name="next" size={32} color="#0070f3" hoverColor="#ef6f44" />
                    <Icon name="next" size={24} color="#ffffff" hoverColor="#ef6f44" />
                </div>

                <div className="flex items-center justify-center gap-6 px-12 py-6 border rounded-2xl border-white/10">
                    <Icon name="vercel" size={64} color="#10b9ae" hoverColor="#ef6f44" />
                    <Icon name="vercel" size={48} color="#10b981" hoverColor="#ef6f44" />
                    <Icon name="vercel" size={32} color="#0070f3" hoverColor="#ef6f44" />
                    <Icon name="vercel" size={24} color="#ffffff" hoverColor="#ef6f44" />
                </div>

                <div className="flex items-center justify-center gap-6 px-12 py-6 border rounded-2xl border-white/10">
                    <Icon name="globe" size={64} color="#10b9ae" hoverColor="#ef6f44" />
                    <Icon name="globe" size={48} color="#10b981" hoverColor="#ef6f44" />
                    <Icon name="globe" size={32} color="#0070f3" hoverColor="#ef6f44" />
                    <Icon name="globe" size={24} color="#ffffff" hoverColor="#ef6f44" />
                </div>
            </div>
        </div>
    );
}
