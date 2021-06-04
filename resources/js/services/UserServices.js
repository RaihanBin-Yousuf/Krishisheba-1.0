const UserServices = {};


UserServices.authUser = async () => {
    const res = await axios
        .get("/ManageUsers/authUser")
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
};

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

UserServices.seller = async (data) => {
    const res = await axios
        .get("/ManageUsers/users/"+data)
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
};

UserServices.transport = async (data) => {
    const res = await axios
        .get("/ManageUsers/users/"+data)
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
};

UserServices.all = async (data) => {
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

UserServices.tranportall = async (data) => {
    const res = await axios
        .get("/ManageUsers/tranportall", {params: data})
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

UserServices.updateLoc = async (data)=> {
    const res = await axios.post("/ManageUsers/location", data)
                        .then(response => {
                            if(response.data.error) {
                                $.notify({message : response.data.error.error}, {type: 'danger'});
                            } else {
                                $.notify({message : 'Location Update Successfully'}, {type: 'success'});
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

UserServices.countusers = async () => {
    const res = await axios
        .get("/ManageUsers/count/users")
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
}

UserServices.accessAdmin = async (data) => {
    const res = await axios
        .get("/ManageUsers/access/admin", {params: data})
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
}

export default UserServices;