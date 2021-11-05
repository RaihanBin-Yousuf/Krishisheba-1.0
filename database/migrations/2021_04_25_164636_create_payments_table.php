<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->integer('admin_accept_id');
            $table->integer('seller_id');
            $table->integer('buyer_id');
            $table->string('product_name');
            $table->bigInteger('total_weight');
            $table->double('total_amount', 15, 4);
            $table->string('weight_unit');
            $table->string('service_fee');
            $table->integer('price_per_unit');
            $table->integer('discount_price');
            $table->bigInteger('advance_payment')->nullable();
            $table->string('category')->nullable();
            $table->string('sub_category')->nullable();
            $table->string('production_type')->nullable();
            $table->string('product_production_year')->nullable();
            $table->string('packaging_method')->nullable();
            $table->boolean('accept_payment')->default(0);
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
        Schema::dropIfExists('payments');
    }
}
