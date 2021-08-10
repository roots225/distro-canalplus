export default class SignInRemoteDataSource {
  constructor(networkService) {
    this.networkService = networkService;
  }

  async fetchLogin(loginParams) {
    const response = await this.networkService.post('/login', loginParams)
    return response;
  }
}