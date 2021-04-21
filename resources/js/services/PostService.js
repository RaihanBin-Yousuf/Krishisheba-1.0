
const PostService = {};

PostService.save = async (data) => {
    let urlProduct = "/Manage_Post/manage_posts";
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