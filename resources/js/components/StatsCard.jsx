export default function StatsCard({

    title,
    value,
    color,
    darkMode

}) {

    return (

        <div className={`
            backdrop-blur-xl
            p-6
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

            <p className={`
                mb-3
                font-medium

                ${darkMode
                    ? 'text-blue-200'
                    : 'text-blue-700'}
            `}>

                {title}

            </p>

            <h1 className={`
                text-4xl
                font-black
                ${color}
            `}>

                {value}

            </h1>

        </div>

    );

}