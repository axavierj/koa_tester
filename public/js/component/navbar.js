class NavBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand me-auto" href="/">game app</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarColor02"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/events">Events </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Community</a
                >
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/leagues">Leagues</a>
                  <a class="dropdown-item" href="/competitors">Competitors</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/contact">Contact</a>
                </div>
              </li>
              <li class="nav-item mx-2">
                <a class="btn btn-primary" href="http://localhost:1234/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="btn btn-secondary" href="/registration">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
