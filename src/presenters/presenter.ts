import { FindUserOutput } from "/src/usecases/findUserUseCase.ts";

export interface Presenter<T, K> {
  from(entity: T): K;
}

export interface Presenters<T> {
  user: Presenter<FindUserOutput, T>;
  users: Presenter<FindUserOutput[], T>;
}
