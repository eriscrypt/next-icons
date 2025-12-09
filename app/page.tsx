import { Icon } from '@/components/Icon';

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col gap-8 p-8">
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
