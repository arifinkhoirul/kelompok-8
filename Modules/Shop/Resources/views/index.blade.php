@extends('shop::layouts.master')

@section('content')
    <h1>Hello irul</h1>

    <p>
        This view is loaded from module: {!! config('shop.name') !!}
    </p>
@endsection
