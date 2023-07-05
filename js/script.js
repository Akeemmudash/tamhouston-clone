const optMenus = document.querySelectorAll(".select-menu");
function addActiveClass() {
  optMenus.forEach((optMenu) => {
    optMenu.classList.add("active");
  });
}
function removeActiveClass() {
  optMenus.forEach((optMenu) => {
    optMenu.classList.remove("active");
  });
}
function toggleClass() {
  optMenus.forEach((optMenu) => {
    optMenu.classList.toggle("active");
  });
}

optMenus.forEach((optMenu) => {
  const optionEls = optMenu.querySelectorAll(".option");
  const sBtn_text = optMenu.querySelector(".sBtn-text");
  const optionsList = optMenu.querySelector("#optionslist");

  optionEls.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.textContent = selectedOption;
      removeActiveClass();
    });
  });

  // Remove active class when anywhere else on the window is clicked
  window.addEventListener("click", (event) => {
    if (!optMenu.contains(event.target)) {
      optMenu.classList.remove("active");
    }
  });
});

function addSubList() {
  const dropLists = document.querySelectorAll(".drop-list");
  dropLists.forEach((dropList) => {
    dropList.classList.toggle("open");
  });
  console.log("working");
}
function timeLeave() {
  const dropLists = document.querySelectorAll(".drop-list");
  const list = document.querySelectorAll(".list");

  dropLists.forEach((dropList) => {
    if (dropList.classList.contains("open")) {
      setTimeout(() => {
        dropList.classList.remove("open");
      }, 2000);
    }
  });
}
function hideCatMenu() {
  optMenus.forEach((selectMenu) => {
    selectMenu.style.display = "none";
  });
}
function showCatMenu() {
  optMenus.forEach((selectMenu) => {
    selectMenu.style.display = "flex";
  });
}

function addshadow() {
  const searchForm = document.querySelector("#search2");
  searchForm.classList.add("focused");
}

function removeShadow() {
  const searchForm = document.querySelector("#search2");
  searchForm.classList.remove("focused");
}
function activeSearchform() {
  // const mobileScr = window.matchMedia("(max-width:575px)");
  const searchBtnSM = document.querySelector("#search2 .search-btn");
  const searchBlock = document.querySelectorAll(".search-block");
  const searchInput = document.querySelectorAll(".search-input");
  const clearInput = document.querySelectorAll(".clear-button");
  const searchContent = document.querySelectorAll(".search-content");
  const searchSpin = document.querySelectorAll(".ispinner");
  const modalBack = document.querySelector(".modal-bg");
  for (let i = 0; i < searchContent.length; i++) {
    searchBlock[i].style.zIndex = "3";
    searchSpin[i].classList.add("active-search");
    searchContent[i].style.display = "block";
    searchInput[i].style.paddingLeft = "var(--search-field-padding)";
    clearInput[i].style.display = "block";
  }
  modalBack.style.display = "block";
  searchBtnSM.classList.add("mobile-search");
}
function unActiveSearchForm() {
  const searchBtnSM = document.querySelector("#search2 .search-btn");
  const modalBack = document.querySelector(".modal-bg");
  const searchBlock = document.querySelectorAll(".search-block");
  const searchContent = document.querySelectorAll(".search-content");
  const searchInput = document.querySelectorAll(".search-input");
  const clearInput = document.querySelectorAll(".clear-button");
  const searchSpin = document.querySelectorAll(".ispinner");
  for (let i = 0; i < searchContent.length; i++) {
    searchBlock[i].style.zIndex = "2";
    searchSpin[i].classList.remove("active-search");
    searchContent[i].style.display = "none";
    searchInput[i].style.paddingLeft = "var(--search-padding-sm)";
    clearInput[i].style.display = "none";
  }
  modalBack.style.display = "none";
  searchBtnSM.classList.remove("mobile-search");
}
function removeSearchContent() {
  showCatMenu();
  unActiveSearchForm();
}

function unActiveSearch() {
  removeShadow();
  removeSearchContent();
}
function addSearchContent() {
  const searchInput = document.querySelectorAll(".search-input");
  searchInput.forEach((inputField) => {
    inputField.addEventListener("input", (event) => {
      const inputValue = event.target.value;
      if (inputValue.length > 0) {
        hideCatMenu();
        activeSearchform();
      } else {
        unActiveSearch();
      }
    });
  });
}

function activeSearch() {
  addshadow();
  addSearchContent();
}

function clearSearch(event) {
  event.preventDefault();
  const searchInput = document.querySelectorAll(".search-input");
  searchInput.forEach((inputField) => {
    inputField.value = "";
    inputField.focus();
  });

  removeSearchContent();
}

// Remove active class after 5 seconds
// function resetTimeout() {
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(removeActiveClass, 2000);
// }

// hamburger button

function openNav() {
  const hamBtn = document.querySelector("#nav-icon1");
  hamBtn.classList.toggle("open");
}

// category small devices

const categorySm = document.querySelector(".category-sm .offcanvas"); //global variable

function showCat(event) {
  event.preventDefault();
  categorySm.classList.add("show");
}

// window.addEventListener("DOMContentLoaded", () => {
//   const pagemodal = document.querySelector(".pagemodal");
//   pagemodal.style.display = "block";
//   setTimeout(() => (pagemodal.style.display = "none"), 800);
// });
//Promises
function displaySpinner() {
  const getSpin = document.querySelector(".spinner");
  getSpin.style.display = "inline-block";
}
function hideSpinner() {
  const getSpin = document.querySelector(".spinner");
  getSpin.style.display = "none";
}
function signUp(event) {
  event.preventDefault();
  const getName = document.querySelector("#name").value;
  const getEmail = document.querySelector("#email").value;
  const getPassword = document.querySelector("#password").value;
  const getConfirmPassword = document.querySelector("#name").value;

  displaySpinner();

  if (
    getName === "" ||
    getEmail === "" ||
    getPassword === "" ||
    getConfirmPassword === ""
  ) {
    Swal.fire({
      icon: "warning",
      text: "All Inputs Fields are Required",
      confirmButtonColor: "var(--dark-green)",
    });
    hideSpinner();
  } else {
    if (getConfirmPassword !== getPassword) {
      Swal.fire({
        icon: "warning",
        text: "Passwords do not match",
        confirmButtonColor: "var(--dark-green)",
      });
    }
  }
}
//   }else if ()

// }

//   }

//   const nameRegex = /^[A-Za-z\s]+$/;
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// function testEmail(email) {
//   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//   return
//   if(!emailRegex.test(email)){

//   }
//
