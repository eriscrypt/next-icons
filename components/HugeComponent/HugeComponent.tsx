'use client';

import React from 'react';
import { Icon } from '../Icon';

type TypeOfIcon = 'next' | 'vercel' | 'globe';

// Simulate heavy computations
const heavyComputation = (num: number): number => {
    let result = 0;
    for (let i = 0; i < 10000; i++) {
        result += Math.sqrt(num * i) * Math.sin(i) * Math.cos(i);
    }
    return result;
};

// Simulate large dataset
const generateLargeDataset = (size: number) => {
    return Array.from({ length: size }, (_, i) => ({
        id: i,
        name: `Item ${i}`,
        description: `This is a detailed description for item ${i} with lots of text to simulate real data`,
        value: Math.random() * 1000,
        timestamp: new Date().toISOString(),
        tags: [`tag${i % 10}`, `category${i % 5}`, `type${i % 3}`],
        metadata: {
            created: new Date().toISOString(),
            updated: new Date().toISOString(),
            author: `User ${i % 20}`,
            priority: i % 5,
            status: ['active', 'pending', 'completed'][i % 3],
        },
    }));
};

export const HugeComponent: React.FC = () => {
    const [count, setCount] = React.useState(0);
    const [activeTab, setActiveTab] = React.useState(0);
    const [filterText, setFilterText] = React.useState('');
    const [selectedItems, setSelectedItems] = React.useState<Set<number>>(new Set());
    const [isExpanded, setIsExpanded] = React.useState(false);

    // Large data array
    const [largeData] = React.useState(() => generateLargeDataset(500));

    // Multiple useEffect hooks to simulate complex logic
    React.useEffect(() => {
        console.log('Component mounted - Heavy component initialized');
        const interval = setInterval(() => {
            // Simulate background updates
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        console.log('Count changed:', count);
        if (count > 0) {
            const result = heavyComputation(count);
            console.log('Heavy computation result:', result);
        }
    }, [count]);

    React.useEffect(() => {
        console.log('Active tab changed:', activeTab);
    }, [activeTab]);

    React.useEffect(() => {
        console.log('Filter text changed:', filterText);
    }, [filterText]);

    // Data filtering
    const filteredData = React.useMemo(() => {
        return largeData.filter(
            (item) =>
                item.name.toLowerCase().includes(filterText.toLowerCase()) ||
                item.description.toLowerCase().includes(filterText.toLowerCase()),
        );
    }, [largeData, filterText]);

    // Complex calculations
    const statistics = React.useMemo(() => {
        const total = filteredData.length;
        const sum = filteredData.reduce((acc, item) => acc + item.value, 0);
        const avg = sum / total;
        const max = Math.max(...filteredData.map((item) => item.value));
        const min = Math.min(...filteredData.map((item) => item.value));
        return { total, sum, avg, max, min };
    }, [filteredData]);

    const toggleItem = (id: number) => {
        const newSelected = new Set(selectedItems);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedItems(newSelected);
    };

    return (
        <div className="p-8 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl">
            <div className="flex flex-col gap-6 text-white">
                {/* Header Section */}
                <div className="flex items-center gap-4">
                    <Icon name="next" size={48} color="white" hoverColor="#fbbf24" />
                    <h2 className="text-3xl font-bold">Heavy Component Loaded! 🚀</h2>
                </div>

                <p className="text-lg opacity-90">
                    This component contains 500 data items, multiple states, effects, and heavy computations. Component size: ~
                    {Math.round(new Blob([JSON.stringify(largeData)]).size / 1024)}KB of data
                </p>

                {/* Statistics Panel */}
                <div className="grid grid-cols-5 gap-4 bg-white/10 p-4 rounded-xl">
                    <div className="text-center">
                        <div className="text-2xl font-bold">{statistics.total}</div>
                        <div className="text-sm opacity-75">Total Items</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold">{statistics.sum.toFixed(0)}</div>
                        <div className="text-sm opacity-75">Sum</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold">{statistics.avg.toFixed(2)}</div>
                        <div className="text-sm opacity-75">Average</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold">{statistics.max.toFixed(2)}</div>
                        <div className="text-sm opacity-75">Max</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold">{statistics.min.toFixed(2)}</div>
                        <div className="text-sm opacity-75">Min</div>
                    </div>
                </div>

                {/* Counter Section */}
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
                                onClick={() => setCount(0)}
                                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                            >
                                Reset
                            </button>
                            <button
                                onClick={() => setCount((c) => c + 1)}
                                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Grid of animated boxes */}
                    <div className="grid grid-cols-8 gap-2">
                        {Array.from({ length: 64 }).map((_, i) => (
                            <div
                                key={i}
                                className="aspect-square bg-white/20 rounded-lg animate-pulse"
                                style={{ animationDelay: `${i * 50}ms` }}
                            />
                        ))}
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="bg-white/10 p-4 rounded-xl">
                    <div className="flex gap-2 mb-4">
                        {['Data', 'Charts', 'Settings', 'Analytics', 'Reports'].map((tab, idx) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(idx)}
                                className={`px-4 py-2 rounded-lg transition-colors ${
                                    activeTab === idx ? 'bg-white/30' : 'bg-white/10 hover:bg-white/20'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="text-center py-8 text-lg">
                        Active Tab: {['Data', 'Charts', 'Settings', 'Analytics', 'Reports'][activeTab]}
                    </div>
                </div>

                {/* Data Table Section */}
                <div className="bg-white/10 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">Data Table ({filteredData.length} items)</h3>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                        >
                            {isExpanded ? 'Collapse' : 'Expand'}
                        </button>
                    </div>

                    <input
                        type="text"
                        placeholder="Filter items..."
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 mb-4"
                    />

                    <div className="text-sm mb-2">Selected: {selectedItems.size} items</div>

                    {isExpanded && (
                        <div className="max-h-96 overflow-y-auto space-y-2">
                            {filteredData.slice(0, 100).map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => toggleItem(item.id)}
                                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                                        selectedItems.has(item.id) ? 'bg-white/30' : 'bg-white/10 hover:bg-white/20'
                                    }`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="font-semibold">{item.name}</div>
                                            <div className="text-sm opacity-75">{item.description}</div>
                                            <div className="text-xs mt-1 opacity-60">
                                                {item.tags.join(', ')} • {item.metadata.status}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-mono">{item.value.toFixed(2)}</div>
                                            <div className="text-xs opacity-60">Priority: {item.metadata.priority}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {filteredData.length > 100 && (
                                <div className="text-center py-4 text-sm opacity-75">... and {filteredData.length - 100} more items</div>
                            )}
                        </div>
                    )}
                </div>

                {/* Icons Grid */}
                <div className="flex gap-3 justify-center flex-wrap">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <Icon
                            key={i}
                            name={['vercel', 'globe', 'next'][i % 3] as TypeOfIcon}
                            size={32}
                            color="white"
                            hoverColor="#fbbf24"
                        />
                    ))}
                </div>

                {/* Footer with more data */}
                <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="bg-white/10 p-4 rounded-lg">
                            <div className="text-lg font-semibold mb-2">Section {i + 1}</div>
                            <div className="text-sm opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                            <div className="mt-2 flex gap-2">
                                {Array.from({ length: 3 }).map((_, j) => (
                                    <div key={j} className="h-2 bg-white/20 rounded flex-1" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-sm text-center opacity-75">💡 This component was loaded dynamically with Next.js dynamic imports</p>
            </div>
        </div>
    );
};
