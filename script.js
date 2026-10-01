// ========================================
// DEVFIX - PREDEFINED ERROR DATABASE
// ========================================

const errors = [

    // JAVASCRIPT ERRORS

    {
        id: 1,
        language: "JavaScript",
        name: "TypeError: Cannot read properties of undefined",
        message: "TypeError: Cannot read properties of undefined (reading 'name')",

        what: "The program is trying to access a property of a variable that has the value undefined.",

        why: "The variable has not been assigned a valid object before its property is accessed.",

        fix: "Check whether the object exists before accessing its properties.",

        code: `let user;

if (user) {
    console.log(user.name);
} else {
    console.log("User is not defined");
}`
    },

    {
        id: 2,
        language: "JavaScript",
        name: "ReferenceError: x is not defined",
        message: "ReferenceError: x is not defined",

        what: "The program is using a variable that JavaScript cannot find.",

        why: "The variable may not have been declared or may be outside its scope.",

        fix: "Declare the variable using let, const, or var before using it.",

        code: `let x = 10;

console.log(x);`
    },

    {
        id: 3,
        language: "JavaScript",
        name: "SyntaxError: Unexpected token",
        message: "SyntaxError: Unexpected token",

        what: "JavaScript encountered a symbol or keyword in an unexpected position.",

        why: "There may be a missing bracket, comma, quotation mark, or incorrect syntax.",

        fix: "Check the syntax and make sure all brackets and statements are correctly written.",

        code: `let numbers = [10, 20, 30];

console.log(numbers);`
    },

    {
        id: 4,
        language: "JavaScript",
        name: "TypeError: Assignment to constant variable",
        message: "TypeError: Assignment to constant variable.",

        what: "The program is trying to assign a new value to a variable declared with const.",

        why: "A const variable cannot be reassigned after initialization.",

        fix: "Use let instead of const if the variable needs to be reassigned.",

        code: `let age = 18;

age = 19;

console.log(age);`
    },


    // PYTHON ERRORS

    {
        id: 5,
        language: "Python",
        name: "NameError: name is not defined",
        message: "NameError: name 'x' is not defined",

        what: "Python cannot find the variable or name used in the program.",

        why: "The variable has not been declared or has been misspelled.",

        fix: "Define the variable before using it and check its spelling.",

        code: `x = 10

print(x)`
    },

    {
        id: 6,
        language: "Python",
        name: "IndentationError",
        message: "IndentationError: expected an indented block",

        what: "Python expected an indented statement inside a function, loop, or condition.",

        why: "Python uses indentation to define blocks of code.",

        fix: "Use consistent indentation, generally four spaces.",

        code: `if True:
    print("Hello World")`
    },

    {
        id: 7,
        language: "Python",
        name: "TypeError: unsupported operand",
        message: "TypeError: unsupported operand type(s)",

        what: "An operation is being performed on incompatible data types.",

        why: "For example, adding a string and an integer directly is not supported.",

        fix: "Convert the values to compatible data types before performing the operation.",

        code: `age = 18

print("Age: " + str(age))`
    },

    {
        id: 8,
        language: "Python",
        name: "ZeroDivisionError",
        message: "ZeroDivisionError: division by zero",

        what: "The program is attempting to divide a number by zero.",

        why: "Division by zero is undefined in ordinary arithmetic.",

        fix: "Check that the divisor is not zero before performing division.",

        code: `a = 10
b = 2

if b != 0:
    print(a / b)
else:
    print("Cannot divide by zero")`
    },


    // JAVA ERRORS

    {
        id: 9,
        language: "Java",
        name: "NullPointerException",
        message: "java.lang.NullPointerException",

        what: "The program is trying to use an object reference that is null.",

        why: "The object has not been initialized with a valid instance.",

        fix: "Initialize the object or check for null before accessing its methods.",

        code: `String name = null;

if (name != null) {
    System.out.println(name.length());
} else {
    System.out.println("Name is null");
}`
    },

    {
        id: 10,
        language: "Java",
        name: "ArrayIndexOutOfBoundsException",
        message: "java.lang.ArrayIndexOutOfBoundsException",

        what: "The program is accessing an array position outside its valid range.",

        why: "Array indexing starts at zero, and the requested index is too large or negative.",

        fix: "Use an index between zero and array.length - 1.",

        code: `int[] numbers = {10, 20, 30};

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}`
    },

    {
        id: 11,
        language: "Java",
        name: "NumberFormatException",
        message: "java.lang.NumberFormatException",

        what: "Java cannot convert the given text into the requested numeric type.",

        why: "The input contains characters that do not represent a valid number.",

        fix: "Validate the input before parsing it.",

        code: `String value = "123";

int number = Integer.parseInt(value);

System.out.println(number);`
    },


    // C ERRORS

    {
        id: 12,
        language: "C",
        name: "Expected semicolon",
        message: "error: expected ';' before",

        what: "The compiler expected a semicolon at the end of a statement.",

        why: "A semicolon may have been omitted from a declaration or instruction.",

        fix: "Add a semicolon at the appropriate position.",

        code: `#include <stdio.h>

int main() {
    int a = 10;
    printf("%d", a);

    return 0;
}`
    },

    {
        id: 13,
        language: "C",
        name: "Undeclared identifier",
        message: "error: 'x' undeclared",

        what: "The program uses a variable that has not been declared.",

        why: "The variable may be missing a declaration or may have been misspelled.",

        fix: "Declare the variable before using it.",

        code: `#include <stdio.h>

int main() {
    int x = 10;

    printf("%d", x);

    return 0;
}`
    },

    {
        id: 14,
        language: "C",
        name: "Format specifier mismatch",
        message: "warning: format specifies type",

        what: "The format specifier in printf or scanf does not match the variable type.",

        why: "Different data types require appropriate format specifiers.",

        fix: "Use %d for int, %f for float, and %c for char.",

        code: `#include <stdio.h>

int main() {
    int age = 18;

    printf("%d", age);

    return 0;
}`
    },


    // C++ ERRORS

    {
        id: 15,
        language: "C++",
        name: "Undefined reference to main",
        message: "undefined reference to main",

        what: "The linker cannot find the main function required as the program entry point.",

        why: "The main function may be missing or incorrectly declared.",

        fix: "Define the main function correctly.",

        code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";

    return 0;
}`
    },

    {
        id: 16,
        language: "C++",
        name: "No matching function",
        message: "error: no matching function for call",

        what: "The function call does not match any available function definition.",

        why: "The number or types of arguments may be incorrect.",

        fix: "Pass the correct arguments according to the function definition.",

        code: `#include <iostream>
using namespace std;

void greet(string name) {
    cout << "Hello " << name;
}

int main() {
    greet("Student");

    return 0;
}`
    }

];


// ========================================
// GET HTML ELEMENTS
// ========================================

const languageSelect = document.getElementById("languageSelect");

const errorSelect = document.getElementById("errorSelect");

const errorInput = document.getElementById("errorInput");

const solveBtn = document.getElementById("solveBtn");

const explanation = document.getElementById("explanation");

const solution = document.getElementById("solution");


// ========================================
// DISPLAY PREDEFINED ERRORS
// ========================================

function loadErrors() {

    const selectedLanguage = languageSelect.value;

    const filteredErrors = errors.filter(function(error) {
        return error.language === selectedLanguage;
    });

    errorSelect.innerHTML = '<option value="">Select an error</option>';

    filteredErrors.forEach(function(error) {

        const option = document.createElement("option");

        option.value = error.id;

        option.textContent = error.name;

        errorSelect.appendChild(option);

    });

    errorInput.value = "";

    resetResults();
}


// ========================================
// RESET RESULT BOXES
// ========================================

function resetResults() {

    explanation.innerHTML = `
        <div class="empty-state">
            <span class="empty-icon">?</span>
            <p>Your error explanation will appear here.</p>
        </div>
    `;

    solution.innerHTML = `
        <div class="empty-state">
            <span class="empty-icon">✓</span>
            <p>The suggested solution will appear here.</p>
        </div>
    `;
}


// ========================================
// WHEN LANGUAGE CHANGES
// ========================================

languageSelect.addEventListener("change", function() {

    loadErrors();

});


// ========================================
// WHEN ERROR IS SELECTED
// ========================================

errorSelect.addEventListener("change", function() {

    const selectedId = Number(errorSelect.value);

    const selectedError = errors.find(function(error) {
        return error.id === selectedId;
    });

    if (selectedError) {

        errorInput.value = selectedError.message;

    }

});


// ========================================
// ANALYZE ERROR
// ========================================

function analyzeError() {

    const selectedId = Number(errorSelect.value);

    const typedError = errorInput.value.trim();

    const selectedLanguage = languageSelect.value;

    let matchedError = null;


    // First, check the selected predefined error.

    if (selectedId) {

        matchedError = errors.find(function(error) {
            return error.id === selectedId;
        });

    }


    // If the user typed an error, search for a match.

    if (typedError) {

        matchedError = errors.find(function(error) {

            return error.language === selectedLanguage &&
            (
                typedError.toLowerCase().includes(error.name.toLowerCase()) ||
                error.name.toLowerCase().includes(typedError.toLowerCase()) ||
                typedError.toLowerCase().includes(error.message.toLowerCase())
            );

        });

    }


    // If no error is entered.

    if (!typedError && !selectedId) {

        explanation.innerHTML = `
            <h3>Input Required</h3>
            <p>Please select a predefined error or enter an error message.</p>
        `;

        solution.innerHTML = `
            <p>Choose an error to view its suggested solution.</p>
        `;

        return;

    }


    // If error is not found.

    if (!matchedError) {

        explanation.innerHTML = `
            <h3>Error Not Found</h3>

            <p>
                This error is not available in our predefined database.
            </p>

            <p>
                Please select a supported error from the dropdown.
            </p>
        `;

        solution.innerHTML = `
            <h3>Suggested Action</h3>

            <p>
                Try another predefined error or check the spelling
                of your error message.
            </p>
        `;

        return;

    }


    // Display explanation.

    explanation.innerHTML = `

        <span class="status">ERROR IDENTIFIED</span>

        <h3>What happened?</h3>

        <p>${matchedError.what}</p>

        <h3>Why might it happen?</h3>

        <p>${matchedError.why}</p>

        <h3>How can I fix it?</h3>

        <p>${matchedError.fix}</p>

    `;


    // Display solution.

    solution.innerHTML = `

        <span class="status">SOLUTION AVAILABLE</span>

        <h3>Possible Cause</h3>

        <p>${matchedError.why}</p>

        <h3>Suggested Fix</h3>

        <p>${matchedError.fix}</p>

        <h3>Corrected Code</h3>

        <pre class="code-block"><code>${escapeHTML(matchedError.code)}</code></pre>

    `;

}


// ========================================
// PROTECT CODE DISPLAY
// ========================================

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// ========================================
// BUTTON EVENT
// ========================================

solveBtn.addEventListener("click", analyzeError);


// ========================================
// LOAD ERRORS WHEN PAGE OPENS
// ========================================

loadErrors();
