import {Outlet} from 'react-router-dom';
import Sidebar from './Sidebar';

const Shell = () => {
    return (
        <div className="flex h-screen bg-slate-50">
            <Sidebar/>
            <main className="flex-1 overflow-y-auto p-8">
                <div className="max-w-7xl mx-auto">
                    <Outlet/>
                </div>
            </main>
        </div>
    );
};

export default Shell;