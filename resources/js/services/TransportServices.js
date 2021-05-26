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

export default TransportServices;