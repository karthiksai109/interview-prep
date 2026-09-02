// shared front-end behaviours: mobile nav, flashcards, persistent checklists

document.addEventListener("DOMContentLoaded", () => {
  // mobile sidebar
  const toggle = document.querySelector(".nav-toggle");
  const sidebar = document.querySelector(".sidebar");
  if (toggle && sidebar) {
    toggle.addEventListener("click", () => sidebar.classList.toggle("open"));
    sidebar.addEventListener("click", (e) => {
      if (e.target.tagName === "A") sidebar.classList.remove("open");
    });
  }

  // mark active nav link
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".sidebar nav a").forEach((a) => {
    if (a.getAttribute("href") === here) a.classList.add("active");
  });

  // flashcards flip on click
  document.querySelectorAll(".flash").forEach((card) => {
    card.addEventListener("click", () => card.classList.toggle("flipped"));
  });

  // persistent checklists, keyed per page + item
  document.querySelectorAll(".checklist").forEach((list, li) => {
    const keyBase = "prep:" + here + ":" + li;
    list.querySelectorAll("li").forEach((item, i) => {
      const box = item.querySelector("input[type=checkbox]");
      if (!box) return;
      const key = keyBase + ":" + i;
      box.checked = localStorage.getItem(key) === "1";
      if (box.checked) item.classList.add("done");
      box.addEventListener("change", () => {
        item.classList.toggle("done", box.checked);
        localStorage.setItem(key, box.checked ? "1" : "0");
      });
    });
  });

  // expand-all / collapse-all buttons for accordion pages
  document.querySelectorAll("[data-expand-all]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const open = btn.dataset.expandAll === "true";
      document.querySelectorAll("details.qa").forEach((d) => (d.open = open));
    });
  });
});
