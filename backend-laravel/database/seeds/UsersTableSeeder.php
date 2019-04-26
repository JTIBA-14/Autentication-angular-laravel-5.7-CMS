<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        User::create([
            'email' => 'admin@admin.com',
            'password' => Hash::make('adminadmin'),
            'name' => 'Administrator',
        ]);
    }
}
