import { ServerFailure } from '../../../../core/failures';

export default class DistributorRepository {
  constructor(dataSource) {
    this.dataSource = dataSource;
  }

  async getAllDistributors() {
    try {
      return await this.dataSource.fetchAllDistributors();
    } catch (e) {
      return new ServerFailure(e.message);
    }
  }

  async launchImport() {
    try {
      return await this.dataSource.launchImport();
    } catch (e) {
      return new ServerFailure(e.message);
    }
  }
}