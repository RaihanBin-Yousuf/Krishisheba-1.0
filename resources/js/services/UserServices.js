const UserServices = {};
UserServices.get = async () => {
    const res = await axios
        .get("/ManageUsers/users")
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
};

UserServices.login = async (data)=> {
    const res = await axios.post("/ManageUsers/users", data)
                        .then(response => {
                            if(response.data.error) {
                                $.notify({message : response.data.error.error}, {type: 'danger'});
                            } else {
                                $.notify({message : 'Login Successfully'}, {type: 'success'});
                            }
                            return response.data;
                        }).catch(error=>{ return []; });
            return res;
}

export default UserServices;