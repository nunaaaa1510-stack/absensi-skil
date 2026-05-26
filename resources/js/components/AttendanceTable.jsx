export default function AttendanceTable({

    attendances,
    darkMode

}) {

    return (

        <div className={`
            rounded-3xl p-8 overflow-auto

            ${darkMode
                ? 'bg-blue-500/10 border border-white/10'
                : 'bg-white border border-gray-200'}
        `}>

            <h2 className={`
                text-2xl font-bold mb-6

                ${darkMode
                    ? 'text-white'
                    : 'text-black'}
            `}>

                Attendance History

            </h2>

            <table className="w-full">

                <thead>

                    <tr className={`
                        border-b

                        ${darkMode
                            ? 'border-blue-300/10'
                            : 'border-gray-200'}
                    `}>

                        <th className="text-left pb-5">
                            Date
                        </th>

                        <th className="text-left pb-5">
                            Check In
                        </th>

                        <th className="text-left pb-5">
                            Check Out
                        </th>

                        <th className="text-left pb-5">
                            Location
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {
                        attendances.map((attendance) => (

                            <tr
                                key={attendance.id}

                                className={`
                                    border-b

                                    ${darkMode
                                        ? 'border-white/5'
                                        : 'border-gray-100'}
                                `}
                            >

                                <td className="py-5">
                                    {attendance.date}
                                </td>

                                <td className="text-green-400">
                                    {attendance.check_in}
                                </td>

                                <td className="text-red-400">
                                    {attendance.check_out || '-'}
                                </td>

                                <td>

                                    {
                                        attendance.latitude
                                            ? (

                                                <a
                                                    href={`
                                                        https://www.google.com/maps?q=
                                                        ${attendance.latitude},
                                                        ${attendance.longitude}
                                                    `}
                                                    target="_blank"

                                                    className="
                                                        text-blue-400
                                                        hover:underline
                                                    "
                                                >
                                                    View Location
                                                </a>

                                            )
                                            : '-'
                                    }

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

}