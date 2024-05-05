const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  if (navLinks.classList.toggle("nav-active"))
    navLinks.classList.add("animate__animated", "animate__fadeInDown");
  else navLinks.classList.remove("animate__animated", "animate__fadeInDown");
});

// Get the reference to the element
let myComponent = document.querySelector(".cards-container");

let observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        // If the element is visible on the screen, add the class
        myComponent.classList.add("animate__backInLeft");
        myComponent.classList.remove("hidden");
      }
    });
  },
  {
    // Additional options for the IntersectionObserver
    threshold: window.innerWidth < 768 ? 0 : 0.5, // Change threshold based on the screen width
    once: true, // Trigger when at least 50% of the element is visible (or 0% on mobile)
  }
);

observer.observe(myComponent);

function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var message = document.getElementById("message").value.trim();
  var errorMsg = "";

  if (name === "") {
    errorMsg += "Name is required.<br>";
  }
  if (email === "") {
    errorMsg += "Email is required.<br>";
  } else if (!validateEmail(email)) {
    errorMsg += "Invalid email address.<br>";
  }
  if (phone === "") {
    errorMsg += "Phone number is required.<br>";
  } else if (!validatePhone(phone)) {
    errorMsg += "Invalid phone number.<br>";
  }
  if (message === "") {
    errorMsg += "Message is required.<br>";
  }

  if (errorMsg !== "") {
    document.getElementById("error-msg").innerHTML = errorMsg;
    return false;
  }

  return true;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePhone(phone) {
  var re = /^\d{10}$/;
  return re.test(phone);
}

function calculate() {
  var minutes = parseFloat(document.getElementById("minutes").value);
  var caloriesPerMinute = parseFloat(
    document.getElementById("calories-per-minute").value
  );
  var totalCalories = minutes * caloriesPerMinute;
  document.getElementById("result").innerText =
    "Total Calories Burned: " + totalCalories.toFixed(2);
}
