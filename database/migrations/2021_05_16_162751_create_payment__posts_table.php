<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment__posts', function (Blueprint $table) {
            $table->id();
            $table->integer('manage_post_id')->nullable();
            $table->integer('seller_id')->nullable();
            $table->integer('buyer_id')->nullable();
            $table->integer('admin_accept_id')->nullable();
            $table->string('total_unit')->nullable();
            $table->string('total_amount')->nullable();
            $table->string('service_fee')->nullable();
            $table->string('transport_fee')->nullable();
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
        Schema::dropIfExists('payment__posts');
    }
}
