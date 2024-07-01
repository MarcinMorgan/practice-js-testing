export default class User {
    constructor({email, password}) {
        this.email = checkEmail(email);
        this.password = checkPassword(password);
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    login() {
        if(this.email.includes('@devmentor.pl')) {
            return true;
        } else {
            return false;
        }
    }
}

function checkEmail(email) {
    if (email.includes('@')) {
        return email;
    } else {
        throw new Error('Niepoprawny email');
    }
}

function checkPassword(password) {
    if (password.length > 6) {
        return password;
    } else {
        throw new Error('Za krótkie hasło');
    }
}