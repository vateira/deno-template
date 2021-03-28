import { Presenter } from "/lib/presenters/presenter.ts";
import * as CustomerFindUser from "/lib/usecases/findUserUseCase.ts";

export class FindUserPresenter
  implements Presenter<CustomerFindUser.Output, string> {
  from(e: CustomerFindUser.Output): string {
    return JSON.stringify({
      name: e.name,
    });
  }
}
