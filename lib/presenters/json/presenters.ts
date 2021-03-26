import * as Base from "/lib/presenters/presenter.ts";
import { FindUserPresenter } from "/lib/presenters/json/findUserPresenter.ts";
import { SearchUsersPresenter } from "/lib/presenters/json/searchUsersPresenter.ts";

export class Presenters implements Base.Presenters<string> {
  user: FindUserPresenter = new FindUserPresenter();
  users: SearchUsersPresenter = new SearchUsersPresenter();
}
