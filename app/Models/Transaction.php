<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Transaction extends Model
{
    use HasFactory;
    protected $fillable = [ 'user_id', 'type', 'amount'];

    public function saveServiceFee($input)
    {
        // dd($input);
        $data['user_id'] = Auth::user()->id;
        $data['type'] = "product";
        $data['amount'] = $input["service_fee"];
        return $this->create($data);
    }
    public function saveTransportServiceFee($input)
    {
        // dd($input);
        $data['user_id'] = Auth::user()->id;
        $data['type'] = "transport";
        $data['amount'] = $input["service_fee"];
        return $this->create($data);
    }

    
}
