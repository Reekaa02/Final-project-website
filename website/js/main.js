function toggleItem(btn) {
  const details = btn.nextElementSibling;
  details.style.display =
    details.style.display === "block" ? "none" : "block";
}

// js/main.js  (or put inside <script> at bottom of index.html)

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger");

    // If click is inside hamburger or inside menu → do nothing
    if (hamburger.contains(event.target) || menu.contains(event.target)) {
        return;
    }

    // Otherwise close the menu
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
});

function toggleItem(button) {
  const item = button.closest('.item');
  if (!item) {
    console.log("No .item found for this button");
    return;
  }
  
  const details = item.querySelector('.details');
  if (!details) {
    console.log("No .details found inside item");
    return;
  }
  
  // Toggle visibility
  if (details.style.display === 'none' || details.style.display === '') {
    details.style.display = 'block';
    button.textContent = 'Hide details';
  } else {
    details.style.display = 'none';
    button.textContent = 'View details';
  }
  
  console.log("Toggle clicked!");  // <-- this will appear in console when it works
}

