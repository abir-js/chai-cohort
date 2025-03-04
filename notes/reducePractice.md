# JavaScript `reduce()` Practice Challenges 🚀

## 1️⃣ Sum of All Numbers
👉 Given an array of numbers, return the total sum.

### Example:
```js
let numbers = [5, 10, 15, 20];
```
🔹 **Expected Output** → `50`

### Hint 🧐
Use `reduce()` with an accumulator starting at `0` and add each number to it.

---

## 2️⃣ Find Maximum Number
👉 Use `reduce()` to find the **largest number** in an array.

### Example:
```js
let numbers = [12, 45, 67, 23, 89, 34];
```
🔹 **Expected Output** → `89`

### Hint 🧐
Compare `accumulator` with `currentValue` and keep the larger one.

---

## 3️⃣ Count Occurrences of Words
👉 Given an array of words, return an object with the count of each word.

### Example:
```js
let words = ["apple", "banana", "apple", "orange", "banana", "apple"];
```
🔹 **Expected Output** → `{ apple: 3, banana: 2, orange: 1 }`

### Hint 🧐
Use an object as the accumulator and increment the count of each word dynamically.

---

## 4️⃣ Group People by Age
👉 Given an array of people, **group them by age**.

### Example:
```js
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 },
  { name: "Eve", age: 35 }
];
```
🔹 **Expected Output** →  
```js
{
  25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
  30: [{ name: "Bob", age: 30 }, { name: "David", age: 30 }],
  35: [{ name: "Eve", age: 35 }]
}
```

### Hint 🧐
Use an object as the accumulator, and group by `age` dynamically.

---

## 5️⃣ Flatten a Nested Array
👉 Convert a nested array into a single flat array.

### Example:
```js
let nestedArray = [[1, 2], [3, 4, 5], [6]];
```
🔹 **Expected Output** → `[1, 2, 3, 4, 5, 6]`

### Hint 🧐
Use `reduce()` to concatenate arrays together.

---

## 6️⃣ Calculate Average Score
👉 Given an array of student scores, return the **average score**.

### Example:
```js
let scores = [80, 90, 100, 70, 85];
```
🔹 **Expected Output** → `85`

### Hint 🧐
Sum all values and divide by the array length.

---

## 7️⃣ Convert an Array of Objects into a Single Object
👉 Convert an array of objects into a single object using a specific key.

### Example:
```js
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
```
🔹 **Expected Output** →  
```js
{
  1: { id: 1, name: "Alice" },
  2: { id: 2, name: "Bob" },
  3: { id: 3, name: "Charlie" }
}
```

### Hint 🧐
Use `id` as the key and store the whole object as the value.

---

## 8️⃣ Calculate Total Price of Items in a Cart
👉 Given an array of shopping cart items, calculate the total price.

### Example:
```js
let cart = [
  { item: "Laptop", price: 1000, quantity: 2 },
  { item: "Mouse", price: 50, quantity: 3 },
  { item: "Keyboard", price: 80, quantity: 1 }
];
```
🔹 **Expected Output** → `2230` (Total price)

### Hint 🧐
Multiply `price` by `quantity` and sum up the total.

---

### Happy Coding! 🎯💻

