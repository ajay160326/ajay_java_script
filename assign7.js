function validateEmail(email) {
    // Regular expression pattern for validating email
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the email against the pattern
    return pattern.test(email);
}

// Example usage:
let email1 = "anuj.dir@example.com";
let email2 = "invalid-email.com";

console.log(email1 + ":", validateEmail(email1)); // true
console.log(email2 + ":", validateEmail(email2)); // false
