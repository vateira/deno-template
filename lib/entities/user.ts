import { Entity } from "/lib/entities/entity.ts";

export class User implements Entity {
  constructor(readonly id: number, readonly name: string) {}
}
