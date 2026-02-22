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

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const description = descInput.value;
  const amount = amountInput.value;
  const category = categoryInput.value;
  const date = dateInput.value;

  if (
    !validateDescription(description) ||
    hasDuplicateWords(description) ||
    !validateAmount(amount) ||
    !validateCategory(category) ||
    !validateDate(date)
  ) {
    alert("Please fix validation errors.");
    return;
  }

  const tableBody = document.querySelector("tbody");

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${description}</td>
    <td>${amount}</td>
    <td>${category}</td>
    <td>${date}</td>
  `;

  tableBody.appendChild(row);

  form.reset();
});
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
  }