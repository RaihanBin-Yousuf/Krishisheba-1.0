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
            $table->string('buyer_name');
            $table->string('buyer_contact');
            $table->string('seller_name');
            $table->string('seller_contact');
            $table->string('transport_name');
            $table->string('transport_contact');
            $table->string('product_name');
            $table->bigInteger('total_weight');
            $table->bigInteger('advance_payment')->default(0);
            $table->string('category');
            $table->string('sub_category');
            $table->string('production_type')->nullable();
            $table->string('packaging_method')->nullable();
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
