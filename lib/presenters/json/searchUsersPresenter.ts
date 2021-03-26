import { Presenter } from "/lib/presenters/presenter.ts";
import { FindUserOutput } from "/lib/usecases/findUserUseCase.ts";

export class SearchUsersPresenter
  implements Presenter<FindUserOutput[], string> {
  from(xs: FindUserOutput[]): string {
    return JSON.stringify(
      xs.map((x) => ({
        name: x.name,
      })),
    );
  }
}
