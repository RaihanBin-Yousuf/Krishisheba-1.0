
const ManagePostService = {};

ManagePostService.list = async (data) => {
  const res = await axios.get("/manage_posts", {params: data})
  .then(response=> {
    return response.data.data })
  .catch(error=>{ return error; })
  return res;
}

ManagePostService.paginate = async (data) => {
  const res = await axios.get("/manage_posts", {params: data})
  .then(response=> {
    console.log('response :>> ', response);
    return response.data.data.data })
  .catch(error=>{ return error; })
  return res;
}



export default ManagePostService;