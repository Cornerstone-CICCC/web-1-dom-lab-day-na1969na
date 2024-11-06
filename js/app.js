document.addEventListener("DOMContentLoaded", function () {
  // input required
  document.getElementById("firstname").required = true;
  document.getElementById("lastname").required = true;
  document.getElementById("email").required = true;
  document.getElementById("hire_date").required = true;
  document.querySelector('input[type="file"]').required = true;

  // email address pattern
  document.getElementById("email").addEventListener("input", function () {
    const pattern = /^[a-zA-Z0-9._%+-]+@canada\.ca$/;
    if (!pattern.test(this.value)) {
      this.setCustomValidity(
        "Please match the requested format. Only @canada.ca employees can register."
      );
    } else {
      this.setCustomValidity("");
    }
  });

  const form = document.querySelector("form");

  // form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const hire_date = formData.get("hire_date");
    const photo = formData.get("photo");

    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <td><img src="${URL.createObjectURL(
      photo
    )}" alt="${firstname}" width="100"/></td>
      <td>${firstname}</td>
      <td>${lastname}</td>
      <td>${email}</td>
      <td>${hire_date}</td>
      <td><button class="btn btn-danger">Delete</button></td>
    `;

    const tableBody = document.querySelector("tbody");

    tableBody.appendChild(tableRow);

    document.getElementById("myForm").reset();
  });

  // delete row
  document.querySelector("tbody").addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const confirmed = confirm("Are you sure you want to delete this row?");
      if (confirmed) {
        event.target.closest("tr").remove();
      }
    }
  });
});
