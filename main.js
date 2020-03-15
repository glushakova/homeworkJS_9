class User {
  static canSendMessage = true;
  name = "Unknown";
  password = "Password";

  constructor(name, password) {
    this.name = name;
    this.password = password;
  }

  sendMessage(msg) {
    console.log(msg);
  }
}

class SuperUser extends User {
  static createdUsers = [];

  constructor(name, password) {
    super(name, password);
  }

  getCreatedUsers() {
    return SuperUser.createdUsers;
  }

  createUser(name, password) {
    let user = new User(name, password);
    SuperUser.createdUsers.push(user);
    return user;
  }
}

class Admin extends SuperUser {
  static deletedUsers = [];
  constructor(name, password) {
    super(name, password);
  }

  getDeletedUsers() {
    return Admin.deletedUsers;
  }

  deleteUser(user) {
    Admin.deletedUsers.push(user);
    let index = SuperUser.createdUsers.indexOf(user);
    if (index > -1) {
      SuperUser.createdUsers.splice(index, 1);
    }
  }
}

const lesha = new SuperUser("Lesha", "ne plachu zarplatu");
let nastya = lesha.createUser("Nastya", "hoshu est");
let oleg = lesha.createUser("Oleg", "hoshu tatu");
let ira = lesha.createUser("Ira", "waiting for boyfriend");

const kostya = new Admin("Kostya", "tipa admin");
kostya.deleteUser(nastya);

console.log(lesha.getCreatedUsers());
console.log(kostya.getDeletedUsers());
