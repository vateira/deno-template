import { Presenter } from "/src/presenters/presenter.ts";
import { FindUserOutput } from "/src/usecases/findUserUseCase.ts";

export class FindUserPresenter implements Presenter<FindUserOutput, string> {
  from(e: FindUserOutput): string {
    return JSON.stringify({
      name: e.name,
    });
  }
}
