
const PostService = {};

PostService.list = async () => {
  const res = await axios.get("/manage_posts")
  .then(response=> {
    console.log('res :>> ', res);
    return response.data.data.data })
  .catch(error=>{ return error; })
  return res;
}

PostService.save = async (data) => {
    let urlProduct = "/manage_posts";
    if(data.get('id')) {
      const urlProductUpdate = urlProduct+'/'+data.get('id')+"?_method=PUT";
      const res = await axios.post(urlProductUpdate, data)
                      .then(response=> {
                        $.notify({message: 'Update Product'}, {type: 'success'});
                        return response.data;
                      }).catch(error=>{ return []; });
                  return res;
    } else {
      const res = await axios.post(urlProduct, data)
                             .then(response => {
                            $.notify({message : 'Product Saved'}, {type: 'success'});
                            return response.data;
                            }).catch(error=>{ return []; });
                  return res;
    }
  }

export default PostService;