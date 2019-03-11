var searchOpen = document.querySelector(".booking-btn"),
    searchForm = document.querySelector(".booking-info"),
    dateIn = searchForm.querySelector("[name=date-arrival]"),
    dateOut = searchForm.querySelector("[name=date-departure]"),
    numberAdults = searchForm.querySelector("[name=adults]"),
    numberKids = searchForm.querySelector("[name=kids]"),
    isStorageSupport = !0,
    storageAdults = "",
    storageKids = "";
try {
    storageAdults = localStorage.getItem("adultsData")
} catch (e) {
    isStorageSupport = !1
}

searchForm && (searchForm.classList.add("booking-info-invisible"), 
  dateIn.hasAttribute("required") && dateIn.removeAttribute("required"), 
  dateOut.hasAttribute("required") && dateOut.removeAttribute("required"), 
  numberAdults.hasAttribute("required") && numberAdults.removeAttribute("required"), 
  numberKids.hasAttribute("required") && numberKids.removeAttribute("required"), 
  numberKids.hasAttribute("min") && numberKids.removeAttribute("min"), 
  numberAdults.hasAttribute("min") && numberAdults.removeAttribute("min")), 

searchOpen && searchOpen.addEventListener("click", function(e) {
    e.preventDefault(),
    searchForm.classList.toggle("booking-info-visible"), 
    searchForm.classList.toggle("booking-info-invisible"), 
    searchForm.classList.remove("booking-info-error"), 
    isStorageSupport && (storageAdults = localStorage.getItem("adultsData"), 
    storageKids = localStorage.getItem("kidsData"), 
    storageAdults && (numberAdults.value = storageAdults), 
    storageKids && (numberKids.value = storageKids)), 
    searchForm.classList.contains("booking-info-visible") && dateIn.focus()
}), window.addEventListener("keydown", function(e) {
    27 === e.keyCode && searchForm.classList.contains("booking-info-visible") && (e.preventDefault(),
                        searchForm.classList.toggle("booking-info-visible"), 
                        searchForm.classList.toggle("booking-info-invisible"), 
                        searchForm.classList.remove("booking-info-error"))
}), searchForm.addEventListener("submit", function(e) {
    !dateIn.value || !dateOut.value || !numberAdults.value || !numberKids.value || numberAdults.value <= 0 || numberKids.value < 0 ? (e.preventDefault(), 
      searchForm.classList.remove("booking-info-error"), 
      searchForm.offsetWidth = searchForm.offsetWidth, 
      searchForm.classList.add("booking-info-error")) : isStorageSupport && (localStorage.setItem("adultsData", numberAdults.value), 
      localStorage.setItem("kidsData", numberKids.value))
});

var addAdults = document.querySelector(".plus-grownup"),
    minusAdults = document.querySelector(".minus-grownup"),
    addKids = document.querySelector(".plus-kids"),
    minusKids = document.querySelector(".minus-kids");
addAdults && addAdults.addEventListener("click", function(e) {
    e.preventDefault(), numberAdults.value = Number(numberAdults.value) + 1
}), minusAdults && minusAdults.addEventListener("click", function(e) {
    e.preventDefault(), 1 < Number(numberAdults.value) && (numberAdults.value = Number(numberAdults.value) - 1)
}), addKids && addKids.addEventListener("click", function(e) {
    e.preventDefault(), numberKids.value = Number(numberKids.value) + 1
}), minusKids && minusKids.addEventListener("click", function(e) {
    e.preventDefault(), 0 < Number(numberKids.value) && (numberKids.value = Number(numberKids.value) - 1)
});
