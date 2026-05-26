import { useState } from 'react';

import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import StatsCard from '../../components/StatsCard';
import AttendanceTable from '../../components/AttendanceTable';
import AttendanceChart from '../../components/AttendanceChart';

import History from './History';
import Settings from './Settings';
import Employees from './Employees';

export default function Index() {

    const attendances = window.attendances || [];

    const users = window.users || [];

    const [page, setPage] = useState('dashboard');

    const [darkMode, setDarkMode] = useState(true);

    const totalAttendance = attendances.length;

    const completedAttendance = attendances.filter(
        item => item.check_out
    ).length;

    const workingAttendance = attendances.filter(
        item => !item.check_out
    ).length;

    const renderPage = () => {

        /*
        |--------------------------------------------------------------------------
        | HISTORY
        |--------------------------------------------------------------------------
        */

        if (page === 'history') {

            return (

                <History
                    attendances={attendances}
                    darkMode={darkMode}
                />

            );

        }

        /*
        |--------------------------------------------------------------------------
        | SETTINGS
        |--------------------------------------------------------------------------
        */

        if (page === 'settings') {

            return (

                <Settings
                    darkMode={darkMode}
                />

            );

        }

        /*
        |--------------------------------------------------------------------------
        | EMPLOYEES
        |--------------------------------------------------------------------------
        */

        if (page === 'employees') {

            return (

                <Employees
                    users={users}
                    darkMode={darkMode}
                />

            );

        }

        /*
        |--------------------------------------------------------------------------
        | DASHBOARD
        |--------------------------------------------------------------------------
        */

        return (

            <>

                {/* STATS */}

                <div className="grid grid-cols-3 gap-6 mb-8">

                    <StatsCard
                        title="Total Attendance"
                        value={totalAttendance}
                        color="text-blue-400"
                        darkMode={darkMode}
                    />

                    <StatsCard
                        title="Completed"
                        value={completedAttendance}
                        color="text-green-400"
                        darkMode={darkMode}
                    />

                    <StatsCard
                        title="Working"
                        value={workingAttendance}
                        color="text-yellow-400"
                        darkMode={darkMode}
                    />

                </div>

                {/* CHART */}

                <div className="mb-8">

                    <AttendanceChart
                        darkMode={darkMode}
                    />

                </div>

                {/* BUTTONS */}

                <div className="flex gap-4 mb-8 flex-wrap">

                    {/* CHECK IN */}

                    <form
                        action="/attendance/checkin"
                        method="POST"
                        id="checkinForm"
                    >

                        <input
                            type="hidden"
                            name="_token"
                            value={document
                                .querySelector('meta[name="csrf-token"]')
                                .getAttribute('content')}
                        />

                        <input
                            type="hidden"
                            name="latitude"
                            id="latitude"
                        />

                        <input
                            type="hidden"
                            name="longitude"
                            id="longitude"
                        />

                        <button
                            type="button"

                            onClick={() => {

                                navigator.geolocation.getCurrentPosition(

                                    (position) => {

                                        document.getElementById(
                                            'latitude'
                                        ).value =
                                            position.coords.latitude;

                                        document.getElementById(
                                            'longitude'
                                        ).value =
                                            position.coords.longitude;

                                        document.getElementById(
                                            'checkinForm'
                                        ).submit();

                                    },

                                    () => {

                                        alert(
                                            'Location access denied 😭'
                                        );

                                    }

                                );

                            }}

                            className="
                                bg-green-500
                                hover:bg-green-600
                                transition-all
                                duration-300
                                px-8
                                py-4
                                rounded-2xl
                                text-white
                                font-bold
                                shadow-lg
                                shadow-green-500/20
                            "
                        >

                            Check In

                        </button>

                    </form>

                    {/* CHECK OUT */}

                    <form
                        action="/attendance/checkout"
                        method="POST"
                    >

                        <input
                            type="hidden"
                            name="_token"
                            value={document
                                .querySelector('meta[name="csrf-token"]')
                                .getAttribute('content')}
                        />

                        <button
                            className="
                                bg-red-500
                                hover:bg-red-600
                                transition-all
                                duration-300
                                px-8
                                py-4
                                rounded-2xl
                                text-white
                                font-bold
                                shadow-lg
                                shadow-red-500/20
                            "
                            type="submit"
                        >

                            Check Out

                        </button>

                    </form>

                    {/* ADMIN BUTTON */}

                    {
                        window.user?.role === 'admin' && (

                            <a
                                href="/admin"

                                className="
                                    bg-blue-500
                                    hover:bg-blue-600
                                    transition-all
                                    duration-300
                                    px-8
                                    py-4
                                    rounded-2xl
                                    text-white
                                    font-bold
                                    shadow-lg
                                    shadow-blue-500/20
                                "
                            >

                                Admin Dashboard

                            </a>

                        )
                    }

                </div>

                {/* LOCATION */}

                <div className={`
                    mb-8
                    p-6
                    rounded-3xl
                    border

                    ${darkMode

                        ? `
                            bg-blue-500/10
                            border-blue-300/10
                        `

                        : `
                            bg-white
                            border-blue-100
                        `
                    }
                `}>

                    <h2 className={`
                        text-2xl
                        font-black
                        mb-4

                        ${darkMode
                            ? 'text-white'
                            : 'text-blue-950'}
                    `}>

                        Attendance Location

                    </h2>

                    <p className={`
                        text-sm

                        ${darkMode
                            ? 'text-blue-200'
                            : 'text-blue-700'}
                    `}>

                        Your location will automatically
                        be recorded during check in.

                    </p>

                </div>

                {/* TABLE */}

                <AttendanceTable
                    attendances={attendances}
                    darkMode={darkMode}
                />

            </>

        );

    };

    return (

        <div className={`
            min-h-screen
            p-6
            transition-all
            duration-500

            ${darkMode
                ? 'bg-gradient-to-br from-[#071120] via-[#0f172a] to-[#172554]'
                : 'bg-gradient-to-br from-blue-100 via-sky-50 to-white'}
        `}>

            <div className={`
                flex
                min-h-[95vh]
                rounded-[40px]
                overflow-hidden
                backdrop-blur-xl
                transition-all
                duration-500

                ${darkMode

                    ? `
                        border
                        border-blue-300/10
                        bg-blue-500/10
                    `

                    : `
                        bg-white/80
                        border
                        border-blue-100
                    `
                }
            `}>

                <Sidebar
                    page={page}
                    setPage={setPage}
                    darkMode={darkMode}
                />

                <div className="
                    flex-1
                    p-10
                    overflow-auto
                ">

                    <Topbar
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />

                    {renderPage()}

                </div>

            </div>

        </div>

    );

}