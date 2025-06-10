let inventory = [
  { name: "Widget A", price: 30 },
  { name: "Widget B", price: 120 },
  { name: "Widget C", price: 45 },
  { name: "Widget D", price: 70 },
];

// return those stocks whose values are less than 50

let lowStocks = inventory.filter((item) => item.price < 50);
// --------------------------------------------------------------

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 72 },
  { user: "Charlie", activityCount: 33 },
  { user: "Ford", activityCount: 50 },
];
// find most active user using reduce

let mostActiveUser = userActivity.reduce((acc, user) => {

    if(acc.activityCount > user.activityCount ) {
        return acc
    } else return user
});

console.log(mostActiveUser);
// --------------------------------------------------------------

