import axios from "axios";

const GoogleMapService = {};

GoogleMapService.users = async() => {
    const res = await axios.get("googlemap")
                            .then((response)=> {
                                return response.data.data.data;
                            })
                            .catch((error)=> {
                                return error;
                            });
            return res;
}

export default GoogleMapService;