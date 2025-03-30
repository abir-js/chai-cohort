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
