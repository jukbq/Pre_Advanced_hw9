
let uaer_array: any[] = [];

/*------------------------------Заповнення таблиці-----------------------*/

function render(): void {
    let table = '<tr>';
    $.each(uaer_array, function (key, data) {
        let i = key
        table += '<th>'
        table += key += 1
        table += '</th>'
        table += '<td>' + data['name'] + '</td>'
        table += '<td>' + data['password'] + '</td>'
        table += '<td>' + data['male'] + '</td>'
        table += '<td>'
        table += '<button type="button" onclick="edit(' + i + ')" class="btn btn-warning">Edit</button>'
        table += '</td>'
        table += '<td>'
        table += '<button type="button" onclick="deleteUser(' + i + ')" class="btn btn-danger deleteUser" >Delete</button>'
        table += '</td>'
        table += '</tr>'

    });
    $('.tab_body').html(table);


};

/*----------------------------обєкт user--------------------------------*/
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
        let person = {
            "name": this.login,
            "password": this.pass,
            "male": this.email1
        }
        uaer_array.push(person)
    }
    public push_array_index(i: number): any {
        let person = {
            "name": this.login,
            "password": this.pass,
            "male": this.email1
        }
        uaer_array.splice(i, 0, person)
    }
};

/*--------------------------Кнопка add_user------------------------*/
function add_user(): void {
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


/*--------------------------Кнопка delete------------------------*/

function deleteUser(i: any): void {
    $(".tab_body").empty();
    let arr_index: any = i
    uaer_array.splice(i, 1)
    render()


}

/*--------------------------Кнорка Edit---------------------------*/

let userIndex: any = ''
function edit(i: any): void {

    $.each(uaer_array, function (key, data) {
        if (key === i) {
            $('#login').val(data['name']);
            $('#pass').val(data['password']);
            $('#email1').val(data['male']);
        }
    })
    userIndex = i;
    $('.add_user').addClass('hide_button')
    $('.edit_user').addClass('showe_button')




}; 


function saveEditUser(): void {
    let login = $('#login').val();
    let pass = $('#pass').val();
    let email1 = $('#email1').val();
    let i = userIndex
    $(".tab_body").empty();
    uaer_array.splice(i, 1)
    let reg = new User(`${login}`, `${pass}`, `${email1}`)
    reg.push_array_index(i)

    $('#login').val('');
    $('#pass').val('');
    $('#email1').val('');

    render()
    $('.add_user').removeClass('hide_button')
    $('.edit_user').removeClass('showe_button')
  
    console.log(i);
    console.log(uaer_array);

}