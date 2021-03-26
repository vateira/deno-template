import { Presenter } from "/lib/presenters/presenter.ts";
import { FindUserOutput } from "/lib/usecases/findUserUseCase.ts";

export class FindUserPresenter implements Presenter<FindUserOutput, string> {
  from(e: FindUserOutput): string {
    return JSON.stringify({
      name: e.name,
    });
  }
}
