/* =========================================================
   LUNELLE CAFÉ - EVENT REGISTRATION & LOCALSTORAGE SCRIPT
   ========================================================= */

// Consistent localStorage key for event registrations
const REGISTRATIONS_STORAGE_KEY = "lunelleRegistrations";

// Get saved registrations from localStorage
function getRegistrations() {
  try {
    const saved = localStorage.getItem(REGISTRATIONS_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Error reading registrations from localStorage:", error);
    return [];
  }
}

// Save registrations array to localStorage
function saveRegistrations(list) {
  localStorage.setItem(REGISTRATIONS_STORAGE_KEY, JSON.stringify(list));
  renderRegistrationHistory();
}

// Generate unique Registration ID (e.g., LNL-2026-4821)
function generateRegistrationId() {
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  return `LNL-2026-${randomDigits}`;
}

// Validate email format with RegEx
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Render saved registration history cards on events.html
function renderRegistrationHistory() {
  const listContainer = document.getElementById("registrationHistoryList");
  const clearBtn = document.getElementById("clearRegistrationsBtn");
  if (!listContainer) return;

  const registrations = getRegistrations();

  if (registrations.length === 0) {
    listContainer.innerHTML = `
      <div class="text-center py-4 text-muted">
        <div class="fs-2 mb-2">🎟️</div>
        <p class="small mb-0">No event registrations saved yet. Fill out the form to reserve your seat!</p>
      </div>
    `;
    if (clearBtn) clearBtn.style.display = "none";
    return;
  }

  if (clearBtn) clearBtn.style.display = "inline-block";

  listContainer.innerHTML = registrations
    .map(
      (reg) => `
      <div class="p-3 rounded-4 bg-baby-pink border" style="border-color: var(--soft-pink) !important;">
        <div class="d-flex justify-content-between align-items-center mb-1">
          <span class="badge rounded-pill bg-white text-dark-brown">${reg.id}</span>
          <small class="text-muted">${reg.submittedAt}</small>
        </div>
        <h4 class="h6 mb-1 text-dark-brown">${reg.eventName}</h4>
        <div class="small text-coffee">
          <div><strong>Name:</strong> ${reg.fullName} (${reg.participants} seat${reg.participants > 1 ? "s" : ""})</div>
          <div><strong>Contact:</strong> ${reg.email} • ${reg.phone}</div>
          ${reg.message ? `<div class="mt-1 fst-italic">“${reg.message}”</div>` : ""}
        </div>
      </div>
    `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", function () {
  renderRegistrationHistory();

  // "Register Now" buttons on each event card pre-select the event & scroll to form
  const selectEventButtons = document.querySelectorAll(".select-event-btn");
  const eventSelectDropdown = document.getElementById("regEventSelect");
  const registrationSection = document.getElementById("registrationSection");

  selectEventButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const chosenEvent = this.getAttribute("data-event");
      if (eventSelectDropdown) {
        eventSelectDropdown.value = chosenEvent;
      }
      if (registrationSection) {
        registrationSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Handle Event Registration Form Submission
  const form = document.getElementById("eventRegistrationForm");
  const alertBox = document.getElementById("formAlertBox");
  const confirmationCard = document.getElementById("registrationConfirmationCard");
  const summaryBox = document.getElementById("latestRegistrationSummary");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const fullName = document.getElementById("regFullName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const phone = document.getElementById("regPhone").value.trim();
      const participants = parseInt(document.getElementById("regParticipants").value, 10);
      const eventName = document.getElementById("regEventSelect").value;
      const message = document.getElementById("regMessage").value.trim();

      if (!fullName || !email || !phone || !eventName || isNaN(participants) || participants < 1) {
        alertBox.className = "alert alert-danger rounded-4";
        alertBox.textContent = "Please complete all required fields (*) before submitting your registration.";
        alertBox.classList.remove("d-none");
        return;
      }

      if (!isValidEmail(email)) {
        alertBox.className = "alert alert-danger rounded-4";
        alertBox.textContent = "Please enter a valid email address (for example: name@example.com).";
        alertBox.classList.remove("d-none");
        return;
      }

      alertBox.classList.add("d-none");

      const newRegistration = {
        id: generateRegistrationId(),
        fullName,
        email,
        phone,
        eventName,
        participants,
        message,
        submittedAt: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        })
      };

      const currentList = getRegistrations();
      currentList.unshift(newRegistration);
      saveRegistrations(currentList);

      if (confirmationCard && summaryBox) {
        summaryBox.innerHTML = `
          <div><strong>Registration ID:</strong> ${newRegistration.id}</div>
          <div><strong>Event:</strong> ${newRegistration.eventName}</div>
          <div><strong>Participant:</strong> ${newRegistration.fullName} (${newRegistration.participants} seat${newRegistration.participants > 1 ? "s" : ""})</div>
          <div><strong>Email &amp; Phone:</strong> ${newRegistration.email} | ${newRegistration.phone}</div>
        `;
        confirmationCard.classList.remove("d-none");
      }

      form.reset();
      document.getElementById("regParticipants").value = 1;
    });
  }

  // Clear saved registration history button
  const clearRegistrationsBtn = document.getElementById("clearRegistrationsBtn");
  if (clearRegistrationsBtn) {
    clearRegistrationsBtn.addEventListener("click", function () {
      saveRegistrations([]);
      if (confirmationCard) {
        confirmationCard.classList.add("d-none");
      }
    });
  }
});