export default function Employees({

    users,
    darkMode

}) {

    return (

        <div>

            <div className="
                flex
                justify-between
                items-center
                mb-8
            ">

                <h1 className={`
                    text-3xl
                    font-black

                    ${darkMode
                        ? 'text-white'
                        : 'text-blue-950'}
                `}>

                    Employee Management

                </h1>

            </div>

            {/* CREATE EMPLOYEE */}

            <div className={`
                p-8
                rounded-3xl
                border
                mb-8

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
                    text-xl
                    font-black
                    mb-6

                    ${darkMode
                        ? 'text-white'
                        : 'text-blue-950'}
                `}>

                    Create Employee

                </h2>

                <form
                    action="/employees/create"
                    method="POST"
                    className="
                        grid
                        grid-cols-3
                        gap-4
                    "
                >

                    <input
                        type="hidden"
                        name="_token"
                        value={document
                            .querySelector('meta[name="csrf-token"]')
                            .getAttribute('content')}
                    />

                    <input
                        type="text"
                        name="name"
                        placeholder="Employee Name"

                        className={`
                            p-4
                            rounded-2xl
                            border
                            outline-none

                            ${darkMode

                                ? `
                                    bg-blue-500/10
                                    border-blue-300/10
                                    text-white
                                `

                                : `
                                    bg-blue-50
                                    border-blue-100
                                    text-blue-950
                                `
                            }
                        `}

                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Employee Email"

                        className={`
                            p-4
                            rounded-2xl
                            border
                            outline-none

                            ${darkMode

                                ? `
                                    bg-blue-500/10
                                    border-blue-300/10
                                    text-white
                                `

                                : `
                                    bg-blue-50
                                    border-blue-100
                                    text-blue-950
                                `
                            }
                        `}

                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"

                        className={`
                            p-4
                            rounded-2xl
                            border
                            outline-none

                            ${darkMode

                                ? `
                                    bg-blue-500/10
                                    border-blue-300/10
                                    text-white
                                `

                                : `
                                    bg-blue-50
                                    border-blue-100
                                    text-blue-950
                                `
                            }
                        `}

                        required
                    />

                    <button
                        className="
                            col-span-3
                            bg-blue-500
                            hover:bg-blue-600
                            transition-all
                            duration-300
                            py-4
                            rounded-2xl
                            text-white
                            font-bold
                        "
                    >

                        Create Employee

                    </button>

                </form>

            </div>

            {/* EMPLOYEE LIST */}

            <div className="space-y-4">

                {
                    users.map((user) => (

                        <div
                            key={user.id}

                            className={`
                                flex
                                justify-between
                                items-center
                                p-5
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
                            `}
                        >

                            <div>

                                <h2 className={`
                                    font-bold
                                    text-xl

                                    ${darkMode
                                        ? 'text-white'
                                        : 'text-blue-950'}
                                `}>

                                    {user.name}

                                </h2>

                                <p className={`
                                    ${darkMode
                                        ? 'text-blue-200'
                                        : 'text-blue-700'}
                                `}>

                                    {user.email}

                                </p>

                            </div>

                            <form
                                action={`/employees/delete/${user.id}`}
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
                                        px-5
                                        py-3
                                        rounded-2xl
                                        text-white
                                        font-bold
                                    "
                                >

                                    Delete

                                </button>

                            </form>

                        </div>

                    ))
                }

            </div>

        </div>

    );

}