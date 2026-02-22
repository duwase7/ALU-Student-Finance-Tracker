console.log("App connected");

import {
  validateDescription,
  validateAmount,
  validateCategory,
  validateDate,
  hasDuplicateWords
} from "./validators.js";

const form = document.querySelector("form");

const descInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");

const descError = document.getElementById("desc-error");
const amountError = document.getElementById("amount-error");
const categoryError = document.getElementById("category-error");
const dateError = document.getElementById("date-error");

descInput.addEventListener("input", () => {
  const value = descInput.value;

  if (!validateDescription(value)) {
    descError.textContent = "Minimum 3 letters, no numbers.";
  } else if (hasDuplicateWords(value)) {
    descError.textContent = "Duplicate consecutive words detected.";
  } else {
    descError.textContent = "";
  }
});

amountInput.addEventListener("input", () => {
  if (!validateAmount(amountInput.value)) {
    amountError.textContent = "Enter valid positive amount (max 2 decimals).";
  } else {
    amountError.textContent = "";
  }
});

categoryInput.addEventListener("input", () => {
    if (!validateCategory(categoryInput.value)) {
      categoryError.textContent = "Only letters allowed (no numbers).";
    } else {
      categoryError.textContent = "";
    }
  });
  
  dateInput.addEventListener("input", () => {
    if (!validateDate(dateInput.value)) {
      dateError.textContent = "Enter valid date (YYYY-MM-DD).";
    } else {
      dateError.textContent = "";
    }
  });

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const description = descInput.value;
  const amount = amountInput.value;
  const category = categoryInput.value;
  const date = dateInput.value;

  let hasError = false;

  if (!validateDescription(description)) {
    descError.textContent = "Minimum 3 letters, no numbers.";
    hasError = true;
  }
  
  if (hasDuplicateWords(description)) {
    descError.textContent = "Duplicate consecutive words detected.";
    hasError = true;
  }
  
  if (!validateAmount(amount)) {
    amountError.textContent = "Enter valid positive amount (max 2 decimals).";
    hasError = true;
  }
  
  if (!validateCategory(category)) {
    categoryError.textContent = "Only letters allowed.";
    hasError = true;
  }
  
  if (!validateDate(date)) {
    dateError.textContent = "Enter valid date.";
    hasError = true;
  }
  
  if (hasError) return;

  form.reset();

});
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
  }
import { exportCSV } from "./storage.js";
import { state } from "./state.js";

document.getElementById("export-csv")
  .addEventListener("click", () => {
    exportCSV(state.transactions);
  });

  const toggle = document.getElementById("theme-toggle");


const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.add(savedTheme);
}


toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "");
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js")
      .then(() => console.log("Service Worker Registered"))
      .catch(err => console.error("SW registration failed:", err));
  }
