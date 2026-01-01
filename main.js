
let menulist = document.getElementById("menulist");
        let open = document.getElementById("open");
        let close = document.getElementById("close");
        let nav = document.querySelector(".nav");

        function openMenu() {
            menulist.classList.add("active");
            open.style.display = "none";
            close.style.display = "block";
            nav.classList.add("menu_open");
        }

        function closeMenu() {
            menulist.classList.remove("active");
            open.style.display = "block";
            close.style.display = "none";
            nav.classList.remove("menu_open");
        }