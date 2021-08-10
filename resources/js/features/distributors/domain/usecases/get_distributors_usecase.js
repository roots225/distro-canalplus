export default class GetDistributorsUsecase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    return await this.repository.getAllDistributors();
  }
}