import { Actor } from "/lib/actors/actor.ts";

export abstract class UseCase<T extends Actor> {
  constructor(readonly actor: T) {}
}
