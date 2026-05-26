import { useEffect, useState } from 'react';

import {
    Moon,
    Sun
} from 'lucide-react';

export default function Topbar({
    darkMode,
    setDarkMode
}) {

    const user = window.user;

    const [time, setTime] = useState('');

    const [date, setDate] = useState('');

    const [greeting, setGreeting] = useState('');

    useEffect(() => {

        const interval = setInterval(() => {

            const now = new Date();

            setTime(
                now.toLocaleTimeString('id-ID')
            );

            setDate(
                now.toLocaleDateString(
                    'id-ID',
                    {
                        weekday:'long',
                        day:'numeric',
                        month:'long',
                        year:'numeric'
                    }
                )
            );

            const hour = now.getHours();

            if(hour < 12){
                setGreeting('Good Morning');
            }
            else if(hour < 18){
                setGreeting('Good Afternoon');
            }
            else{
                setGreeting('Good Evening');
            }

        },1000);

        return () => clearInterval(interval);

    },[]);

    return (

        <div className="flex justify-between items-center mb-10">

            <div>

                <h1 className={`
                    text-4xl
                    font-black
                    mb-2

                    ${darkMode
                        ? 'text-white'
                        : 'text-blue-950'}
                `}>

                    {greeting}, {user.name} 

                </h1>

                <p className={`
                    font-medium

                    ${darkMode
                        ? 'text-blue-200'
                        : 'text-blue-700'}
                `}>

                    {date}

                </p>

            </div>

            <div className="flex items-center gap-4">

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`
                        p-4
                        rounded-2xl
                        transition-all
                        duration-300
                        border

                        ${darkMode
                            ? `
                                bg-blue-500/10
                                border-blue-400/20
                                text-white
                                hover:bg-blue-500/20
                            `
                            : `
                                bg-white
                                border-blue-200
                                text-blue-900
                                hover:bg-blue-50
                            `}
                    `}
                >

                    {darkMode
                        ? <Sun />
                        : <Moon />
                    }

                </button>

                <div className={`
                    px-6
                    py-4
                    rounded-2xl
                    text-xl
                    font-bold
                    border

                    ${darkMode
                        ? `
                            bg-blue-500/10
                            border-blue-400/20
                            text-white
                        `
                        : `
                            bg-white
                            border-blue-200
                            text-blue-950
                        `}
                `}>

                    {time}

                </div>

            </div>

        </div>
    );
}