let student = {
    id: Number,
    first_name: "",
    last_name:"",
    class_id:"",
    email: "",
    phone_number:"",
    dob:"",
    getFullName: function() { 
        let fullName = this.first_name +  + " " + this.last_name;
        return fullName;
    }
};

class Sinhvien {
    constructor(masv, hosv, tensv, email, sđt, namsinh){
        this.masv = masv;
        this.hosv = hosv;
        this.tensv = tensv;
        this.email = email;
        this.sđt = sđt;
        this.namsinh = namsinh;
    }
    getFullName(){
        return this.hosv + " " + this.tensv;
    }

    // tinh tuoi
    getAge() {
        let date = new Date();
        let currentYear = date.getFullYear();
        let age = currentYear - this.namesinh;
        return age;
    }
}   

 