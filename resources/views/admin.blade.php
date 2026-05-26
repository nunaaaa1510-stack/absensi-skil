<!DOCTYPE html>
<html>

<head>

    <title>
        Admin Dashboard
    </title>

    <script src="https://cdn.tailwindcss.com"></script>

</head>

<body class="bg-slate-900 text-white min-h-screen p-10">

    <div class="flex justify-between items-center mb-10">

        <div>

            <h1 class="text-5xl font-bold mb-2">
                Admin Dashboard
            </h1>

            <p class="text-gray-400">
                Monitor all employee attendance
            </p>

        </div>

        <a
            href="/attendance"
            class="
                bg-blue-500 hover:bg-blue-600
                transition-all duration-300
                px-6 py-3 rounded-2xl
                font-bold
            "
        >
            Back
        </a>

    </div>

    <div class="
        bg-white/10
        border border-blue-300/10
        backdrop-blur-xl
        rounded-3xl
        p-8
        overflow-auto
    ">

        <table class="w-full">

            <thead>

                <tr class="border-b border-blue-300/10">

                    <th class="text-left pb-5">
                        Employee
                    </th>

                    <th class="text-left pb-5">
                        Date
                    </th>

                    <th class="text-left pb-5">
                        Check In
                    </th>

                    <th class="text-left pb-5">
                        Check Out
                    </th>

                    <th class="text-left pb-5">
                        Latitude
                    </th>

                    <th class="text-left pb-5">
                        Longitude
                    </th>

                </tr>

            </thead>

            <tbody>

                @foreach($attendances as $attendance)

                    <tr class="border-b border-white/5">

                        <td class="py-5">
                            {{ $attendance->user->name }}
                        </td>

                        <td>
                            {{ $attendance->date }}
                        </td>

                        <td class="text-green-400">
                            {{ $attendance->check_in }}
                        </td>

                        <td class="text-red-400">
                            {{ $attendance->check_out }}
                        </td>

                        <td class="text-gray-300">
                            {{ $attendance->latitude }}
                        </td>

                        <td class="text-gray-300">
                            {{ $attendance->longitude }}
                        </td>

                    </tr>

                @endforeach

            </tbody>

        </table>

    </div>

</body>

</html>