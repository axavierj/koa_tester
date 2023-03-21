class RegistrationForm extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <form>
    <div class="row mb-3">
      <div class="col-md-6">
        <label for="firstName" class="form-label">First name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="lastName" class="form-label">Last name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          required
        />
      </div>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
        required
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        required
      />
    </div>
    <div class="mb-3">
      <label for="password2" class="form-label">Verify Password</label>
      <input
        type="password"
        class="form-control"
        id="password2"
        required
      />
    </div>
    <div class="mb-3 form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="termsAndConditions"
        required
      />
      <label class="form-check-label" for="termsAndConditions"
        >I agree to the
        <a href="/terms">terms and conditions</a></label
      >
    </div>
    <button type="submit" class="btn btn-primary">Register</button>
  </form>
  `;
  }

  connectedCallback() {
    const form = this.querySelector("form");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formObj = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        password: form.password.value,
        tandc: form.termsAndConditions.checked,
      };
      if (!formObj.tandc) {
        return alert("You must agree to the terms and conditions");
      }
      if (formObj.password !== form.password2.value) {
        return alert("Passwords do not match");
      }

      const data = await this.register(formObj);
      if (data.message === "User created successfully") {
        e.target.reset();
      }
      alert(data.message);
    });
  }

  async register(user) {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  }

  disconnectedCallback() {}
}

customElements.define("registration-form", RegistrationForm);
