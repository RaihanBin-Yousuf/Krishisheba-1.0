const CategoryService = {};

CategoryService.dropdown = async (data) => {
  const res = await axios.get("/categories?dropdown=true", {params: {"product_id": data.product_id}})
  .then(response=> {
    return response.data.data.data })
  .catch(error=>{ return error; })
  return res;
}
export default CategoryService;