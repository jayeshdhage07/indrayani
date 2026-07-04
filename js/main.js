/**
 * Hotel Indrayani Pure Veg - Client Side Interactivity
 * Author: Antigravity Code Assistant
 * Year: 2026
 */

document.addEventListener("DOMContentLoaded", function () {
  
  // ==========================================
  // 1. Sticky Navbar Transition
  // ==========================================
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    });
  }

  // ==========================================
  // 2. Menu Page Search and Tab Filtering
  // ==========================================
  const searchInput = document.getElementById("dish-search-input");
  const tabButtons = document.querySelectorAll("#menu-tabs-wrapper .menu-tab-btn");
  const menuItems = document.querySelectorAll(".menu-item-col");
  const noResults = document.getElementById("menu-no-results");
  const clearBtn = document.getElementById("clear-search-btn");
  const resetLink = document.getElementById("reset-search-link");
  
  let currentCategory = "all";
  let searchQuery = "";

  function filterMenu() {
    let visibleCount = 0;

    menuItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");
      const dishTitle = item.querySelector(".dish-title").textContent.toLowerCase();
      const dishDesc = item.querySelector(".dish-desc").textContent.toLowerCase();
      
      const categoryMatch = currentCategory === "all" || itemCategory === currentCategory;
      const searchMatch = dishTitle.includes(searchQuery) || dishDesc.includes(searchQuery);

      if (categoryMatch && searchMatch) {
        item.classList.remove("d-none");
        visibleCount++;
      } else {
        item.classList.add("d-none");
      }
    });

    // Toggle No Results Container
    if (noResults) {
      if (visibleCount === 0) {
        noResults.classList.remove("d-none");
      } else {
        noResults.classList.add("d-none");
      }
    }
  }

  // Search Input Event
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      searchQuery = e.target.value.toLowerCase().trim();
      filterMenu();
    });
  }

  // Tab Buttons Click Events
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      tabButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      currentCategory = this.getAttribute("data-category");
      filterMenu();
    });
  });

  // Clear Search Button
  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", function () {
      searchInput.value = "";
      searchQuery = "";
      filterMenu();
    });
  }

  // Reset Link Click inside No Results Box
  if (resetLink && searchInput) {
    resetLink.addEventListener("click", function () {
      searchInput.value = "";
      searchQuery = "";
      currentCategory = "all";
      
      tabButtons.forEach((b) => {
        if (b.getAttribute("data-category") === "all") {
          b.classList.add("active");
        } else {
          b.classList.remove("active");
        }
      });
      filterMenu();
    });
  }

  // ==========================================
  // 3. Gallery Filtering and Lightbox
  // ==========================================
  const galleryFilters = document.querySelectorAll("#gallery-tabs-wrapper .menu-tab-btn");
  const galleryItems = document.querySelectorAll(".gallery-col");
  const lightboxModalImg = document.getElementById("lightbox-modal-image");
  const modalTriggerItems = document.querySelectorAll(".gallery-item");

  // Gallery Filtering
  galleryFilters.forEach((filterBtn) => {
    filterBtn.addEventListener("click", function () {
      galleryFilters.forEach((fb) => fb.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        if (filterValue === "all" || itemCategory === filterValue) {
          item.classList.remove("d-none");
        } else {
          item.classList.add("d-none");
        }
      });
    });
  });

  // Lightbox Loader
  modalTriggerItems.forEach((item) => {
    item.addEventListener("click", function () {
      const imgSrc = this.getAttribute("data-src");
      if (lightboxModalImg && imgSrc) {
        lightboxModalImg.setAttribute("src", imgSrc);
      }
    });
  });

  // ==========================================
  // 4. Reservation System Logic
  // ==========================================
  const bookingDateInput = document.getElementById("booking-date");
  const bookingForm = document.getElementById("table-booking-form");
  const receiptDetails = document.getElementById("booking-receipt-details");
  
  // Restrict reservation date selection to today and future
  if (bookingDateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Month is 0-indexed
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = yyyy + '-' + mm + '-' + dd;
    bookingDateInput.setAttribute("min", formattedToday);
    // Set default value to today
    bookingDateInput.value = formattedToday;
  }

  // Submit Reservation Form
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("booking-name").value;
      const phone = document.getElementById("booking-phone").value;
      const date = document.getElementById("booking-date").value;
      const time = document.getElementById("booking-time").value;
      const guests = document.getElementById("booking-guests").value;
      const seating = document.getElementById("booking-seating").value;
      const requests = document.getElementById("booking-requests").value || "None";

      // Formulate Date presentation
      const dateObj = new Date(date);
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDateText = dateObj.toLocaleDateString("en-US", options);

      // Generate receipt body
      if (receiptDetails) {
        receiptDetails.innerHTML = `
          <strong>Reservation Details:</strong>
          <ul class="mb-0 mt-2 list-unstyled">
            <li><i class="fa-solid fa-user me-2 text-success"></i><strong>Guest Name:</strong> ${name}</li>
            <li><i class="fa-solid fa-phone me-2 text-success"></i><strong>Mobile:</strong> ${phone}</li>
            <li><i class="fa-solid fa-calendar-days me-2 text-success"></i><strong>Date:</strong> ${formattedDateText}</li>
            <li><i class="fa-solid fa-clock me-2 text-success"></i><strong>Time Slot:</strong> ${time}</li>
            <li><i class="fa-solid fa-users me-2 text-success"></i><strong>Guests:</strong> ${guests}</li>
            <li><i class="fa-solid fa-chair me-2 text-success"></i><strong>Area Preferred:</strong> ${seating}</li>
            <li><i class="fa-solid fa-note-sticky me-2 text-success"></i><strong>Special Request:</strong> "${requests}"</li>
          </ul>
          <hr class="my-2 text-success">
          <p class="mb-0 text-success fw-bold text-center"><i class="fa-solid fa-square-parking me-1"></i> Parking space and table reserved!</p>
        `;
      }

      // Display Success Modal via Bootstrap Modal API
      const bookingModal = new bootstrap.Modal(document.getElementById('bookingSuccessModal'));
      bookingModal.show();

      // Reset form fields
      bookingForm.reset();
      
      // Reset date to today after form reset
      if (bookingDateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        bookingDateInput.value = yyyy + '-' + mm + '-' + dd;
      }
    });
  }

  // ==========================================
  // 5. Contact Message Submission
  // ==========================================
  const contactForm = document.getElementById("contact-msg-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Display Message Success Modal
      const msgModal = new bootstrap.Modal(document.getElementById('msgSuccessModal'));
      msgModal.show();

      // Reset the form
      contactForm.reset();
    });
  }

});
