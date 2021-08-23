export default class UpdateDistributorsUsecase {

    repository;
    constructor(repository) {
        this.repository = repository;
    }

    async execute() {
        return await this.repository.updateDistributor(id, form);
    }

}