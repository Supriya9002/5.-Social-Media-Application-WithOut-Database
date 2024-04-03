export default class UserModel{
    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static add(name, email, password){
        const user = new UserModel(users.length + 1, name, email, password);
        users.push(user);
        return user;
    }
    static isValidLogin(email, password){
        return users.find((u)=> u.email == email && u.password == password);
    }
    static getAll(){
        return users;
    }
}
var users = [
    new UserModel(
        "1",
        "Supriya Haldar",
        "haldarsupriya84@gmail.com",
        "Supriya123@"
    ),
    new UserModel(
        "2",
        "Rupak Manna",
        "rupak85@gmail.com",
        "Ru65pak@"
    ),
    new UserModel(
        "3",
        "Amit Das",
        "amitdas75@gmail.com",
        "@856amit"
    )
];