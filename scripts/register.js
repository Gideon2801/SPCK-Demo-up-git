// if already logged in, redirect to home page
if (localStorage.getItem("currentUser")) {
  location.href = "./index.html";
}

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
    
  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if (username.length < 6) {
    alert("Username must be at least 6 characters");
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters");
  } else if (!password.match(lowerCaseLetter)) {
    alert("Password must  contain a lowercase letter");
  } else if (!password.match(upperCaseLetter)) {
    alert("Password must  contain a uppercase letter");
  } else if (!password.match(numbers)) {
    alert("Password must  contain a number or special character");
  } else {
    if (localStorage.getItem("users")) {
      let users = JSON.parse(localStorage.getItem("users"));

      users.push({
        email,
        password,
        username,
      });

      localStorage.setItem("users", JSON.stringify(users));
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          {
            email,
            password,
            username,
          },
        ])
      );
    }

    alert("User created successfully, please login");
    location.href = "./login.html";
  }
});


// let userName = document.getElementById("username")
// let eMail = document.getElementById("email")
// let passWord = document.getElementById("password")
// let btnSubmit = document.getElementById("submitbtn")

// btnSubmit.addEventListener("click", function(event){
//   event.preventDefault()
//     let number = /[0-9]/;
//     let lowerStr = /[a-z]/;
//     let upperStr = /[A-Z]/;
//     let check = true

// let passText = passWord.value
// let usernameText = userName.value
// let emailText = eMail.value

// if (passText.length < 8) check = false
// console.log(passText);
// if (!number.test(passText)) check = false
// console.log(number.test(passText));
// if (!lowerStr.test(passText)) check = false
// console.log(check);
// if (!upperStr.test(passText)) check = false
// console.log(check);

// if (check) {
//     let users =JSON.parse(localStorage.getItem("users")) || []
    
//     if (users.length == 0){
//         let user = {
//             username: usernameText,
//             email: emailText,
//             password: passText,
//         }
//         users.push(user)
//         localStorage.setItem("users", JSON.stringify(users))
//     }
// }
// })