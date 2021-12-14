<!doctype html>
<html lang="en">

<head>
    <title>Title</title>
    <!-- Required meta tags -->
    <!-- <meta charset="utf-8"> -->
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> -->

    <!-- Bootstrap CSS -->
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!-- <link href="https://fonts.maateen.me/bangla/font.css" rel="stylesheet"> -->

    <style>
        @font-face {
            font-family: 'AponaLohit';
            font-style: normal;
            font-weight: normal;
            src: url("{{public_path()}}/fonts/AponaLohit.ttf") format('truetype');
        }
    </style>
    <style>
        .payment-slip {
            margin: 50px;
        }

        body {
            font-family: "AponaLohit";
        }
    </style>

</head>

<body>
    <div class="payment-slip">
        <div class="transport-details">
            <h2>Transport Details</h2>
            <table>
                <tbody>
                    <tr>
                        <td style="width: 300px">Transport Charge</td>
                        <td>{{$data['transport_charge']}} taka</td>
                    </tr>
                    <tr>
                        <td>Transport Service Fee</td>
                        <td>{{$data['transport_service_fee']}} taka</td>
                    </tr>
                    <tr>
                        <td style="width: 300px">Total Amount</td>
                        <td>{{$data['total_amount']}} taka</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="user-details">

            <div class="buyer-details" style="margin-top:20px">
                <h2>Buyer Details</h2>
                <table>
                    <tbody>
                        <tr>
                            <td style="width: 300px">Buyer Name</td>
                            <td>{{$data['buyer']->name}}</td>
                        </tr>
                        <tr>
                            <td style="width: 300px">Contact Number</td>
                            <td>{{$data['buyer']->mobile}}</td>
                        </tr>
                        <tr>
                            <td style="width: 300px">Address</td>
                            <td>{{$data['buyer']->address}}</td>
                        </tr>
                        <tr>
                            <td style="width: 300px">Email</td>
                            <td>{{$data['buyer']->email}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="tranport-details" style="margin-top:20px">
    <head>
        <title>Title</title>
        <!-- Required meta tags -->

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <!-- <meta charset="utf-8"> -->
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> -->

        <!-- Bootstrap CSS -->
        <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <!-- <link href="https://fonts.maateen.me/bangla/font.css" rel="stylesheet"> -->

        <style>
            @font-face {
                font-family: 'Siyamrupali';
                font-style: normal;
                font-weight: normal;
                src: url("{{public_path()}}/fonts/Siyamrupali.ttf") format('truetype');
            }
        </style>
        <style>
            .payment-slip {
                margin: 50px;
            }
        </style>
    </head>
    <body>
        <div class="payment-slip">
            <div class="transport-details">
                <h2>Transport Details</h2>
                <table>
                    <tbody>
                        <tr>
                            <td style="width: 300px">Transport Name</td>
                            <td>{{$data['transport']->name}}</td>
                        </tr>
                        <tr>
                            <td style="width: 300px">Contact Number</td>
                            <td>{{$data['transport']->mobile}}</td>
                        </tr>
                        <tr>
                            <td style="width: 300px">Address</td>
                            <td>{{$data['transport']->address}}</td>
                        </tr>
                        <tr>
                            <td style="width: 300px">Email</td>
                            <td>{{$data['transport']->email}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="product-details">
                <table>
                    <tbody>
                        <tr>
                            <td style="width: 300px">ক্যাটাগরি নাম</td>
                            <td>{{$data['category']}}</td>
                        </tr>
                        <tr>
                            <td style="width: 300px">প্রডাক্ট নাম</td>
                            <td>{{$data['production_type']}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
            <div class="user-details">

            body {
                font-family: "Siyamrupali",sans-serif,Verdana, Tahoma, sans-serif;
            }
        </style>

    </head>
        <body>
            <div class="payment-slip">
                <div class="transport-details">
                    <h2>Transport Details</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td style="width: 300px">Transport Charge</td>
                                <td>{{$data['transport_charge']}} taka</td>
                            </tr>
                            <tr>
                                <td>Transport Service Fee</td>
                                <td>{{$data['transport_service_fee']}} taka</td>
                            </tr>
                            <tr>
                                <td style="width: 300px">Total Amount</td>
                                <td>{{$data['total_amount']}} taka</td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
                <div class="buyer-details"  style="margin-top:20px">
                    <h2>Buyer Details</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td style="width: 300px">Buyer Name</td>
                                <td>{{$data['buyer']->name}}</td>
                            </tr>
                            <tr>
                                <td style="width: 300px">Contact Number</td>
                                <td>{{$data['buyer']->mobile}}</td>
                            </tr>
                            <tr>
                                <td style="width: 300px">Address</td>
                                <td>{{$data['buyer']->address}}</td>
                            </tr>
                            <tr>
                                <td style="width: 300px">Email</td>
                                <td>{{$data['buyer']->email}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tranport-details" style="margin-top:20px">
                    <h2>Transport Details</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td style="width: 300px">Transport Name</td>
                                <td>{{$data['transport']->name}}</td>
                            </tr>
                            <tr>
                                <td style="width: 300px">Contact Number</td>
                                <td>{{$data['transport']->mobile}}</td>
                            </tr>
                            <tr>
                                <td style="width: 300px">Address</td>
                                <td>{{$data['transport']->address}}</td>
                            </tr>
                            <tr>
                                <td style="width: 300px">Email</td>
                                <td>{{$data['transport']->email}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </body>
        <div class="product-details" style="margin-top:20px">
            <h2>product Details</h2>
            <table>
                <tbody>
                    <tr>
                        <td style="width: 300px">পণ্যের নাম:</td>
                        <td>{{$data['product_name']}}</td>
                    </tr>
                    <tr>
                        <td style="width: 300px">পণ্যের প্রকার:</td>
                        <td>{{$data['category']}}</td>
                    </tr>
                    <!-- <tr>
                        <td style="width: 300px">Sub Category</td>
                        <td>{{$data['sub_category']}}</td>
                    </tr> -->
                    <tr>
                        <td style="width: 300px">Total weight</td>
                        <td>{{$data['total_weight']}}{{$data['payment']->weight_unit}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>