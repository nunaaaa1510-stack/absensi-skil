<nav class="
    bg-[#0f172a]
    border-b
    border-blue-300/10
    px-8
    py-5
    flex
    justify-between
    items-center
">

    <div class="flex items-center gap-3">

        <div class="
            w-10
            h-10
            rounded-2xl
            bg-blue-500
            flex
            items-center
            justify-center
            font-black
            text-white
        ">

            A

        </div>

        <div>

            <h1 class="text-white font-bold text-xl">
                Attendance App
            </h1>

            <p class="text-gray-400 text-sm">
                Smart Employee System
            </p>

        </div>

    </div>

    <div class="flex items-center gap-5">

        <div class="text-right">

            <h2 class="text-white font-semibold">
                {{ Auth::user()->name }}
            </h2>

            <p class="text-gray-400 text-sm">
                {{ Auth::user()->email }}
            </p>

        </div>

        <a
            href="/attendance"

            class="
                bg-white/10
                hover:bg-white/20
                transition-all
                duration-300
                px-5
                py-3
                rounded-2xl
                text-white
                font-semibold
            "
        >

            Dashboard

        </a>

        @if(Auth::user()->role === 'admin')

            <a
                href="/admin"

                class="
                    bg-blue-500
                    hover:bg-blue-600
                    transition-all
                    duration-300
                    px-5
                    py-3
                    rounded-2xl
                    text-white
                    font-semibold
                "
            >

                Admin

            </a>

        @endif

        <form
            method="POST"
            action="{{ route('logout') }}"
        >

            @csrf

            <button
                class="
                    bg-red-500
                    hover:bg-red-600
                    transition-all
                    duration-300
                    px-5
                    py-3
                    rounded-2xl
                    text-white
                    font-semibold
                "
            >

                Logout

            </button>

        </form>

    </div>

</nav>