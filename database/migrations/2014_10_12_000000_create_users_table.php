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
            //for retail buyers
            $table->string('trade_lisence_no')->nullable();
            //for separate farmer
            $table->string('farmer_id_no')->nullable();
            $table->string('fid_front_img')->nullable();
            //for separate transport owner
            $table->string('vehicle_license_no')->nullable();
            $table->integer('access_to')->default('2');
            $table->decimal('lat', 10, 8)->default('0.00');
            $table->decimal('lng', 11, 8)->default('0.00');
            $table->bigInteger('amount')->default(0);
            // $table->bigInteger('ref_code')->unique();
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
