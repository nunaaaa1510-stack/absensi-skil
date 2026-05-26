import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

export default function AttendanceChart({

    darkMode

}) {

    const data = [

        { day:'Mon', total:4 },
        { day:'Tue', total:7 },
        { day:'Wed', total:5 },
        { day:'Thu', total:8 },
        { day:'Fri', total:6 },

    ];

    return (

        <div className={`
            p-6
            rounded-3xl
            transition-all
            duration-500

            ${darkMode
                ? 'bg-blue-500/10 border border-white/10'
                : 'bg-white border border-blue-100 shadow-sm'}
        `}>

            <h2 className={`
                text-2xl
                font-bold
                mb-6

                ${darkMode
                    ? 'text-white'
                    : 'text-blue-950'}
            `}>

                Attendance Activity

            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <LineChart data={data}>

                    <XAxis
                        dataKey="day"
                        stroke={
                            darkMode
                                ? '#94a3b8'
                                : '#1e3a8a'
                        }
                    />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="total"
                        stroke="#3b82f6"
                        strokeWidth={4}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );
}