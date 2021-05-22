const PaymentService = {};


PaymentService.save = async (data) => {
    let urlPayement = "/payment";
      const res = await axios.post(urlPayement, data)
                             .then(response => {
                            $.notify({message : 'Payment Done Successfullys'}, {type: 'success'});
                            return response.data;
                            }).catch(error=>{ return []; });
                  return res;
  }

export default PaymentService;