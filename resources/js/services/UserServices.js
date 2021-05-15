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

UserServices.logout = async (data)=> {
    const res = await axios.post("/ManageUsers/users", data)
                        .then(response => {
                            if(response.data.error) {
                                $.notify({message : response.data.error.error}, {type: 'danger'});
                            } else {
                                $.notify({message : 'Logout Successfully'}, {type: 'success'});
                            }
                            return response.data;
                        }).catch(error=>{ return []; });
            return res;
}

UserServices.permission = async (data) => {
    const res = await axios
        .get("/ManageUsers/users", {params: data})
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
};

export default UserServices;