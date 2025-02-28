let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Keyboards", price: 80 },
];

// Use Reduce
let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0);
console.log(totalSales);

// ---------------------------------------------------------
let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];
// remove those with stock no < 90

let lowStock = inventory.filter((item) => item.stock < 50);
console.log(typeof lowStock);

//---------------------------------------------------------

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 72 },
  { user: "Charlie", activityCount: 33 },
  { user: "Ford", activityCount: 50 },
];
// find the most active user
let activeUser = userActivity.reduce((acc, user) =>
  acc.activityCount < user.activityCount ? user : acc
);

console.log(activeUser);

// -----------------------------------------------------------------
let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

// return total cost of food and utilities category
// let expenseReport = [{"Food": 0}, {"Utilities": 0}]
let expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] += expense.amount;
    // dynamic for all category
    // report[expense.category] = (expense.category || 0) + expense.amount;
    return report;
  },
  { Food: 0, Utilities: 0 }
);
console.log("Expense Report", expenseReport);

//---------------------------------------------------------------
let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

// return those tasks those are not completed and sort them
let sortedPendingTasks = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);

//-----------------------------------------------------
let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];
// [{title: "Movie A", ratings: 4}, {}, {}]

let averageRatings = movieRatings.map((movie) => {
  let total = movie.ratings.reduce((sum, rating) => sum + rating);
  let average = total / movie.ratings.length;
  return { title: movie.title, ratings: average.toFixed(2) };
});

console.log(averageRatings);

// -------------------------------------------------------------
