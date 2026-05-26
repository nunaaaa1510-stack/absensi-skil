import {
    LayoutDashboard,
    History,
    Settings,
    User,
    Users
} from 'lucide-react';

export default function Sidebar({

    page,
    setPage,
    darkMode

}) {

    const isAdmin =
        window.user?.role === 'admin';

    return (

        <div className={`
            w-[270px]
            backdrop-blur-xl
            border-r
            p-6
            flex
            flex-col
            justify-between
            transition-all
            duration-500

            ${darkMode
                ? `
                    bg-blue-500/10
                    border-blue-300/10
                `
                : `
                    bg-white/80
                    border-blue-100
                `}
        `}>

            <div>

                <h1 className={`
                    text-3xl
                    font-black
                    mb-12

                    ${darkMode
                        ? 'text-white'
                        : 'text-blue-950'}
                `}>

                    EduAbsen

                </h1>

                <MenuItem
                    active={page === 'dashboard'}
                    icon={<LayoutDashboard size={20} />}
                    text="Dashboard"
                    onClick={() => setPage('dashboard')}
                    darkMode={darkMode}
                />

                <MenuItem
                    active={page === 'history'}
                    icon={<History size={20} />}
                    text="History"
                    onClick={() => setPage('history')}
                    darkMode={darkMode}
                />

                <MenuItem
                    active={page === 'settings'}
                    icon={<Settings size={20} />}
                    text="Settings"
                    onClick={() => setPage('settings')}
                    darkMode={darkMode}
                />

                {
                    isAdmin && (

                        <MenuItem
                            active={page === 'employees'}
                            icon={<Users size={20} />}
                            text="Employees"
                            onClick={() => setPage('employees')}
                            darkMode={darkMode}
                        />

                    )
                }

            </div>

            <div className={`
                rounded-3xl
                p-4
                flex
                items-center
                gap-4
                border

                ${darkMode
                    ? `
                        bg-blue-500/10
                        border-blue-300/10
                    `
                    : `
                        bg-blue-50
                        border-blue-100
                    `}
            `}>

                <div className="
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-blue-500
                    text-white
                ">

                    <User />

                </div>

                <div>

                    <h3 className={`
                        font-bold

                        ${darkMode
                            ? 'text-white'
                            : 'text-blue-950'}
                    `}>

                        {window.user.name}

                    </h3>

                    <p className={`
                        text-sm

                        ${darkMode
                            ? 'text-blue-200'
                            : 'text-blue-700'}
                    `}>

                        {
                            window.user.role === 'admin'
                                ? 'Administrator'
                                : 'Employee'
                        }

                    </p>

                </div>

            </div>

        </div>

    );

}

function MenuItem({

    icon,
    text,
    active,
    onClick,
    darkMode

}) {

    return (

        <button
            onClick={onClick}
            className={`
                w-full
                flex
                items-center
                gap-3
                p-4
                rounded-2xl
                mb-3
                transition-all
                duration-300

                ${active

                    ? `
                        bg-blue-500
                        text-white
                        shadow-lg
                        shadow-blue-500/30
                    `

                    : darkMode

                        ? `
                            text-blue-100
                            hover:bg-blue-500/10
                        `

                        : `
                            text-blue-900
                            hover:bg-blue-100
                        `
                }
            `}
        >

            {icon}

            {text}

        </button>

    );

}