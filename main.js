let uaer_array = [];
class User {
    login;
    pass;
    email1;
    constructor(uLogin, uPass, uEmail) {
        this.login = uLogin;
        this.pass = uPass;
        this.email1 = uEmail;
    }
    push_array() {
        console.log(`${this.login}, ${this.pass}, ${this.email1}`);
        let person = {
            name: this.login,
            password: this.pass,
            male: this.email1
        };
        uaer_array.push(person);
        console.log(person);
        console.log(uaer_array);
    }
}
;
function add_user() {
    let login = $('#login').val();
    let pass = $('#pass').val();
    let email1 = $('#email1').val();
    let reg = new User(`${login}`, `${pass}`, `${email1}`);
    reg.push_array();
    $('#login').val('');
    $('#pass').val('');
    $('#email1').val('');
}
