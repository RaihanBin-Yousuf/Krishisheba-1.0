<?php


namespace App\Traits;


trait CommonTrait
{
    public function processNotification($notify) {
        $response = [];
        if(!empty($notify)) {
            if(is_array($notify)) {
                foreach($notify as $key=>$value) {
                    $response['notify'] = [$key=>$value];
                }
            } else {
                $response['notify'] = ['success'=>$notify];
            }
        }
        return $response;
    }

    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendViewResponse($response, $message=null)
    {
        $response['status'] = 'success';
        $response['success'] = true;
        return response()->json($response, 200);
    }
}
