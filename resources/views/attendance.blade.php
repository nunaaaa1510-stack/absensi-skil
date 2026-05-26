<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="csrf-token"
        content="{{ csrf_token() }}"
    >

    <title>EduAbsen</title>

    @viteReactRefresh
    @vite('resources/js/attendance.jsx')

</head>

<body>

    <div id="app"></div>

    <script>

        window.attendances =
            @json($attendances);

        window.user =
            @json(auth()->user());

        window.setting =
            @json($setting);

        window.users =
            @json($users);

    </script>

</body>

</html>