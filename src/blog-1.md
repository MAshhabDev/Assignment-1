## Introduction

One Of the biggest benefit of TypeScript is that it adds type safety to JavaScript. Bt always not every type like any and unknown. The Any type turns off the type checking system of TypeScript and the Unknown type forces to verify data before use it. So now let's talk about these in more details

---

# What Is Any Type?

At first we need to know what's the definition of Any. In TypeScript Any type says that there will be no need to check the type of this variable which is declare as Any.

Example: 

<<<<<<< HEAD

=======
>>>>>>> c3b7efc (Fixed the isssue)
let value: any = "Hello";
value.toUpperCase();
value();

In this code TypeScript did not show any error. Although Strings cant be called like functions the code will still compile.

Now let's talk about why Any type called Type safety hole. TypeScript usually helps us to catch errors during development, but using any destroys that protection.

Example:

function printLength(value: any) {
  console.log(value.length);
}
printLength(100);

In here TypeScript will not give any error here. But there will be a problem at runtime because number does not have a length property. That is why any is called Type Safety Hole Because it destroy TypeScripts safety system.

---

# What Is Unknown?

Unknown also can store any value, but it does not allow direct use. Let's see an example

let value: unknown = "TypeScript";
value.toUpperCase();

Here TypeScript will give an error.Because TypeScript does not yet know whether value is actually a string
And this is what makes unknown safer.

# Use case Of Unknown Type

1. By Using unknown it Reduces runtime errors
2. Increases type safety
3. Safer code can be written

---

# What is Type Narrowing?

Before using any variable type value, the type must be verified. This process is called Type Narrowing

Example:

let value: unknown = "TypeScript";
if (typeof value === "string") {
console.log(value.toUpperCase());
}

Here typeof value === "string" After this check, TypeScript understands that value is actually a string Then the string method can be used safely.

---

# Conclusion

<<<<<<< HEAD
Although any and unknown may look similar, their purposes are different. Any disables TypeScript's safety system and forces unknown type checking and unknown requires proper type checking before usage.

Therefore, unknown is a much safer and recommended choice in modern TypeScript development.
=======
Although any and unknown may look similar, their purposes are different. Any disables TypeScript's safety system and forces unknown type checking and unknown requires proper type checking before usage. Therefore, unknown is a much safer and recommended choice in modern TypeScript development.
>>>>>>> c3b7efc (Fixed the isssue)
