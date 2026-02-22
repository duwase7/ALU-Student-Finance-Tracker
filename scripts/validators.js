
export function validateDescription(desc) {
    return /^[A-Za-z\s]{3,}$/.test(desc);
  }
  export function hasDuplicateWords(desc) {
    return /\b(\w+)\s+\1\b/i.test(desc);
  }
  
  export function validateAmount(amount) {
    return /^(0|[1-9]\d*)(\.\d{1,2})?$/.test(amount);
  }
  
  export function validateCategory(cat) {
    return /^[A-Za-z]{3,}$/.test(cat);
  }
  
  export function validateDate(date) {
    return /^\d{4}-\d{2}-\d{2}$/.test(date);
  }