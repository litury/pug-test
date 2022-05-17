/* Панель поиска */
const btnSearch = document.querySelector(".header__search");
const searchForm = document.querySelector(".header__noactive");
const searchInput = document.querySelector(".header__input");

btnSearch.addEventListener("click", () => {
    searchForm.classList.toggle("header--active");
    searchInput.classList.toggle("header--active");
    searchInput.focus();
});