// import React,{Component} from 'react';

const commonservices={};
commonservices.message=async (data)=>{
    const res={msg:"hello"};
    return res;
}
commonservices.inputDate=(params)=>{
    Date.prototype.monthNumber = [
        "01", "02", "03",
        "04", "05", "06",
        "07", "08", "09",
        "10", "11", "12"
    ];
    Date.prototype.getMonthNumber = function() {
        return this.monthNumber[this.getMonth()];
    };
    var date = new Date(params);
    const day  = date.getDate();
    const monthNumber = date.getMonthNumber();
    // const monthNumber = date.getMonthNumber();
    const year = date.getFullYear();
    // const res=monthName+'-'+day+'-'+year;
    const res=year+'-'+monthNumber+'-'+day;
    // 2017-06-23
    return res;
}
commonservices.formatDate = (params)=>{
    
        Date.prototype.monthNames = [
            "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ];
        // var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        Date.prototype.getMonthName = function() {
            return this.monthNames[this.getMonth()];
        };
        var date = new Date(params);
        const day  = date.getDate();
        const monthName = date.getMonthName();
        const year = date.getFullYear();
        const res=day+' '+monthName+' '+year;
        return res;

}

commonservices.dateNow = ()=> {
    const curr = new Date();
    return curr.toISOString().substr(0,10);
}
export default commonservices;