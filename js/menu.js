const sidebar = document.querySelector(".barra-lateral");
const sidebarToggler = document.querySelector(".sidebar-toggler");

sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});