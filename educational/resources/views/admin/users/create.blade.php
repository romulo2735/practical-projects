@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            {!!
                form($form)->add('insert', 'submit',
                [
                    'attr' => ['class' => 'btn btn-primary btn-block']
                ])
            !!}
        </div>
    </div>

@endsection
