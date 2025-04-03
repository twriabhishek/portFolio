import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ecomm from "../assets/images/Screenshot 2024-05-05 163900.png";
import chatapp from "../assets/images/Screenshot 2024-05-05 165256.png";
import blog from "../assets/images/Screenshot 2024-05-05 165124.png";
import pdf from "../assets/images/AbhishekNw.pdf";

const Navbar = () => {
  const [contactdetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleClickNotify = (e) => {
    e.preventDefault();
    if (
      !contactdetails.name ||
      !contactdetails.email ||
      !contactdetails.message ||
      !contactdetails.name.trim() ||
      !contactdetails.email.trim() ||
      !contactdetails.message.trim()
    ) {
      toast.error("All fields required");
    } else {
      console.log(contactdetails);
      toast.success("Submit Successfully");
      setContactDetails({
        ...contactdetails,
        name: "",
        email: "",
        message: "",
      });
    }
  };

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
                    {/* <a
                      class="nav-link active me-2"
                      aria-current="page"
                      href="#services"
                    >
                      Services
                    </a> */}
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
                ◦ I'm an ambitious, disciplined, and visionary individual. With
                approximately two years of professional experience in the IT
                industry,I have honed my skills while working on live project
                environments,fostering continuous learning and development.
                Specializing in building client applications, I bring forth
                strong interpersonal and communication skills to drive project
                success
                <br />
                ◦ Tech enthusiast dedicated to continuous learning and
                innovation, with a solid foundation in Computer Science
                fundamentals. Proficient in frontend web development
                technologies such as HTML5, CSS, JavaScript, Bootstrap, and
                React.js. Experienced in backend technologies like Node.js,
                Express, and databases including relational and non-relational
                databases.
                <br />
                ◦ Driven by ambition and guided by a forward-thinking mindset, I
                excel in problem-solving and embrace challenges as oppor-
                tunities for personal and professional growth. I maintain
                discipline and focus to achieve success in all endeavors. I
                thrive on exploring new technologies and accumulating fresh
                experiences.
                <br />
                <br />
                Feel free to reach out via <i class="fa-solid fa-envelope"></i>{" "}
                : <a href="">abhishek130199@gmail.com</a>
                <br />
                Feel free to reach out via <i class="fa-solid fa-phone"></i> :{" "}
                <a href="">(+91) 9506937439</a>
              </p>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4 mb-5">
                <div className="mb-4">
                  <h3
                    className="sub-common-heading"
                    style={{ color: "#ff004f" }}
                  >
                    Skills
                  </h3>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">Language</p>
                  <p className="mt-0 mb-0">C++, Java(Novice), JavaScript</p>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">Tools</p>
                  <p className="mt-0 mb-0">Git, AI Tools</p>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">Technologies</p>
                  <p className="mt-0 mb-0">
                    HTML, CSS, Javascript, React Js, Bootstrap, NodeJs
                  </p>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">Databases</p>
                  <p className="mt-0 mb-0">
                    Oracle sql, Mysql, Mongodb, Structured Query Language
                  </p>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">Technical Skills</p>
                  <p className="mt-0 mb-0">Data Structure and Algorithm, Aws</p>
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-5">
                <div className="mb-4">
                  <h3
                    className="sub-common-heading"
                    style={{ color: "#ff004f" }}
                  >
                    Experience
                  </h3>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">EXATO. AI | Software Engineer</p>
                  <p className="mt-0 mb-0">
                    June, 2023 - Present |{" "}
                    <i class="fa-solid fa-location-dot"></i> Noida(INDIA)
                  </p>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">
                    SRDT PRIVATE LIMITED | Software Engineer
                  </p>
                  <p className="mt-0 mb-0">
                    October, 2022 - May, 2023 |{" "}
                    <i class="fa-solid fa-location-dot"></i> Lucknow(INDIA)
                  </p>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">
                    SOFTPRO INDIA PVT LTD| Software Intern
                  </p>
                  <p className="mt-0 mb-0">
                    July, 2019 - August, 2019 |{" "}
                    <i class="fa-solid fa-location-dot"></i> Lucknow(INDIA)
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-5">
                <div>
                  <h3
                    className="sub-common-heading"
                    style={{ color: "#ff004f" }}
                  >
                    Education
                  </h3>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">
                    DR. RMLAU UNIVERSITY |{" "}
                    <i class="fa-solid fa-location-dot"></i> AYODHYA(INDIA){" "}
                    <br /> B.Tech. in Computer Science and Engineering
                  </p>
                  <p className="mt-0 mb-0">Passout- August, 2022</p>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">
                    MRLB INTER COLLEGE |{" "}
                    <i class="fa-solid fa-location-dot"></i> BARABANKI(IND){" "}
                    <br /> Intermediate in Physics, Chemistry and Mathematics
                  </p>
                  <p className="mt-0 mb-0">Passout- June, 2017</p>
                </div>
                <div className="common-paragraph">
                  <p className="mt-4 mb-0">
                    MRLB INTER COLLEGE |{" "}
                    <i class="fa-solid fa-location-dot"></i> BARABANKI(IND){" "}
                    <br /> HighSchool in Mathematics
                  </p>
                  <p className="mt-0 mb-0">Passout- July, 2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="services">
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
      </div> */}

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
                    <img src={blog} class="card-img-top" alt="alternate" />
                    <div class="card-body">
                      <h5 class="card-title sub-common-heading">
                        Bloging Application
                      </h5>
                      <p
                        class="card-text common-paragraph"
                        style={{ overflowY: "scroll", maxHeight: "135px" }}
                      >
                        Tech Stack: NodeJs, Express, Bootstrap, EJS
                        <br />
                        Brief Intro: I have built a complete server-side
                        rendered application using Node.js, Express, and EJS. I
                        have implemented various functionalities such as
                        register, login, comment, like, add blog, update blog,
                        delete blog, etc.
                      </p>
                      <div className="button-div">
                        <a
                          href="https://github.com/twriabhishek/nodeJSComplete/tree/master/22_utubeBlog"
                          target="_blank"
                        >
                          <button className="button contact-button submit-button">
                            Go
                            <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                  <div class="card">
                    <img src={ecomm} class="card-img-top" alt="alternate" />
                    <div class="card-body">
                      <h5 class="card-title sub-common-heading">
                        E-commerce Store
                      </h5>
                      <p
                        class="card-text common-paragraph"
                        style={{ overflowY: "scroll", maxHeight: "135px" }}
                      >
                        Tech Stack: React, UseContext Api, Bootstrap
                        <br />
                        Brief Intro: In this application, the main focus has
                        been on manipulating the state using the Connect API.
                        There are various functionalities such as product
                        description, adding a product, remove product from
                        wishlist, updating wishlist, etc.
                      </p>
                      <div className="button-div">
                        <a
                          href="https://github.com/twriabhishek/Ecommerce"
                          target="_blank"
                        >
                          <button className="button contact-button submit-button">
                            Go
                            <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                  <div class="card">
                    <img src={chatapp} class="card-img-top" alt="alternate" />
                    <div class="card-body">
                      <h5 class="card-title sub-common-heading">
                        Chat Application
                      </h5>
                      <p
                        class="card-text common-paragraph"
                        style={{ overflowY: "scroll", maxHeight: "135px" }}
                      >
                        Tech Stack: NodeJs, EJS, Bootstrap, Websocket
                        <br />
                        Brief Intro: In this application, a user can enter a
                        chat room by providing their username. Once inside the
                        chat room, they can engage in conversation with all
                        other participants present in the chat. Multiple users
                        can join the chat room simultaneously, allowing for
                        group discussions.
                      </p>
                      <div className="button-div">
                        <a
                          href="https://github.com/twriabhishek/nodeJSComplete/blob/master/23_websocket/index.js"
                          target="_blank"
                        >
                          <button className="button contact-button submit-button">
                            Go
                            <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                          </button>
                        </a>
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
                    <i class="fa-solid fa-paper-plane me-4"></i>{" "}
                    abhishek130199@gmail.com
                  </p>
                  <p className="common-paragraph mb-5">
                    <i class="fa-solid fa-phone  me-4"></i>9506937439
                  </p>
                  <div className="contact-icons">
                    <a
                      href="https://www.instagram.com/im_ab.hishek_?igsh=MWYxdnc3N2Uxcmc2Ng=="
                      target="_blank"
                    >
                      <i class="fa-brands fa-instagram me-4 contact"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/abhishekpandit.pandit.524?mibextid=ZbWKwL"
                      target="_blank"
                    >
                      <i class="fa-brands fa-facebook me-4 contact"></i>
                    </a>
                    <a
                      href="https://x.com/im_abhitiwari?t=dk01hOWVtQ-XpUBcHL2i9g&s=09"
                      target="_blank"
                    >
                      <i class="fa-brands fa-twitter me-4 contact"></i>
                    </a>
                    <a href="https://github.com/twriabhishek" target="_blank">
                      <i class="fa-brands fa-github me-4 contact"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abhishek-tiwari-7232171b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      <i class="fa-brands fa-linkedin contact"></i>
                    </a>
                  </div>
                  <div className="button-div">
                    <a href={pdf} download="Abhishek_CV.pdf">
                      <button className="button contact-button">
                        Download CV
                      </button>
                    </a>
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
                        required
                        name="name"
                        value={contactdetails.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        aria-describedby="email"
                        placeholder="Enter you email"
                        required
                        name="email"
                        value={contactdetails.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="message"
                        rows="6"
                        placeholder="Enter your message"
                        required
                        name="message"
                        value={contactdetails.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="button-div">
                      <button
                        className="button contact-button submit-button"
                        onClick={handleClickNotify}
                      >
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
                href="https://www.facebook.com/abhishekpandit.pandit.524?mibextid=ZbWKwL"
                role="button"
                target="_blank"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                data-mdb-ripple-init
                className="btn btn-outline btn-floating m-1 rounded-circle bg-light"
                href="https://x.com/im_abhitiwari?t=dk01hOWVtQ-XpUBcHL2i9g&s=09"
                role="button"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
              </a>

              <a
                data-mdb-ripple-init
                class="btn btn-outline btn-floating m-1 rounded-circle bg-light"
                href="#!"
                role="button"
                target="_blank"
              >
                <i class="fab fa-google"></i>
              </a>

              <a
                data-mdb-ripple-init
                class="btn btn-outline btn-floating m-1 rounded-circle bg-light"
                href="https://www.instagram.com/im_ab.hishek_?igsh=MWYxdnc3N2Uxcmc2Ng=="
                role="button"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>

              <a
                data-mdb-ripple-init
                class="btn btn-outline btn-floating m-1 rounded-circle bg-light"
                href="https://www.linkedin.com/in/abhishek-tiwari-7232171b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                role="button"
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>

              <a
                data-mdb-ripple-init
                class="btn btn-outline btn-floating m-1 rounded-circle bg-light"
                href="https://github.com/twriabhishek"
                role="button"
                target="_blank"
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

      <Toaster />
    </>
  );
};

export default Navbar;
