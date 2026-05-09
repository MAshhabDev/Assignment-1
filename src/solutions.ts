// Problem 1
type Numbers = number[];

function filterEvenNumbers(numbers: Numbers): number[] {
  const even = numbers.filter((num) => num % 2 === 0);
  return even;
}

filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);

// Problem 2

function reverseString(reverse: string): string {
  let rev = reverse.split("");

  rev.reverse();

  return rev.join("");
}

const word = reverseString("mahir");

// Problem 3

type StringOrNumber = string | number;

function checkType(input: StringOrNumber) {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}

checkType("Hello");

// Problem 4

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

getProperty(user, "name");

// Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

let myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

function toggleReadStatus(book: Book) {
  return { ...book, isRead: true };
}

toggleReadStatus(myBook);

// Problem 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
student.getDetails();
