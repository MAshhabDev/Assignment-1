## Introduction

Object-Oriented Programming (OOP) is one of the most important programming concepts in modern software development. Using OOP in TypeScript makes it easier to create scalable, maintainable, and reusable applications.

Large-scale projects usually contain thousands of lines of code, multiple modules, and complex business logic. Without proper structure, these projects become difficult to maintain.

There are four main pillars of OOP:

- Inheritance
- Polymorphism
- Abstraction
- Encapsulation

These four concepts together help reduce application complexity. Now let's discuss these concepts in more detail.

---

# 1. Inheritance

Inheritance allows one class to inherit the properties and methods of another class. This helps reduce code duplication and increases code reusability.

## Example

```ts
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Student extends Person {
  roll: number;

  constructor(name: string, roll: number) {
    super(name);
    this.roll = roll;
  }
}
```

Here, the `Student` class inherits the `Person` class. So there is no need to rewrite common properties again.

### Benefits of Inheritance

1. Reduces code duplication
2. Increases reusability
3. Keeps project structure clean

---

# 2. Polymorphism

Polymorphism means the same method can behave differently for different objects.

## Example

```ts
class Person {
  getSleep() {
    console.log("I sleep 8 hours");
  }
}

class Student extends Person {
  getSleep() {
    console.log("I sleep 7 hours");
  }
}

class Developer extends Person {
  getSleep() {
    console.log("I sleep 6 hours");
  }
}
```

Here, all classes use the same `getSleep()` method, but the behavior is different for each object.

### Advantages of Polymorphism

1. Creates flexible code structure
2. Easier to extend features
3. Increases maintainability

---

# 3. Abstraction

Abstraction hides unnecessary implementation details and exposes only essential functionality.

## Example

```ts
abstract class Payment {
  abstract pay(amount: number): void;
}

class CreditCardPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount}`);
  }
}
```

Here, users only know about the `pay()` method. They do not need to know the internal payment process.

### Advantages of Abstraction

1. Simplifies complex systems
2. Hides unnecessary details
3. Improves code readability

---

# 4. Encapsulation

Encapsulation means protecting data and providing controlled access.

## Example

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```

Here, `balance` cannot be accessed directly from outside the class.

### Benefits of Encapsulation

1. Provides data protection
2. Increases security
3. Makes debugging easier

---

# Why Is OOP Important in Large TypeScript Projects?

Large applications usually have:

- Multiple developers
- Shared business logic
- Complex modules

OOP helps organize these systems properly.

By using OOP:

- Code becomes reusable
- Features become easier to extend
- Bug tracking becomes easier

That is why OOP is very important in enterprise-level TypeScript applications.

---

# Conclusion

The four pillars of OOP help create clean and scalable TypeScript applications.

- Inheritance reduces duplication
- Polymorphism increases flexibility
- Abstraction hides complexity
- Encapsulation protects data

Together, these concepts make applications easier to manage, maintain, and extend.
