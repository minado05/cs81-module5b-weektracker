const myWeek = [
  {
    day: "Monday",
    activity: "work",
    category: "office",
    hoursSpent: 5,
    enjoyment: 1,
    timeOfDay: "afternoon",
  },
  {
    day: "Tuesday",
    activity: "work",
    category: "office",
    hoursSpent: 5,
    enjoyment: 2,
    timeOfDay: "afternoon",
  },
  {
    day: "Wednesday",
    activity: "grocery",
    category: "physical",
    hoursSpent: 4,
    enjoyment: 7,
    timeOfDay: "morning",
  },
  {
    day: "Thursday",
    activity: "work",
    category: "office",
    hoursSpent: 5,
    enjoyment: 3,
    timeOfDay: "afternoon",
  },
  {
    day: "Friday",
    activity: "homework",
    category: "school",
    hoursSpent: 8,
    enjoyment: 6,
    timeOfDay: "afternoon",
  },
  {
    day: "Saturday",
    activity: "hanging out with family",
    category: "social",
    hoursSpent: 6,
    enjoyment: 8,
    timeOfDay: "afternoon",
  },
  {
    day: "Sunday",
    activity: "homework",
    category: "school",
    hoursSpent: 8,
    enjoyment: 5,
    timeOfDay: "afternoon",
  },
];

// -- Predictions --
/*
The activity with the highest enjoyment is hanging out with family.
The category that will dominate my week is office.
The pattern that might exist around time of day is that I mostly spend the afternoon doing work or school.
*/

//-- Analysis Functions --

//total time spent for work
function workHrs(log) {
  const hrs = log.filter((entry) => entry.activity == "work");
  return hrs.reduce((sum, entry) => sum + entry.hoursSpent, 0);
}

//count total entries with certain activity
function countActivity(log, activity) {
  return log.filter((entry) => entry.activity === activity).length;
}

//most common activity
function commonActivity(log) {
  const activities = [...new Set(log.map((entry) => entry.activity))];
  let maxCount = 0;
  let maxActivity = "None";
  for (let i = 0; i < activities.length; i++) {
    currCount = countActivity(log, activities[i]);
    if (currCount > maxCount) {
      maxCount = currCount;
      maxActivity = activities[i];
    }
  }
  return maxActivity;
}

// -- Custom High-Order Function --
function modifiedWeek(testFn) {
  return myWeek.map(testFn);
}
