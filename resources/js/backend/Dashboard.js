import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserServices from '../services/UserServices';
import commonservices from '../services/commonservices';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state= {
            admin: [],
            seller: [],
            buyer: [],
            farmer: [],
            transport: [],
            userdata: null,
            showDetails: false,
            showTable:false,
            user: [],
            access_admin: []

        };
        this.countAllUser = this.countAllUser.bind(this);
        this.setUserList = this.setUserList.bind(this);
        this.showDetails = this.showDetails.bind(this);
        this.userDetails = this.userDetails.bind(this);
        this.accessTo = this.accessTo.bind(this);
    }

    componentDidMount() {
        this.countAllUser();
        // this.userList();
    }

    async accessTo(data) {
        const res = await UserServices.accessAdmin(data);
        console.log(`res`, res);
        this.setState({
            user: res,
        });
        this.countAllUser();
    }

    showDetails(data) {
        if(this.state.showDetails) {
            this.setState({
                ['showTable']: false,
                ['showDetails']: false,
            })
        } else {
            this.setState({['showDetails']: true, ['showTable']:false},()=>{this.userDetails(data)})
        }
        
    }

   async userDetails(data) {
       if(data.access_to == 0 || data.access_to == 99) {
        console.log(`findd data::>`, data);
            this.setState({
                ['user']: data
            })
            
        } else {
            console.log(`data`, data);
            const accessAdmin = await UserServices.accessAdmin({'access_to': data.access_to});
            this.setState({
                ['user']: data,
                ['access_admin']: accessAdmin,
            })
        }
        
    }


    async countAllUser() {
        const user = await UserServices.countusers();
        this.setState({
            admin: user.admin,
            seller: user.seller,
            buyer: user.buyer,
            transport: user.transport,
            farmer: user.farmer,
        })
    }

    setUserList(data) {
        this.setState({
            ['userdata']: data,
            ['showTable']: true,
            ['showDetails']: false,
        })
    }
    
    render() {
        let userList = '';
        let user = this.state.user;
        let accessTobtn = '';
        if(user.access_to == 99) {
            accessTobtn = <div className="btn btn-warning" onClick={()=>this.accessTo(user)}>Access to</div>;
        } else if(user.access_to == 0) {
            accessTobtn = <div className="btn btn-danger" onClick={()=>this.accessTo(user)}>Access to</div>;
        } 
        console.log(`this.state.user`, this.state.user);
        if(this.state.userdata) {
            userList = this.state.userdata.map(user =>{
                if(user.access_to == 0) {
                   return userList = <tr className="bg-danger" key={user.id}>
                                <th><img src={'/storage/profile/'+user.profile_img} width="50px" height="50px"></img></th>
                                <th>{user.name}</th>
                                <th>{user.email}</th>
                                <th>{user.mobile}</th>
                                <th>{commonservices.formatDate(user.created_at)}</th>
                                <th><button className="btn" onClick={()=>this.showDetails(user)}><i className="fas fa-eye"></i></button></th>
                            </tr>

                } else if(user.access_to == 99){
                   return userList = <tr className="bg-warning" key={user.id}>
                                <th><img src={'/storage/profile/'+user.profile_img} width="50px" height="50px"></img></th>
                                <th>{user.name}</th>
                                <th>{user.email}</th>
                                <th>{user.mobile}</th>
                                <th>{commonservices.formatDate(user.created_at)}</th>
                                <th><button className="btn" onClick={()=>this.showDetails(user)}><i className="fas fa-eye"></i></button></th>
                            </tr>

                } else {
                    return userList = <tr key={user.id}>
                                <th><img src={'/storage/profile/'+user.profile_img} width="50px" height="50px"></img></th>
                                <th>{user.name}</th>
                                <th>{user.email}</th>
                                <th>{user.mobile}</th>
                                <th>{commonservices.formatDate(user.created_at)}</th>
                                <th><button className="btn" onClick={()=>this.showDetails(user)}><i className="fas fa-eye"></i></button></th>
                            </tr>

                }
                
            });
        }
        return (
            <div className="row">
                <div className="col-lg-2 col-6" >
                    <div className="small-box bg-info" onClick={()=>this.setUserList(this.state.admin)}>
                        <div className="inner">
                        <h3>{this.state.admin.length}</h3>
                        <p>Admin</p>
                        </div>
                        <div className="icon">
                        <i className="ion ion-bag"></i>
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div className="small-box bg-success" onClick={()=>this.setUserList(this.state.seller)}>
                            <div className="inner">
                            <h3>{this.state.seller.length}<sup ></sup></h3>
                            <p>Seller</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-stats-bars"></i>
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div className="small-box bg-warning" onClick={()=>this.setUserList(this.state.buyer)}>
                            <div className="inner">
                            <h3>{this.state.buyer.length}</h3>
                            <p>Buyer</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-person-add"></i>
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-3"  onClick={()=>this.setUserList(this.state.farmer)}>
                        <div className="small-box bg-secondary" onClick={()=>this.setUserList(this.state.farmer)}>
                            <div className="inner">
                            <h3>{this.state.farmer.length}</h3>
                            <p>Farmer</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-person-add"></i>
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-3">
                    <div className="small-box bg-danger" onClick={()=>this.setUserList(this.state.transport)}>
                        <div className="inner">
                            <h3>{this.state.transport.length}</h3>
                            <p>Transport</p>
                        </div>
                        <div className="icon">
                        <i className="ion ion-pie-graph"></i>

                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div>
                {this.state.showTable ? 
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Profile Image</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>mobile</th>
                            <th>Register Date</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList}
                    </tbody>
                </table> : ''}
                {this.state.showDetails?
                <div class="">
                    <div className="row col-12">
                        <div className="col">
                            <img src={'/storage/profile/'+user.profile_img} alt="" height="250px" width="200px" srcset="" />
                        </div>
                        <div className="col-5">
                            <h4>{user.name}</h4>
                            <p>Address: {user.address}</p>
                            <p>Amount: {user.amount}</p>
                            <p>Birth Date: {user.nid}</p>
                            <p>Contact: {user.mobile}</p>
                        </div>
                        <div className="col">
                            <div className="btn btn-success" onClick={this.showDetails}>Close</div>
                        </div>
                        <div className="col">
                            {accessTobtn}
                            
                        </div>
                        <div className="col-5 mt-2">
                            <p>Today Date: {commonservices.formatDate(commonservices.dateNow())}</p>
                            <p></p>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col"><p>Register At: {commonservices.formatDate(user.created_at)}</p></div>
                        
                    </div>
                    <div className="row m-2">
                        <div className="col"><p>Updated At: {commonservices.formatDate(user.updated_at)}</p></div>
                    </div>
                    <div className="row mt-3">
                        <h3>Nid Images</h3>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={'/storage/profile/'+user.nid_front_img} alt="" height="250px" width="400px" srcset="" />
                        </div>
                    </div>
                </div>: ''}
            </div>
        );
    }
}

export default Dashboard;


if (document.getElementById('react_dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('react_dashboard'));
}

