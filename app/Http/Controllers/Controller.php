<?php

namespace App\Http\Controllers;

use App\Traits\CommonTrait;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use CommonTrait;
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function sendResponse($response, $message=null)
    {
        $cresponse['status'] = 'success';
        $cresponse['success'] = true;
        $cresponse['data'] = $response;
        return response()->json($cresponse, 200);
    }

    public function sendError($error, $code = 404)
    {
        $response = [
            'stausCode'=>$code,
            'status'=>'error',
            'success' => false,
            'error' => $error,
        ];
        return response()->json($response, 200);
    }
}
