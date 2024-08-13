// grabs date object year datetime value and sets the attribute to year ID in html.
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;