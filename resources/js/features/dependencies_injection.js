import { provide, inject } from 'vue'
import { 
  DISTRUBTORS_USECASE_FACTORY, 
  SIGN_IN_USECASE_FACTORY, 
  IMPORT_DISTRUBTORS_USECASE_FACTORY
} from '../core/constants'

import router from '../router'
import { NetworkService } from '../core/network_service'

// import usecases
import GetDistributorsUsecase from './distributors/domain/usecases/get_distributors_usecase'
import ImportDistributorsFromFile from './distributors/domain/usecases/import_distributors_from_file_usecase'
import LoginUsecase from './sign_in/domain/usecases/login_usecase'


// import repositories
import DistributorRepository from './distributors/data/repositories/distributor_repository'
import SignInRepository from './sign_in/data/repositories/sign_in_repository';

// import datasources
import DistributorRemoteDataSource from './distributors/data/datasources/distributor_remote_data_source'
import SignInRemoteDataSource from './sign_in/data/datasources/sign_in_remote_data_source'



export const dependencies = (app) => {
    
    const networkService = NetworkService.getInstance(true);

    const navigation = {
        navigate(name) {
          return router.push({name: name}).then()
        }
    }

    const distributorRemotedataSource = new DistributorRemoteDataSource(networkService);
    const signInRemotedataSource = new SignInRemoteDataSource(networkService);


    const distributorRepository = new DistributorRepository(distributorRemotedataSource);
    const signInRepository = new SignInRepository(signInRemotedataSource);


    const getDistributorsUseCase = new GetDistributorsUsecase(distributorRepository)
    const importDistributorsFromFile = new ImportDistributorsFromFile(distributorRepository);
    const loginUsecase = new LoginUsecase(signInRepository);

    app.provide(DISTRUBTORS_USECASE_FACTORY, getDistributorsUseCase)
    app.provide(IMPORT_DISTRUBTORS_USECASE_FACTORY, importDistributorsFromFile)
    app.provide(SIGN_IN_USECASE_FACTORY, loginUsecase)
}