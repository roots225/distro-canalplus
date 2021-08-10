export default class ImportDistributorsFromFile {
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    return await this.repository.launchImport();
  }
}