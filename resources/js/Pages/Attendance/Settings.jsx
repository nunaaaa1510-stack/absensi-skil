export default function Settings({ darkMode }) {

    const setting = window.setting;

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

                Settings

            </h1>

            <div className={`
                p-8
                rounded-3xl
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

                <h3 className={`
                    text-xl
                    font-black
                    mb-5

                    ${darkMode
                        ? 'text-white'
                        : 'text-blue-950'}
                `}>

                    Auto Checkout Time

                </h3>

                <form
                    action="/settings/update"
                    method="POST"
                >

                    <input
                        type="hidden"
                        name="_token"
                        value={document
                            .querySelector('meta[name="csrf-token"]')
                            .getAttribute('content')}
                    />

                    <input
                        type="time"
                        name="auto_checkout_time"

                        defaultValue={
                            setting?.auto_checkout_time?.substring(0,5)
                        }

                        className={`
                            p-4
                            rounded-2xl
                            border
                            outline-none
                            mb-5
                            transition-all
                            duration-300

                            ${darkMode

                                ? `
                                    bg-blue-500/10
                                    text-white
                                    border-blue-300/10
                                `

                                : `
                                    bg-blue-50
                                    text-blue-950
                                    border-blue-100
                                `
                            }
                        `}
                    />

                    <br />

                    <button
                        type="submit"

                        className="
                            bg-blue-500
                            hover:bg-blue-600
                            transition-all
                            duration-300
                            px-6
                            py-3
                            rounded-2xl
                            text-white
                            font-bold
                            shadow-lg
                            shadow-blue-500/30
                        "
                    >

                        Save Settings

                    </button>

                </form>

                <div className="mt-8">

                    <form
                        action="/logout"
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
                            type="submit"

                            className="
                                bg-red-500
                                hover:bg-red-600
                                transition-all
                                duration-300
                                px-6
                                py-3
                                rounded-2xl
                                text-white
                                font-bold
                            "
                        >

                            Logout

                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}