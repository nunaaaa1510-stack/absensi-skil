<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        Login
    </title>

    <script src="https://cdn.tailwindcss.com"></script>

</head>

<body class="
    min-h-screen
    flex
    items-center
    justify-center
    bg-gradient-to-br
    from-purple-300
    via-indigo-200
    to-blue-200
    p-10
">

    <div class="
        w-full
        max-w-5xl
        bg-white/70
        backdrop-blur-xl
        rounded-[40px]
        overflow-hidden
        shadow-2xl
        grid
        grid-cols-2
    ">

        <!-- LEFT -->

        <div class="
            bg-gradient-to-br
            from-blue-700
            to-indigo-900
            p-16
            text-white
            flex
            flex-col
            justify-center
            relative
        ">

            <div class="
                absolute
                w-72
                h-72
                bg-white/10
                rounded-full
                top-[-80px]
                left-[-80px]
            "></div>

            <div class="relative z-10">

                <h1 class="
                    text-6xl
                    font-black
                    leading-tight
                    mb-6
                ">

                    Hello, <br>
                    welcome!

                </h1>

                <p class="
                    text-blue-100
                    text-lg
                    leading-relaxed
                    mb-10
                ">

                    Smart attendance system
                    with scheduler,
                    GPS location,
                    admin dashboard,
                    analytics and modern UI.

                </p>

                <a
                    href="/register"

                    class="
                        inline-block
                        bg-white
                        text-indigo-900
                        px-8
                        py-4
                        rounded-2xl
                        font-bold
                        hover:scale-105
                        transition-all
                        duration-300
                    "
                >

                    Create Account

                </a>

            </div>

        </div>

        <!-- RIGHT -->

        <div class="
            p-16
            flex
            flex-col
            justify-center
        ">

            <h2 class="
                text-4xl
                font-black
                text-gray-800
                mb-10
            ">

                Login

            </h2>

            <form
                method="POST"
                action="{{ route('login') }}"
                class="space-y-6"
            >

                @csrf

                <div>

                    <label class="
                        block
                        text-gray-700
                        mb-2
                        font-semibold
                    ">

                        Email

                    </label>

                    <input
                        type="email"
                        name="email"

                        class="
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            px-5
                            py-4
                            outline-none
                            focus:ring-4
                            focus:ring-indigo-200
                        "

                        required
                    >

                </div>

                <div>

                    <label class="
                        block
                        text-gray-700
                        mb-2
                        font-semibold
                    ">

                        Password

                    </label>

                    <input
                        type="password"
                        name="password"

                        class="
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            px-5
                            py-4
                            outline-none
                            focus:ring-4
                            focus:ring-indigo-200
                        "

                        required
                    >

                </div>

                <button
                    class="
                        w-full
                        bg-gradient-to-r
                        from-blue-500
                        to-indigo-600
                        text-white
                        py-4
                        rounded-2xl
                        font-bold
                        text-lg
                        hover:scale-[1.02]
                        transition-all
                        duration-300
                    "
                >

                    Login

                </button>

            </form>

        </div>

    </div>

</body>

</html>