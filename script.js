function handleNavBar() {
  const nav = document.getElementById("nav-bar");

  if (!nav) {
    return;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      nav.classList.add("white");
    } else {
      nav.classList.remove("white");
    }
  });

  const mobileToggle = document.querySelectorAll("#mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileToggle.forEach((el) => {
    el.addEventListener("click", () => {
      toggleMenu(mobileMenu);
    });
  });
}

function toggleMenu(menu) {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    document.querySelector(".overlay").remove();
  } else {
    menu.classList.add("active");

    const el = document.createElement("div");
    el.classList.add("overlay");
    el.addEventListener("click", () => {
      el.remove();
      menu.classList.remove("active");
    });

    document.body.appendChild(el);
  }
}

handleNavBar();
