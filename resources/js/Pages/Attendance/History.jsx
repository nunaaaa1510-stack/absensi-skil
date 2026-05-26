export default function History({

    attendances,
    darkMode

}) {

    return (

        <div>

            <h1 className={`
                text-3xl
                font-black
                mb-6

                ${darkMode
                    ? 'text-white'
                    : 'text-blue-950'}
            `}>

                Attendance History

            </h1>

            <div className={`
                rounded-3xl
                overflow-hidden
                border
                transition-all
                duration-500

                ${darkMode

                    ? `
                        bg-blue-500/10
                        border-blue-300/10
                    `

                    : `
                        bg-white
                        border-blue-100
                        shadow-lg
                        shadow-blue-100/50
                    `
                }
            `}>

                <table className="w-full">

                    <thead className={`
                        ${darkMode
                            ? 'bg-blue-500/10'
                            : 'bg-blue-50'}
                    `}>

                        <tr>

                            <th className={`
                                p-5 text-left

                                ${darkMode
                                    ? 'text-white'
                                    : 'text-blue-950'}
                            `}>

                                Date

                            </th>

                            <th className={`
                                p-5 text-left

                                ${darkMode
                                    ? 'text-white'
                                    : 'text-blue-950'}
                            `}>

                                Check In

                            </th>

                            <th className={`
                                p-5 text-left

                                ${darkMode
                                    ? 'text-white'
                                    : 'text-blue-950'}
                            `}>

                                Check Out

                            </th>

                            <th className={`
                                p-5 text-left

                                ${darkMode
                                    ? 'text-white'
                                    : 'text-blue-950'}
                            `}>

                                Status

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            attendances.map((item) => (

                                <tr
                                    key={item.id}

                                    className={`
                                        border-t

                                        ${darkMode
                                            ? 'border-blue-300/10'
                                            : 'border-blue-100'}
                                    `}
                                >

                                    <td className={`
                                        p-5

                                        ${darkMode
                                            ? 'text-blue-100'
                                            : 'text-blue-900'}
                                    `}>

                                        {item.date}

                                    </td>

                                    <td className={`
                                        p-5

                                        ${darkMode
                                            ? 'text-blue-100'
                                            : 'text-blue-900'}
                                    `}>

                                        {item.check_in}

                                    </td>

                                    <td className={`
                                        p-5

                                        ${darkMode
                                            ? 'text-blue-100'
                                            : 'text-blue-900'}
                                    `}>

                                        {
                                            item.check_out
                                                ? item.check_out
                                                : '-'
                                        }

                                    </td>

                                    <td className="p-5">

                                        {
                                            item.check_out ? (

                                                <span className="
                                                    bg-green-500/20
                                                    text-green-400
                                                    px-4
                                                    py-2
                                                    rounded-xl
                                                    font-bold
                                                ">

                                                    Completed

                                                </span>

                                            ) : (

                                                <span className="
                                                    bg-yellow-500/20
                                                    text-yellow-400
                                                    px-4
                                                    py-2
                                                    rounded-xl
                                                    font-bold
                                                ">

                                                    Working

                                                </span>

                                            )
                                        }

                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}