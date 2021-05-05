const TopCategoryServices = {};

TopCategoryServices.details = async (data) => {

};

TopCategoryServices.list = async () => {
    const res = await axios
        .get("/product")
        .then(response => {
            return response.data.data.data;
        })
        .catch(error => {
            return error;
        });
    return res;
};

export default TopCategoryServices;