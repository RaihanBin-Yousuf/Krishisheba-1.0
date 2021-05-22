<?php

namespace App\Http\Controllers;

use App\Models\ManagePost;
use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function __construct(Payment $payment, ManagePost $manage_post) {
        $this->payment = $payment;
        $this->manage_post = $manage_post;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        // dd($input);
        $input['adminAccount']=json_decode($request->adminAccount);
        $input['buyer']=json_decode($request->buyer);
        $input['seller']=json_decode($request->seller);
        $input['product']=json_decode($request->product);
        $savePayment = $this->storePayment($input);
        $updateManagePost = $this->updateManagePost($input);
        $data =['payment'=> $savePayment, 'managePost' => $updateManagePost];
        return $this->sendResponse($data);
        // dd($updateManagePost);
    }

    public function storePayment($input)
    {
        $data['admin_accept_id'] = $input['adminAccount']->id;
        $data['buyer_id']  = $input['buyer']->id;
        $data['seller_id']  = $input['seller']->id;
        $data['product_name'] = $input['product']->product_name;
        $data['total_weight'] = $input["product"]->quantity;
        $data['total_amount'] = $input["product"]->total_each_price;
        $data['weight_unit'] = $input["product"]->weight_unit;
        $data['service_fee'] = $input["product"]->each_total_fee;
        $data['price_per_unit'] = $input["product"]->price_per_unit;
        $data['category'] = $input["product"]->category;
        $data['sub_category'] = $input["product"]->sub_category;
        $data['production_type'] = $input["product"]->production_type;
        $data['product_production_year'] = $input["product"]->product_production_year;
        $data['packaging_method'] = $input["product"]->packaging_method;
        $data['accept_payment'] = 0;
        $data = $this->payment->savePayment($data);
        return $data;
    }

    public function updateManagePost($input)
    {
        $data['id'] = $input['product']->id;
        $data['total_weight'] = $input['product']->total_unit;
        // dd($data);
        return $this->manage_post->updatePost($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function show(Payment $payment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function edit(Payment $payment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Payment $payment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Payment $payment)
    {
        //
    }
}
