import { Presenter } from "/lib/presenters/presenter.ts";
import * as CustomerFindUser from "/lib/usecases/findUserUseCase.ts";

export class SearchUsersPresenter
  implements Presenter<CustomerFindUser.Output[], string> {
  from(xs: CustomerFindUser.Output[]): string {
    return JSON.stringify(
      xs.map((x) => ({
        name: x.name,
      })),
    );
  }
}
