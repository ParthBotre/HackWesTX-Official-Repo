import clsx from 'clsx';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navlinks() {
    const pathname = usePathname();
    const links = [
        
        { name: 'Schedule', href: '#SCHEDULE' },
        { name: 'FAQ', href: '#FAQ' },
        { name: 'Mentor', href: 'https://forms.gle/fxKQdyP53vidMiZg7'},
        { name: 'Apply', href: '/2025/Apply' },
    ];

    return (
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-4 md:mt-0">
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        'flex items-center justify-center h-12 w-full md:w-32 p-2 border-2 rounded-lg text-center font-light transition-colors',
                        { 'bg-slate-800 text-white border-white': link.name === 'Apply' },
                        { 'bg-slate-800 text-white border-gray-500 hover:border-white': link.name !== 'Apply' }
                    )}
                >
                    <p>{link.name}</p>
                </Link>
            ))}
        </div>
    );
}
