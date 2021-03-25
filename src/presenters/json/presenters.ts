import * as Base from "/src/presenters/presenter.ts";
import { FindUserPresenter } from "/src/presenters/json/findUserPresenter.ts";
import { SearchUsersPresenter } from "/src/presenters/json/searchUsersPresenter.ts";

export class Presenters implements Base.Presenters<string> {
  user: FindUserPresenter = new FindUserPresenter();
  users: SearchUsersPresenter = new SearchUsersPresenter();
}
