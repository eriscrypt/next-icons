'use client';

import { useState } from 'react';
import { HugeComponent } from '@/components/HugeComponent';
import Link from 'next/link';

export default function StaticImportPage() {
    const [showHeavy, setShowHeavy] = useState(false);

    return (
        <div className="flex min-h-screen items-center justify-center p-8">
            <div className="flex flex-col gap-8 max-w-4xl w-full">
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6">
                    <h1 className="text-3xl font-bold text-white mb-4">❌ Static Import Example</h1>
                    <p className="text-white/80 mb-4">
                        This page uses regular static import. The entire HugeComponent (~600KB) is loaded with the initial page bundle, even
                        if you never click the button!
                    </p>
                    <p className="text-red-300 text-sm">Open DevTools → Network → See the large initial bundle size</p>
                </div>

                <button
                    onClick={() => setShowHeavy(!showHeavy)}
                    className="px-6 py-3 bg-linear-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                >
                    {showHeavy ? '🔽 Hide Heavy Component' : '📦 Show Heavy Component (Already Loaded!)'}
                </button>

                {showHeavy && <HugeComponent />}

                <Link href="/" className="text-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                    ← Back to Dynamic Import Example
                </Link>
            </div>
        </div>
    );
}
