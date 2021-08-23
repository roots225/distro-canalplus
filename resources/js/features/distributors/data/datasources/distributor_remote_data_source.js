import { DistributorModel } from '../models/distributor_model' 

export default class DistributorRemoteDataSource {
  constructor(networkService) {
    this.networkService = networkService;
  }

  async fetchAllDistributors() {
    const response = await this.networkService.get('/distributors');
    const distributors = response.data.data.map(item => {
      return DistributorModel.fromJson(item);
    });
    return distributors;
  }

  async launchImport() {
    return await this.networkService.get('/import');
  }

  async updateDistributor(id, from){
    return await this.networkService.put(`/distributors/${id}`, form)
  }
}