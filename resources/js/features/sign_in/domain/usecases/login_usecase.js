export default class LoginUsecase {

  constructor(repository) {
    this.repository = repository;
  }

  async execute(loginParams) {
    return await this.repository.fetchLogin(loginParams);
  }
}