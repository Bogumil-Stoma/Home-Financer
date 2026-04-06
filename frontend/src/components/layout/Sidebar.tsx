import { NavLink } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, Globe, Wallet } from 'lucide-react';

const navItems = [
    { to: '/budget', icon: Wallet, label: 'Budget' },
    { to: '/investments', icon: TrendingUp, label: 'Investments' },
    { to: '/markets', icon: Globe, label: 'Markets' },
];

const Sidebar = () => {
    return (
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
            <div className="p-6">
                <h1 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
                    <LayoutDashboard /> Financer
                </h1>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                isActive
                                    ? 'bg-indigo-50 text-indigo-700 font-medium'
                                    : 'text-slate-600 hover:bg-slate-50'
                            }`
                        }
                    >
                        <item.icon size={20} />
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;