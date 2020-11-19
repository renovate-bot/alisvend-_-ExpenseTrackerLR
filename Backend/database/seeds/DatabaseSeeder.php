<?php

use App\Book;
use App\User;
use App\Category;
use App\Expense;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Book::truncate();
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 50; $i++) {
            Book::create([
                'title' => $faker->sentence,
                'author' => $faker->name,
            ]);
        }

        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 20; $i++) {
            Category::create([
                'name' => $faker->name,
            ]);
        }
        User::truncate();
        User::create([
            'name' => 'Ali',
            'email' => 'ali@gmail.com',
            'password' => Hash::make('P@ssw0rd'),
        ]);
    }
}
