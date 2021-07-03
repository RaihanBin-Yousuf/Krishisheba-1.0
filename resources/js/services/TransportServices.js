const TransportServices = {};

TransportServices.save = async (data) => {
    let urlProduct = "/transport";
    const res = await axios.post(urlProduct, data)
                            .then(response => {
                        $.notify({message : 'Transport Select'}, {type: 'success'});
                        return response.data;
                        }).catch(error=>{ return []; });
                return res;
    
  }


  
TransportServices.getListByAdmin = async(data) =>{
  let urldata = "/transport";
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

TransportServices.acceptPayment = async (data) => {
    let urlPayement = "/accept/transport";
      const res = await axios.post(urlPayement, data)
                             .then(response => {
                            $.notify({message : 'Payment Done Successfully'}, {type: 'success'});
                            return response.data;
                            }).catch(error=>{ return []; });
                  return res;
  }

  TransportServices.getDelivered = async (data) => {
    let urlPayement = "/delivered/buyer/transport";
      const res = await axios.post(urlPayement, data)
                             .then(response => {
                            $.notify({message : 'Delivered Done Successfully'}, {type: 'success'});
                            return response.data;
                            }).catch(error=>{ return []; });
                  return res;
  }

  TransportServices.getListByTransportBuyer = async (data) => {
    let urlPayement = "/transport/buyer/payment";
    const res = await axios
        .get(urlPayement, {params: data})
        .then((response) => {
            return response.data.data.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
  }

  TransportServices.paymentHistory = async (data) => {
    let urlPayement = "/transport/payment";
    const res = await axios
        .get(urlPayement, {params: data})
        .then((response) => {
            return response.data.data.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
  }
  
//   TransportServices.downloadScript = async (data) => {
//     let urlPayement = "/download-script";
//     const res = await axios
//         .get(urlPayement, {params: data}, responseType: 'blob',)
//         .then((response) => {
//             const url = window.URL.createObjectURL(new Blob([response.data]));
//             const link = document.createElement('a');
//             const date = new Date();
//             const now = date.getTime();
//             link.href = url;
//             link.setAttribute('download', 'Accounts-'+now+'.xlsx'); //or any other extension
//             document.body.appendChild(link);
//             link.click();
//          })
//         .catch((error) => {
//             return error;
//         });
//     return res;
//   }


  
  TransportServices.downloadScript = async (data) => {
    const res = await axios({
        url: "/download-script",
        method: 'GET',
        params:data,
        responseType: 'blob', // important
      }).then((response) => {
         const url = window.URL.createObjectURL(new Blob([response.data]));
         const link = document.createElement('a');
         const date = new Date();
         const now = date.getTime();
         link.href = url;
         link.setAttribute('download', 'payment_slip.pdf'); //or any other extension
         document.body.appendChild(link);
         link.click();
      });
    return res;
  }
  
export default TransportServices;