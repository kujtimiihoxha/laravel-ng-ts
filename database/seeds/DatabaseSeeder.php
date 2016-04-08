<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->insert(
            [
                'name' => 'menu',
                'values' => '{"name":"Menu Settings","items":[{"title":"Dashboard","state":"admin.dashboard","icon":"fa fa-dashboard","children":[]},{"title":"Register","state":"admin.register","icon":"fa fa-user-plus","children":[]},{"title":"Settings","state":"admin.settings","icon":"fa fa-cogs","children":[]}]}',
                'created_at'=> Carbon\Carbon::now()
            ]
        );

        DB::table('users')->insert(
            [
                'name' => trim('laravel-ng-ts'),
                'role' => trim('admin'),
                'email' => trim(strtolower('abc@gmail.com')),
                'password' => bcrypt('abc@12345')
            ]
        );
        // $this->call(UserTableSeeder::class);
    }
}
