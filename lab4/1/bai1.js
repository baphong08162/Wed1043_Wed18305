class student {
    constructor(id,first_name,last_name,class_id,email,phone_number,dob) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.class_id = class_id;
        this.email = email;
        this.phone_number = phone_number;
        this.dob = dob;
    }
    getFullName(){
        return this.first_name + " " + this.last_name;
    }
    getAge(){
        let birthYear = parseInt(this.dob);
        const currentYear = new Date().getFullYear()
        return currentYear-birthYear;
    }
}
