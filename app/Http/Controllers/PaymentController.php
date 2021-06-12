<?php

namespace App\Http\Controllers;

use App\Models\ManagePost;
use App\Models\Payment;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{
    public function __construct(Payment $payment, ManagePost $manage_post, User $user, Transaction $transaction) {
        $this->payment = $payment;
        $this->manage_post = $manage_post;
        $this->user = $user;
        $this->transaction = $transaction;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(request()->ajax()) {
            if(request()->buyer_id) {
                $data = $this->payment->transportByBuyerId(request()->buyer_id);
            }else if(request()->query) {
                $userId =Auth::user()->id;
                // dd($userId);
                $data = $this->payment->paymentListbyAdminId($userId);
                // dd($data);
                return $this->sendResponse(['data'=>$data, 'pages' => [
                    'total'=> $data->total(),
                    'next_page_url' => $data->nextPageUrl(),
                    'prev_page_url' => $data->previousPageUrl(),
                    'last_page' 	=> $data->lastPage(),
                    'current_page' 	=> $data->currentPage(),
                ]]);
            } else {
                echo "not not";
                exit;
            }
            return $this->sendResponse($data);
        } else {
            return view('backend.payment.index');
            
        }
    }

    public function acceptpayment(Request $request)
    {
        $input= $request->all();
        $sendToseller['u_id'] = $request->seller_id;
        $sendToseller['amount'] = $request->amount;
        $cut = $this->user->cutPayment($sendToseller);
        $data = $this->user->sendPayment($sendToseller);
        $trans = $this->transaction->saveServiceFee($input); 
        $acces = $this->payment->acceptInPayment($input);
        return $this->sendResponse($acces);
    }

    public function paymenthistory()
    {
        if(request()->ajax()) {
            if(request()->query) {
                $userId =Auth::user()->id;
                // dd($userId);
                $data = $this->payment->paymentListbySFarmId($userId);
                // dd($data);
                return $this->sendResponse(['data'=>$data, 'pages' => [
                    'total'=> $data->total(),
                    'next_page_url' => $data->nextPageUrl(),
                    'prev_page_url' => $data->previousPageUrl(),
                    'last_page' 	=> $data->lastPage(),
                    'current_page' 	=> $data->currentPage(),
                ]]);
            } else {
                echo "not not";
                exit;
            }
            return $this->sendResponse($data);
        } 
        return view('backend.payment.selfarmer');
    }

    
    public function buyerpayment()
    {
        if(request()->ajax()) {
            if(request()->query) {
                $userId =Auth::user()->id;
                // dd($userId);
                $data = $this->payment->buyerpayment($userId);
                // dd($data);
                return $this->sendResponse(['data'=>$data, 'pages' => [
                    'total'=> $data->total(),
                    'next_page_url' => $data->nextPageUrl(),
                    'prev_page_url' => $data->previousPageUrl(),
                    'last_page' 	=> $data->lastPage(),
                    'current_page' 	=> $data->currentPage(),
                ]]);
            } else {
                echo "not not";
                exit;
            }
            return $this->sendResponse($data);
        } 
        return view('backend.payment.buyer');
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
        $data['service_fee'] = $input["servicefee"];
        $data['price_per_unit'] = $input["product"]->price_per_unit;
        $data['category'] = $input["product"]->category;
        $data['sub_category'] = $input["product"]->sub_category;
        $data['production_type'] = $input["product"]->production_type;
        $data['product_production_year'] = $input["product"]->product_production_year;
        $data['packaging_method'] = $input["product"]->packaging_method;
        $data['accept_payment'] = 0;
        // dd($data);
        $data = $this->payment->savePayment($data);
        $sendToAdmin['u_id'] = $input['adminAccount']->id;
        $sendToAdmin['amount'] = $data['total_amount'] + $data['service_fee'];
        $payment = $this->user->sendPayment($sendToAdmin);
        return $data;
    }

    public function updateManagePost($input)
    {
        $data['id'] = $input['product']->id;
        $data['total_weight'] = $input['product']->total_unit;
        $managepost = $this->manage_post->where('id', $data['id'])->get()->first();
        // dd($managepost->count_buy_product);
        $data['count_buy_product'] = $managepost->count_buy_product + 1;
        
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
