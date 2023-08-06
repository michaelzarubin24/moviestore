"use strict";
alert("Welcome!");
const store = [
  {
    category: "drama",
    movie: [
      {
        label: "Joker",
        release: new Date().getFullYear().toString(),
        tags: ["wow", "hahaha"],
      },
      {
        label: "Oppenheimer",
        release: new Date().getFullYear().toString(),
        tags: ["bomb", "nuclear"],
      },
    ],
  },
  {
    category: "comedy",
    movie: [
      {
        label: "FastFurious",
        release: new Date().getFullYear().toString(),
        tags: ["cars", "family"],
      },
      {
        label: "Deadpool",
        release: new Date().getFullYear().toString(),
        tags: ["colossus", "wolverine"],
      },
    ],
  },
  {
    category: "marvel",
    movie: [
      {
        label: "Avengers",
        release: new Date().getFullYear().toString(),
        tags: ["avengers", "assemble"],
      },
      {
        label: "Iron Man",
        release: new Date().getFullYear().toString(),
        tags: ["tonystark", "ironman"],
      },
    ],
  },
];

let isRunning = true;
const isArray = Array.isArray;

while (isRunning) {
  const movie = prompt(`Pick your movie  + ${getCategories(store)}...`);
  const matchedCategory = matchCategories(movie, store);

  if (matchedCategory) {
    console.log(matchedCategory.movie);
  } else {
    console.log("Category not found.");
  }

  isRunning = !isExit();
}

function getCategories(arr) {
  if (!isArray(arr)) return;
  const categories = [];

  for (const element of arr) {
    const hasCategory = "category" in element;
    if (hasCategory) categories.push(element.category);
  }
  return categories.join(" ,");
}

function matchCategories(pickedCategory, arr) {
  if (!isArray(arr)) return null;

  for (let i = 0; i < arr.length; i++) {
    const category = arr[i];
    const hasCategory = category.category === pickedCategory;
    if (hasCategory) {
      return category;
    }
  }
  return null;
}

function isExit() {
  return !window.confirm("Do you want to leave?");
}
