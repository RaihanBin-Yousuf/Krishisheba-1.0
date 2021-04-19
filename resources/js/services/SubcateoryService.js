// const baseUrl = "http://127.0.0.1:8000";
const SubcategoryService = {};

// CategoryServices.list = async (params) => {
//   const res = await axios.get("/categories", {params: params})
//   .then(response=> {return response.data.data.data })
//   .catch(error=>{ return error; })
//   return res;
// }

SubcategoryService.dropdown = async (data) => {
  const res = await axios.get("/subcategories?dropdown=true", {params: {"type": data.type}})
  .then(response=> {return response.data.data.data })
  .catch(error=>{ return error; })
  return res;
}
// CategoryServices.bulkActions = async (data) => {
//   const urlBulk = "/categories/bulk-actions";
//   const res = await axios.post(urlBulk, data)
//   .then(response=> {
//     $.notify({ message: 'Actions Completed' }, { type: 'success' });
//     return response.data;
//   }).catch(error=>{ return error; })
//   return res;
// }

// CategoryServices.save = async (data)=> {
//   console.log('data faiaya');
//   console.log(data);
//   if(data.get('id')){
//       console.log('not here...');
//       let urlUpdate="/categories/"+data.get('id')+"/update";
//       const res=await axios.post(urlUpdate, data).then(response=>{
//           $.notify({ message:'Contact Updated Successfully'},{type:'success'});
//           return response.data;
//       }).catch(error=>{return [];});
//       return res;
//   }
//   else{
//       let urlSave="/categories/add";
//       console.log('here..');
//       console.log(data);
//       const res = await axios.post(urlSave, data).then(response=>{
//           $.notify({message:'Category Insert Successfully'},{
//               type: 'success'
//           });
//           return response.data;
//       }).catch(error=>{return []; });
//       return res;
//   }
  
// }

// CategoryServices.delete = async (data) => {
//   const urlDelete = "/categories/"+data.id+"/delete";
//   const res = await axios.delete(urlDelete, data)
//   .then(response=> {
//     $.notify({ message: 'Category Deleted' }, { type: 'success' });
//     return response.data;
//   }).catch(error=>{ return error; })
//   return res;
// }


// CategoryServices.bulkActions = async (data) => {
//   const urlBulk = "/categories/bulk-actions";
//   const res = await axios.post(urlBulk, data)
//   .then(response=> {
//     $.notify({ message: 'Actions Completed' }, { type: 'success' });
//     return response.data;
//   }).catch(error=>{ return error; })
//   return res;
// }


export default SubcategoryService;