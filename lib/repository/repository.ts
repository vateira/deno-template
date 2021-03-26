import { User } from "/lib/entities/user.ts";

/// deno-lint-ignore no-explicit-any ban-types
// type Constructor<T> = new (...args: any[]) => {};

export interface Listable<T> {
  list: () => Promise<T[]>;
}

export interface Findable<T> {
  find: (query: Record<string, unknown>) => Promise<T | null>;
}

export interface Creatable<T> {
  create: () => T;
}

export interface Modifiable<T> {
  modify: () => T;
}

export interface Deletable<T> {
  delete: () => T;
}

export interface Repository {
  user: Findable<User> & Listable<User>;

  //
  open(): void;
  close(): void;
}
