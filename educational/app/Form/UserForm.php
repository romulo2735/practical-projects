<?php

namespace App\Form;

use Kris\LaravelFormBuilder\Form;

class UserForm extends Form
{
    public function buildForm()
    {
        $this
            ->add('name', 'text', [
                'label' => 'Name',
                'rules' => 'required|max:100'
            ])
            ->add('email', 'email', [
                'label' => 'E-mail',
                'rules' => 'required|unique:users'
            ]);
    }
}
