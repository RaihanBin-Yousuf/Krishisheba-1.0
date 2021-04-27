const SubcategoryService = {};

SubcategoryService.dropdown = async (data) => {
  const res = await axios.get("/subcategories?dropdown=true", {params: {"category_id": data.category_id}})
  .then(response=> {return response.data.data.data })
  .catch(error=>{ return error; })
  return res;
}

export default SubcategoryService;