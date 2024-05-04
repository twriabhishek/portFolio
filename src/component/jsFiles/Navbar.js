import React, { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <>
      <div id="header">
        <div className="container">
          <div id="navbar-section">
            <nav class="navbar navbar-expand-lg navbar-dark">
              <div class="container-fluid">
                <a class="navbar-brand fs-1 header-portfolio" href="#">
                  PORTFOLIO
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav ms-auto">
                    <a
                      class="nav-link active me-2"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </a>
                    <a
                      class="nav-link active me-2"
                      aria-current="page"
                      href="#about"
                    >
                      About
                    </a>
                    <a
                      class="nav-link active me-2"
                      aria-current="page"
                      href="#services"
                    >
                      Services
                    </a>
                    <a
                      class="nav-link active me-2"
                      aria-current="page"
                      href="#Work"
                    >
                      Portfolio
                    </a>
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="#Contact-me"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="container">
          <div className="row header-text d-flex flex-column justify-content-center text-center">
            <p className="">Software developer</p>
            <h1 className="">Hi Buddy I am Abhishek</h1>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="row mb-4">
              <h1
                className="main-common-heading"
                style={{ marginBottom: "3rem" }}
              >
                About Me
              </h1>
              <p className="common-paragraph" style={{ marginBottom: "5rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                id, saepe quibusdam ducimus eligendi, vitae tempora quidem
                repudiandae quia, debitis pariatur architecto quas molestias
                doloremque sit adipisci iste? Necessitatibus fugit dolore quis
                voluptatibus error magnam atque perferendis quidem labore
                ducimus deserunt sed nam eum laudantium illo, pariatur tempore
                minus porro?
              </p>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4 mb-5">
                <div className="mb-4">
                  <h3 className="sub-common-heading" style={{color:"#ff004f"}}>Skills</h3>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">UI/UX</p>
                  <p className="mt-0 mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">UI/UX</p>
                  <p className="mt-0 mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">UI/UX</p>
                  <p className="mt-0 mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-5">
                <div className="mb-4">
                  <h3 className="sub-common-heading" style={{color:"#ff004f"}}>Experience</h3>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">2024-2026</p>
                  <p className="mt-0 mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">2024-2026</p>
                  <p className="mt-0 mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">2024-2026</p>
                  <p className="mt-0 mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-5">
                <div>
                  <h3 className="sub-common-heading" style={{color:"#ff004f"}}>Education</h3>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">2018</p>
                  <p className="mt-0 mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">2018</p>
                  <p className="mt-0 mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">2017</p>
                  <p className="mt-0 mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services">
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="row mb-4">
              <h1 className="main-common-heading">My Services</h1>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-4 mb-4">
                  <div className="card-section">
                    <i class="fa-brands fa-android mb-3"></i>
                    <h1 className="sub-common-heading mb-3">
                      Lorem ipsum dolor
                    </h1>
                    <p className="common-paragraph mb-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur, excepturi earum aspernatur amet soluta vitae
                      fugiat. Rerum saepe itaque accusantium est earum repellat,
                      mollitia sunt id ab incidunt quia reprehenderit officia
                      rem quisquam atque sint nam libero repudiandae temporibus
                      ut commodi tempore quas. Officiis quos ipsum vitae fugiat
                      debitis impedit esse odit ex dolor beatae, consequuntur,
                      voluptas dolorum incidunt. Quibusdam deserunt cupiditate,
                      perspiciatis odit labore rem. Officia, velit! Rem quasi
                      facere possimus, laudantium voluptas eveniet quis ipsum
                      repudiandae odit inventore.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                  <div className="card-section">
                    <i class="fa-brands fa-android mb-3"></i>
                    <h1 className="sub-common-heading mb-3">
                      Lorem ipsum dolor
                    </h1>
                    <p className="common-paragraph mb-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur, excepturi earum aspernatur amet soluta vitae
                      fugiat. Rerum saepe itaque accusantium est earum repellat,
                      mollitia sunt id ab incidunt quia reprehenderit officia
                      rem quisquam atque sint nam libero repudiandae temporibus
                      ut commodi tempore quas. Officiis quos ipsum vitae fugiat
                      debitis impedit esse odit ex dolor beatae, consequuntur,
                      voluptas dolorum incidunt. Quibusdam deserunt cupiditate,
                      perspiciatis odit labore rem. Officia, velit! Rem quasi
                      facere possimus, laudantium voluptas eveniet quis ipsum
                      repudiandae odit inventore.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                  <div className="card-section">
                    <i class="fa-brands fa-android mb-3"></i>
                    <h1 className="sub-common-heading mb-3">
                      Lorem ipsum dolor
                    </h1>
                    <p className="common-paragraph mb-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur, excepturi earum aspernatur amet soluta vitae
                      fugiat. Rerum saepe itaque accusantium est earum repellat,
                      mollitia sunt id ab incidunt quia reprehenderit officia
                      rem quisquam atque sint nam libero repudiandae temporibus
                      ut commodi tempore quas. Officiis quos ipsum vitae fugiat
                      debitis impedit esse odit ex dolor beatae, consequuntur,
                      voluptas dolorum incidunt. Quibusdam deserunt cupiditate,
                      perspiciatis odit labore rem. Officia, velit! Rem quasi
                      facere possimus, laudantium voluptas eveniet quis ipsum
                      repudiandae odit inventore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Work">
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="row mb-4">
              <h1 className="main-common-heading">My Work</h1>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-4 mb-4">
                  <div class="card">
                    <img
                      src="https://images.pexels.com/photos/248526/pexels-photo-248526.jpeg?auto=compress&cs=tinysrgb&w=600"
                      class="card-img-top"
                      alt="alternate"
                    />
                    <div class="card-body">
                      <h5 class="card-title sub-common-heading">Card title</h5>
                      <p class="card-text common-paragraph">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="button-div">
                        <button className="button contact-button submit-button">
                          Go
                          <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                  <div class="card">
                    <img
                      src="https://images.pexels.com/photos/248526/pexels-photo-248526.jpeg?auto=compress&cs=tinysrgb&w=600"
                      class="card-img-top"
                      alt="alternate"
                    />
                    <div class="card-body">
                      <h5 class="card-title sub-common-heading">Card title</h5>
                      <p class="card-text common-paragraph">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="button-div">
                        <button className="button contact-button submit-button">
                          Go
                          <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                  <div class="card">
                    <img
                      src="https://images.pexels.com/photos/248526/pexels-photo-248526.jpeg?auto=compress&cs=tinysrgb&w=600"
                      class="card-img-top"
                      alt="alternate"
                    />
                    <div class="card-body">
                      <h5 class="card-title sub-common-heading">Card title</h5>
                      <p class="card-text common-paragraph">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="button-div">
                        <button className="button contact-button submit-button">
                          Go
                          <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Contact-me">
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="container">
            <div className="row">

              <div className="col-12 col-lg-4">
                <h1 className="main-common-heading">Contact Me</h1>
                <p className="common-paragraph mb-5">
                  <i class="fa-solid fa-paper-plane me-4"></i>abc@gmail.com
                </p>
                <p className="common-paragraph mb-5">
                  <i class="fa-solid fa-phone  me-4"></i>98765456789
                </p>
                <div className="contact-icons">
                  <i class="fa-brands fa-instagram me-4 contact"></i>
                  <i class="fa-brands fa-facebook me-4 contact"></i>
                  <i class="fa-brands fa-twitter me-4 contact"></i>
                  <i class="fa-brands fa-github me-4 contact"></i>
                  <i class="fa-brands fa-linkedin contact"></i>
                </div>
                <div className="button-div">
                  <button className="button contact-button">Download CV</button>
                </div>
              </div>

              <div className="col-12 col-lg-8">
                <form className="contact-form">
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      aria-describedby="name"
                      placeholder="Enter Name"
                      name="name"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      aria-describedby="email"
                      placeholder="Enter you email"
                      name="email"
                    />
                  </div>
                  <div class="mb-3">
                    <textarea
                      class="form-control"
                      id="message"
                      rows="6"
                      placeholder="Enter your message"
                      name="message"
                    ></textarea>
                  </div>
                  <div className="button-div">
                    <button className="button contact-button submit-button">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer" className="pt-5 pb-5">
        <footer class="text-center">
          <div class="container p-2">
            <section class="mb-2">
              <a
                data-mdb-ripple-init
                className="btn btn-outline btn-floating m-1 rounded-circle bg-light"
                href="#!"
                role="button"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                data-mdb-ripple-init
                className="btn btn-outline btn-floating m-1 rounded-circle bg-light"
                href="#!"
                role="button"
              >
                <i class="fab fa-twitter"></i>
              </a>

              <a
                data-mdb-ripple-init
                class="btn btn-outline btn-floating m-1 rounded-circle bg-light"
                href="#!"
                role="button"
              >
                <i class="fab fa-google"></i>
              </a>

              <a
                data-mdb-ripple-init
                class="btn btn-outline btn-floating m-1 rounded-circle bg-light"
                href="#!"
                role="button"
              >
                <i class="fab fa-instagram"></i>
              </a>

              <a
                data-mdb-ripple-init
                class="btn btn-outline btn-floating m-1 rounded-circle bg-light"
                href="#!"
                role="button"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>

              <a
                data-mdb-ripple-init
                class="btn btn-outline btn-floating m-1 rounded-circle bg-light"
                href="#!"
                role="button"
              >
                <i class="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div class="text-center p-3">
            ©Copyright:
            <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
              Developed by Abhishek Tiwari
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Navbar;
