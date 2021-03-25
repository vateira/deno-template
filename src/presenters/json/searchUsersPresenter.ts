import { Presenter } from "/src/presenters/presenter.ts";
import { FindUserOutput } from "/src/usecases/findUserUseCase.ts";

export class SearchUsersPresenter
  implements Presenter<FindUserOutput[], string> {
  from(xs: FindUserOutput[]): string {
    return JSON.stringify(
      xs.map((x) => ({
        name: x.name,
      }))
    );
  }
}
