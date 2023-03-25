// create an object
let person = {
    cccd: 123456789,
    ho: "Ngo",
    tendem: " ",
    ten: "Phong",
    email: "Phongnbpd@gmail.com",
    getFullName: function() { 
        let fullName = this.ho + " " + this.tendem + " " + this.ten;
        return fullName;
    }
};

//person.ho = "Tran";
//access to the object attributes
//console.log(person.ho + " " + person.tendem + " " + person.ten);
console.log(person.getFullName());

//create a class
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

let sv1 = new Sinhvien('PD0012','Tran','Thanh','thanh@gmail.com','0976234123','2004');

console.log(sv1.masv)
co