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

PaymentService.getByBuyerId = async(data) =>{
  let urldata = "/payment";
  const res = await axios
        .get(urldata, {params: data})
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
}



PaymentService.getListByAdmin = async(data) =>{
    let urldata = "/payment";
    const res = await axios
          .get(urldata, {params: data})
          .then((response) => {
              return response.data.data.data;
          })
          .catch((error) => {
              return error;
          });
      return res;
  }

  PaymentService.acceptPayment = async (data) => {
    let urlPayement = "/accept/payment";
      const res = await axios.post(urlPayement, data)
                             .then(response => {
                            $.notify({message : 'Payment Done Successfully'}, {type: 'success'});
                            return response.data;
                            }).catch(error=>{ return []; });
                  return res;
  }

export default PaymentService;