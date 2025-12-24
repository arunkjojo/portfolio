import { FOOTER_CONTENT } from '@/constants';

export function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-slate-950">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                <p>{FOOTER_CONTENT.copyright}</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-slate-300 transition-colors">{FOOTER_CONTENT.privacy}</a>
                    <a href="#" className="hover:text-slate-300 transition-colors">{FOOTER_CONTENT.terms}</a>
                </div>
            </div>
        </footer>
    );
}
