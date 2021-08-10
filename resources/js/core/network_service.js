import axios from 'axios';
import { AuthService } from './auth_service'
import router from '../router'

export class NetworkService {
  base_url = '/api/v1';

  constructor(isAuth = false) {
    this.isAuth = isAuth;
    this.instance = axios.create({
      baseURL: this.base_url
    });

    this.init();
  }

  static getInstance(isAuth = false) {
    return (new NetworkService(isAuth)).instance;
  }

  init() {
    this.instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    this.instance.defaults.headers.common['Accept'] = 'application/json';
    
    if(this.isAuth) {
      this.instance.interceptors.request.use(request => {
        request.headers.Authorization = AuthService.getToken();
        return request;
      }, error => {
        return Promise.reject(error);
      });

      this.instance.interceptors.response.use(response => {
        return response;
      }, error => {
        if (error.response.status === 401) {
          AuthService.logOut();
          router.push({name: 'login'});
        }
      })
    }
  }
}