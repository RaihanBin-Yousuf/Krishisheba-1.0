<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->nullable()->unique();
            $table->string('mobile')->unique();
            $table->bigInteger('nid')->nullable();
            $table->string('birth_date')->nullable();
            $table->string('address')->nullable();
            $table->string('role')->nullable();
            $table->string('password');
            $table->string('profile_img')->nullable();
            $table->string('nid_front_img')->nullable();
            $table->integer('access_to')->default('0');
            $table->string('check_box')->nullable();
            $table->decimal('latitude', 10, 8)->default('0.00');
            $table->decimal('longitude', 11, 8)->default('0.00');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
