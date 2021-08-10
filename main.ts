
let uaer_array: any[] = [];

function render(): void {
   let table = '<tr>';
    $.each(uaer_array, function (key, data) {
        table += '<th>'
        table +=  key += 1
        table +=   '</th>'
        table +=  '<td>'+ data['name'] +  '</td>' 
        table += '<td>' + data['password'] +  '</td>'
        table += '<td>' + data['male'] +  '</td>'
        table += '<td>' 
        table += '<button type="button" onclick="edit()" class="btn btn-warning">Edit</button>'
        table +=  '</td>'
        table += '<td>' 
        table += '<button type="button" onclick="delete()" class="btn btn-danger">Delete</button>'
        table +=  '</td>'
       table += '</tr>'
    });
      
       
        
        $('.tab_body').html(table);
     /*    console.log(key += 1);
        console.log(data['name']);
        console.log(data['password']);
        console.log(data['male']); */
     
      
        
};




class User {
    public login: string;
    public pass: any;
    public email1: any;
    constructor(uLogin: string, uPass: any, uEmail: any) {
        this.login = uLogin;
        this.pass = uPass;
        this.email1 = uEmail;
    }
    public push_array(): any {
        console.log(`${this.login}, ${this.pass}, ${this.email1}`);
        let person = {
            "name": this.login,
            "password": this.pass,
            "male": this.email1
        }
        uaer_array.push(person)
        console.log(person);
        console.log('vfccbd', uaer_array);
        
    }
};

function add_user() {
    let login = $('#login').val();
    let pass = $('#pass').val();
    let email1 = $('#email1').val();

    let reg = new User(`${login}`, `${pass}`, `${email1}`)
    reg.push_array()

    $('#login').val('');
   $('#pass').val('');
    $('#email1').val('');

    render()
}