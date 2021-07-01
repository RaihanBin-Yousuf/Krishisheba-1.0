@extends('backend.layouts.master')
@section('title','My Posts')
@section('content')
<div class="update-manage-post pt-4 pl-4">
    <div class="container">
        <h1>Update Post</h1>
        <img src="{{asset('storage/posts/'.$managePost->product_image)}}" style="width:100px; height:100px; border-radius:50%;">

        <form action="{{route('manage_posts.update',$managePost->id)}}" class="mt-4 p-3" method="post">
            @csrf
            @method('PUT')

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="total_weight">Total Weight</label>
                        <input type="text" class="form-control" value="{{$managePost->total_weight}}" name="total_weight" id="total_weight" aria-describedby="total_weight" placeholder="total Weight">
                        
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="weight_unit">Weight Unit</label>
                            @if($managePost->user_role == 'farmer')
                                <select class="form-control" name="weight_unit" data-value="{{ $managePost ? $managePost->weight_unit : ''}}">
                                    <option value="">নির্বাচন করুন</option> 
                                    <option value="কেজি" {{($managePost->weight_unit) == "কেজি" ? 'selected' : ''}}>কেজি</option>
                                    <option value="মণ" {{($managePost->weight_unit) == "মণ" ? 'selected' : ''}}>মণ</option>
                                    <option value="পিস" {{($managePost->weight_unit) == "পিস" ? 'selected' : ''}}>পিস</option>  
                                    <option value="টন" {{($managePost->weight_unit) == "টন" ? 'selected' : ''}}>টন</option>
                                    <option value="মেট্রিক টন" {{($managePost->weight_unit) == "মেট্রিক টন" ? 'selected' : ''}}>মেট্রিক টন</option>                                 
                                </select> 
                            @else
                                <select class="form-control" name="weight_unit">
                                    <option value="">নির্বাচন করুন</option> 
                                    <option value="কেজি" {{($managePost->weight_unit) == "কেজি" ? 'selected' : ''}}>কেজি</option>
                                    <option value="মণ" {{($managePost->weight_unit) == "মণ" ? 'selected' : ''}}>মণ</option>
                                    <option value="পিস" {{($managePost->weight_unit) == "পিস" ? 'selected' : ''}}>পিস</option>                  
                                                
                                </select>
                            @endif
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                      <label for="price">Price</label>
                      <input type="number" class="form-control"value="{{$managePost->price_per_unit}}" name="price_per_unit" id="price" aria-describedby="price" placeholder="price">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                      <label for="discount_price">Discount Price</label>
                      <input type="number" class="form-control" value="{{$managePost->discount_price}}" name="discount_price" id="discount_price" placeholder="discount price">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                      <label for="last_date">Offer End Date</label>
                      <input type="date" value="{{ $managePost->offer_end_date }}" class="form-control" name="offer_end_date" id="last_date" placeholder="last date">
                    </div>
                </div>
                <div class="col mt-4">
                    <input type="submit" class="btn btn-primary" value="Update">
                </div>
            </div>
        </form>
    </div>
</div>
@endsection
<script>
 $(function() {
       $("select").each(function (index, element) {
                const val = $(this).data('value');
                if(val !== '') {
                    $(this).val(val);
                }
        });
 })
</script>