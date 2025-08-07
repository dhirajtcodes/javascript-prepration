/** Interfaces  extend*/

interface IModule {
  name: "Dhiraj";
  age: 60;
}

interface IUpdateModule extends IModule {
  collage: "Shri Guru gobind";
}

/** With Type */
type IModules = {
  name: "Dhiraj";
  age: 50;
};

type IModuleData = {
  collage: "Shri Guru";
} & IModules; // Can do

type Data = IModuleData & IModules;

/** Other */
let id: number = 5;
let nameData: string = "John";
let isActive: boolean = true;
let x: any = "Can be anything";

let ids: number[] = [1, 2, 3];
let names: string[] = ["a", "b"];
let tuple: [number, string] = [1, "one"];

// 2️⃣ Union Types
let uid: number | string;
uid = 101;
uid = "A101";

// 3️⃣ Type Aliases

type Users = {
  id: number;
  name: string;
};

const user1: Users = {
  id: 1,
  name: "Alice",
};

// 5️⃣ Functions

const getData = (values: number): number => {
  return values;
};

const getApiCall = async (): Promise<{ name: string; age: number }> => {
  return { name: "Dhiraj", age: 50 };
};

// 6️⃣ Optional and Default Parameters
function greets(name: string = "Guest") {
  return `Hello, ${name}`;
}

function printUser(id: number, name?: string) {
  console.log(id, name);
}

// 7️⃣ Enums

enum Direction {
  up,
  down,
  forward,
  backward,
}

let dir: Direction = Direction.up;

// 8️⃣ Type Assertion
let cid: any = 1;
let customerId = cid as number;

// 🔁 Generics
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello");
let out = identity<number>(10);

// 7. Utility Types
type Userss = { name: string; age: number };
type PartialUser = Partial<Userss>; // { name?: string; age?: number }

// ✅ Required<Type>
type FullUser = Required<PartialUser>; // { name: string; age: number }

// ✅ Readonly<Type>
// Makes all properties read-only.
type ReadonlyUser = Readonly<User>; // { readonly name: string; ... }

// ✅ Record<Keys, Type>
// Creates an object type with specific keys and types.
type Roles = "admin" | "user";
const roleObj: Record<Roles, string> = {
  admin: "Admin Role",
  user: "User Role",
};

// ✅ Pick<Type, Keys>
// Creates a type by picking specific keys.
type UserName = Pick<User, "name">; // { name: string }

// ✅ Omit<Type, Keys>
// Creates a type by omitting specific keys.
type UserWithoutAge = Omit<User, "age">; // { name: string }

//Keyof & typeof
type User = { id: number; name: string };
type UserKeys = keyof User; // "id" | "name"

const persons = {
  name: "John",
  age: 30,
};

type PersonType = typeof persons;
// PersonType = { name: string; age: number }

// 🔸 10. Conditional Types
type IsString<T> = T extends string ? "Yes" : "No";
type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"

//🔸 13. Type Guards
function isString(val: unknown): val is string {
  return typeof val === "string";
}

// 14. Custom Utility Types
type Nullable<T> = T | null | undefined;

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

// 🔍 unknown in TypeScript
// The unknown type in TypeScript is a safe and type-safe alternative to any.
