import router from "../router";

export class AuthService {
  static setToken(token, user) {
    window.localStorage.setItem('user', JSON.stringify(user));
    window.localStorage.setItem('token', `Bearer ${token}`);
  }

  static getToken() {
    return window.localStorage.getItem('token') ?? null;
  }

  static isLoggedIn() {
    return this.getToken() != null;
  }

  static login(user, token) {
    this.setToken(token, user);
    router.push({name: 'home'});
  }

  static logOut() {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    router.push({name: 'login'});
  }

  static getUser() {
    if (this.getToken()) {
      let user = window.localStorage.getItem('user');
      if (typeof user != 'undefined') {
        try {
          return JSON.parse(user);
        } catch(e) {
          return null;
        }
      }
    }
    return null;
  }
}