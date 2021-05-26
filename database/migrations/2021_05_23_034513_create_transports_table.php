<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transports', function (Blueprint $table) {
            $table->id();
            $table->integer('admin_id');
            $table->integer('payment_id');
            $table->integer('seller_id');
            $table->integer('buyer_id');
            $table->string('transport_id');
            $table->string('product_name');
            $table->bigInteger('total_weight');
            $table->bigInteger('transport_charge')->default(0);
            $table->bigInteger('final_transport_charge')->default(0);
            $table->bigInteger('transport_service_fee')->default(0); 
            $table->string('category');
            $table->string('sub_category');
            $table->string('production_type')->nullable();
            $table->string('packaging_method')->nullable();
            $table->tinyInteger('is_delivered')->default(0);
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
        Schema::dropIfExists('transports');
    }
}
