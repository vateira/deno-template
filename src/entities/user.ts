import { Entity } from "/src/entities/entity.ts";

export class User implements Entity {
  constructor(readonly id: number, readonly name: string) {}
}
