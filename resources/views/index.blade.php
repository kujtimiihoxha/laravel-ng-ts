<!doctype html>
<html ng-app="app" ng-strict-di>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="{!! elixir('css/vendor.css') !!}">
    <link rel="stylesheet" href="{!! elixir('css/app.css') !!}">
    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>

    <title>Laravel Angular Material Starter</title>

    <!--[if lte IE 10]>
    <script type="text/javascript">document.location.href = '/unsupported-browser'</script>
    <![endif]-->
</head>
<body>

<div ui-view></div>


    <script src="{!! elixir('js/vendor.js') !!}"></script>
    <script src="{!! elixir('js/templates.js') !!}"></script>
    <script src="{!! elixir('js/app.js') !!}"></script>

    {{--livereload--}}
    @if ( env('APP_ENV') === 'local' )
    <script type="text/javascript">
        document.write('<script src="'+ location.protocol + '//' + (location.host.split(':')[0] || 'localhost') +':35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
    </script>
    @endif
</body>
</html>
