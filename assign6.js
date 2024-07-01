// Create a user object
let user = {
    name: "Anuj",
    email: "Anuj.2809@example.com",
    age: 30
};

// Function to change the user's name
function changeName(newName) {
    user.name = newName;
    console.log(`Name updated to: ${user.name}`);
}

// Function to update the user's email
function updateEmail(newEmail) {
    user.email = newEmail;
    console.log(`Email updated to: ${user.email}`);
}

// Function to calculate the user's birth year
function calculateBirthYear() {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - user.age;
    return birthYear;
}

// Function to display all user information
function displayUserInfo() {
    console.log("User Information:");
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Age: ${user.age}`);
    console.log(`Birth Year: ${calculateBirthYear()}`);
}

// Example usage of the functions
console.log("Initial user object:", user);

changeName("Anand");
updateEmail("Anand.7809@example.com");

console.log("Updated user object:", user);

displayUserInfo();