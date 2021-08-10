import { ServerFailure } from '../../../../core/failures'
import { AuthService } from '../../../../core/auth_service'

export default class SignInRepository {
  constructor(dataSource) {
    this.dataSource = dataSource;
  }

  async fetchLogin(loginParams) {
    try {
      const response = await this.dataSource.fetchLogin(loginParams);
      const {user, token} = response.data.data;
      AuthService.login(user, token);
    } catch (e) {
      return new ServerFailure(e.message);
    }
  }
}