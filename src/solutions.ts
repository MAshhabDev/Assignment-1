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

console.log(checkType("Hello"));
