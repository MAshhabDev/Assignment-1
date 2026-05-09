## Introduction

One of the biggest benefits of TypeScript is that it adds type safety to JavaScript. But not every type provides the same level of safety, such as `any` and `unknown`. The `any` type turns off TypeScript’s type checking system, while the `unknown` type forces us to verify data before using it. So now let's talk about these in more detail.

---

# What Is Any Type?

At first, we need to know the definition of `any`. In TypeScript, the `any` type says that there is no need to check the type of a variable declared as `any`.

Example:

```ts
let value: any = "Hello";

value.toUpperCase();
value();
```

In this code, TypeScript does not show any error. Although strings cannot be called like functions, the code will still compile.

Now let's talk about why the `any` type is called a type safety hole. TypeScript usually helps us catch errors during development, but using `any` destroys that protection.

Example:

```ts
function printLength(value: any) {
  console.log(value.length);
}

printLength(100);
```

Here, TypeScript will not give any error. But there will be a runtime problem because numbers do not have a `length` property. That is why `any` is called a **Type Safety Hole** because it destroys TypeScript’s safety system.

---

# What Is Unknown?

`unknown` can also store any value, but it does not allow direct use without checking the type first.

Example:

```ts
let value: unknown = "TypeScript";

value.toUpperCase();
```

Here, TypeScript will give an error because it does not yet know whether `value` is actually a string.

And this is what makes `unknown` safer.

# Use Case Of Unknown Type

1. By using `unknown`, it reduces runtime errors
2. Increases type safety
3. Safer code can be written

---

# What Is Type Narrowing?

Before using any `unknown` type value, the type must be verified. This process is called **Type Narrowing**.

Example:

```ts
let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Here, after checking:

```ts
typeof value === "string"
```

TypeScript understands that `value` is actually a string. Then the string method can be used safely.

---

# Conclusion

Although `any` and `unknown` may look similar, their purposes are different. `any` disables TypeScript's safety system, while `unknown` requires proper type checking before usage.

Therefore, `unknown` is a much safer and recommended choice in modern TypeScript development.git 