let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

// return total cost of food and utilities category

const expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] += expense.amount;
    return report;
  },
  { Food: 0, Utilities: 0 }
);

// console.log("Expense Report: ", expenseReport);
//------------------------------------------------------------

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

// return those tasks those are not completed and sort them

const uncompletedSortedTask = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);

// console.log(uncompletedSortedTask);
//--------------------------------------------------------------

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];
// return movies with their average ratings
// [{title: "Movie A", ratings: 4}, {}, {}]

const averageMovieRating = movieRatings.map((item) => {
  let ratingSum = item.ratings.reduce((acc, curr) => acc + curr, 0);
  let averageRating = ratingSum / item.ratings.length;
  return { title: item.title, averageRating: averageRating.toFixed(2) };
});

console.log(averageMovieRating);