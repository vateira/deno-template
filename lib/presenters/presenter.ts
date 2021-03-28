import * as CustomerFindUser from "/lib/usecases/findUserUseCase.ts";

export interface Presenter<T, K> {
  from(entity: T): K;
}

export interface Presenters<T> {
  user: Presenter<CustomerFindUser.Output, T>;
  users: Presenter<CustomerFindUser.Output[], T>;
}
