<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Meta Tags -->
    <!-- Required Meta Tag -->

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="handheldfriendly" content="true" />
    <meta name="MobileOptimized" content="width" />
    <meta name="description" content="DevsWolf" />
    <meta name="author" content="DevsWolf">
    <meta name="keywords" content="DevsWolf" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ config('app.template') }}assets/images/favicon.ico">

    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap">

    <!-- =================================================================================================================== TEMPLATE -->

    <!-- Theme CSS -->
    <link rel="stylesheet" type="text/css" href="{{ config('app.template') }}assets/css/style.min.css">
    {{--    <link rel="stylesheet" type="text/css" href="{{ config('app.template') }}assets/css/main.css">--}}

    <!-- Plugins CSS -->
    <!-- =================================================================================================================== TEMPLATE END -->

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body>
@inertia
</body>

<!-- =================================================================================================================== TEMPLATE -->

<!-- Import Js Files -->
<script src="{{ config('app.template') }}assets/libs/jquery/dist/jquery.min.js"></script>
<script src="{{ config('app.template') }}assets/libs/simplebar/dist/simplebar.min.js"></script>
<script src="{{ config('app.template') }}assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

<!-- Core files -->
<script src="{{ config('app.template') }}assets/js/app.min.js"></script>
<script src="{{ config('app.template') }}assets/js/app-style-switcher.js"></script>
<script src="{{ config('app.template') }}assets/js/custom.js"></script>

<!-- =================================================================================================================== TEMPLATE END -->

</html>
