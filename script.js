const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div")

const list = [
    "1 555-555-5555",
    "1 (555) 555-5555",
    "1(555)555-5555",
    "1 555 555 5555",
    "5555555555",
    "555-555-5555",
    "(555)555-5555"
]

const regex = [
    /1 \d\d\d\-\d\d\d\-\d\d\d\d/,
    /1 \(\d\d\d\) \d\d\d\-\d\d\d\d/,
    /1\(\d\d\d\)\d\d\d\-\d\d\d\d/,
    /1 \d\d\d \d\d\d \d\d\d\d/,
    /\d\d\d\d\d\d\d\d\d\d/,
    /\d\d\d\-\d\d\d\-\d\d\d\d/,
    /\(\d\d\d\)\d\d\d\-\d\d\d\d/,
]

const clear = () => {
    input.value = "";
    results.innerText = "";
}

const check = () => {
    if (!input.value) {
        alert("Please provide a phone number")
    }
    let validNum = false;
    for (const expr of regex) {
        if (expr.exec(input.value)) {
            validNum = true;
        }
    }
    if (validNum) {
        results.innerHTML = `Valid US number:<br>${input.value}`;
    } else {
        results.innerHTML = `Invalid US number:<br>${input.value}`;
    }

}

checkBtn.addEventListener("click", () => check());

clearBtn.addEventListener("click", () => clear());
