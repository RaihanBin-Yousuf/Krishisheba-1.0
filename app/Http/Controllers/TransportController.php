<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Transaction;
use App\Models\Transport;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PDF;

use Dompdf\Dompdf;

class TransportController extends Controller
{
    public function __construct(Transport $transport, User $user, Payment $payment, Transaction $transaction)
    {
        $this->transport = $transport;
        $this->user = $user;
        $this->payment = $payment;
        $this->transaction = $transaction;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->ajax()) {
            if (request()->query) {
                $userId = Auth::user()->id;
                // dd($userId);
                $data = $this->transport->transportListbyAdminId($userId);
                // dd($data);
                return $this->sendResponse(['data' => $data, 'pages' => [
                    'total' => $data->total(),
                    'next_page_url' => $data->nextPageUrl(),
                    'prev_page_url' => $data->previousPageUrl(),
                    'last_page'     => $data->lastPage(),
                    'current_page'     => $data->currentPage(),
                ]]);
            }
        } else {
            return view('backend.transport.index');
        }
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
        $data['u_id'] = $input['admin_id'];
        $data['amount'] = $input['final_transport_charge'] + $input['transport_service_fee'];
        $payment = $this->user->sendPayment($data);
        // dd($input);
        $transport = $this->transport->saveTransport($input);
        return $this->sendResponse($transport);
    }

    public function acceptpayment(Request $request)
    {
        $input = $request->all();
        // dd($input);
        $sendToBuyer['u_id'] = $request->transporter_id;
        $sendToBuyer['amount'] = $request->amount;
        $cut = $this->user->cutPayment($sendToBuyer);
        $data = $this->user->sendPayment($sendToBuyer);
        $trans = $this->transaction->saveTransportServiceFee($input);
        $acces = $this->transport->acceptInPayment($input);
        return $this->sendResponse($acces);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Transport  $transport
     * @return \Illuminate\Http\Response
     */
    public function show(Transport $transport)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Transport  $transport
     * @return \Illuminate\Http\Response
     */
    public function edit(Transport $transport)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Transport  $transport
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transport $transport)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Transport  $transport
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transport $transport)
    {
        //
    }

    public function paymenthistory()
    {
        if (request()->ajax()) {
            if (request()->query) {
                $userId = Auth::user()->id;
                // dd($userId);
                $data = $this->transport->transporthistory($userId);
                // dd($data);
                return $this->sendResponse(['data' => $data, 'pages' => [
                    'total' => $data->total(),
                    'next_page_url' => $data->nextPageUrl(),
                    'prev_page_url' => $data->previousPageUrl(),
                    'last_page'     => $data->lastPage(),
                    'current_page'     => $data->currentPage(),
                ]]);
            } else {
                echo "not not";
                exit;
            }
            return $this->sendResponse($data);
        }
        return view('backend.transport.transport');
    }

    public function buytranpayhis()
    {
        if (request()->ajax()) {
            if (request()->query) {
                $userId = Auth::user()->id;
                // dd($userId);
                $data = $this->transport->buyerTrasportHistory($userId);
                // dd($data);
                return $this->sendResponse(['data' => $data, 'pages' => [
                    'total' => $data->total(),
                    'next_page_url' => $data->nextPageUrl(),
                    'prev_page_url' => $data->previousPageUrl(),
                    'last_page'     => $data->lastPage(),
                    'current_page'     => $data->currentPage(),
                ]]);
            } else {
                echo "not not";
                exit;
            }
            return $this->sendResponse($data);
        }
        return view('backend.transport.buyertransport');
    }

    public function deliveredtransport(Request $request)
    {
        $input = $request->all();
        $input["is_delivered"] = 1;
        $data = $this->transport->deliveredsuccess($input);
        // dd($input);
        return $this->sendResponse($data);
    }

    public function downloadScript()
    {
        $data = request()->all();
        // dd($data);
        $data['seller'] = json_decode($data['seller']);
        $data['buyer'] = json_decode($data['buyer']);
        $data['transport'] = json_decode($data['transport']);
        $data['payment'] = json_decode($data['payment']);
        $data['total_amount'] = (int) $data['transport_charge'] - (int) $data['transport_service_fee'];
        // dd($data);
        // share data to view
        //  $view = view('paymentslip', compact('data'))->render();
        // $html = mb_convert_encoding($view, 'HTML-ENTITIES');

        view()->share('paymentslip', $data);
        $pdf = PDF::loadView('paymentslip', compact('data'));
        //   // download PDF file with download method
        return $pdf->download('pdf_file.pdf');
        // dd($data);
        // return view('paymentslip', compact('data'));
    }
}
