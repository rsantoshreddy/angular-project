export class AuthServise {
  loggedIn = false;
  authenticate() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.loggedIn), 800);
    });
  }
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
