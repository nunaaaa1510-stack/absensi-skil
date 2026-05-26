<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        Register
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
            from-indigo-700
            to-blue-900
            p-16
            text-white
            flex
            flex-col
            justify-center
        ">

            <h1 class="
                text-6xl
                font-black
                leading-tight
                mb-6
            ">

                Join <br>
                us today!

            </h1>

            <p class="
                text-blue-100
                text-lg
                leading-relaxed
                mb-10
            ">

                Create your employee account
                and start using
                the modern attendance system.

            </p>

            <a
                href="/login"

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

                Back to Login

            </a>

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

                Register

            </h2>

            <form
                method="POST"
                action="{{ route('register') }}"
                class="space-y-6"
            >

                @csrf

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"

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

                <input
                    type="email"
                    name="email"
                    placeholder="Email"

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

                <input
                    type="password"
                    name="password"
                    placeholder="Password"

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

                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirm Password"

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

                <button
                    class="
                        w-full
                        bg-gradient-to-r
                        from-indigo-500
                        to-blue-600
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

                    Register

                </button>

            </form>

        </div>

    </div>

</body>

</html>