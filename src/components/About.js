import * as React from "react";
function About(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="container text-left">
              <div
                className="card"
                style={{
                  width: "100%",
                  backgroundColor:
                    props.mode === "light bg-primary-subtle"
                      ? "white"
                      : "#5d5d77",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <div className="card-body aboutTextutils">
                  <span
                    className="card-title"
                    style={{ fontSize: "2rem", fontStyle: "italic" }}
                  >
                    About <span style={{ fontSize: "2.2rem" }}>Textutils!</span>
                  </span>

                  <p className="card-text">
                    TextUtils is a user-friendly website that allows users to
                    easily convert any given text message to uppercase or
                    lowercase. It provides a convenient and intuitive interface
                    where users can enter their text and instantly see the
                    converted version.
                  </p>
                  <p className="card-text">
                    The main purpose of TextUtils is to assist users in
                    modifying the case of their text according to their specific
                    needs. Whether someone wants to transform their text to
                    uppercase for emphasis or convert it to lowercase for a more
                    subtle appearance, TextUtils offers a simple solution.
                  </p>
                  <p className="card-text">
                    The website offers a preview feature that enables users to
                    see the converted text in real-time as they make changes.
                    This allows users to evaluate the outcome and ensure that
                    the converted text meets their requirements before copying
                    or using it elsewhere.
                  </p>
                  <p className="card-text">
                    TextUtils aims to streamline the process of converting text
                    case and provide a hassle-free experience for its users.
                    With its clean and user-friendly design, users can easily
                    navigate through the website, input their text, and obtain
                    the desired case conversion with just a few clicks.
                  </p>
                  <p className="card-text">
                    TextUtils offers a convenient solution for anyone
                    needing to modify the case of their text. It eliminates the
                    need for manual conversion and saves time and effort by
                    providing an efficient and accessible platform.
                  </p>
                  <p className="card-text">
                    TextUtils is designed to be a versatile tool that caters to
                    various text case conversion needs. Whether you're a writer,
                    a student, a programmer, or anyone working with text,
                    TextUtils offers a range of features to enhance your
                    workflow.
                  </p>
                  <p className="card-text">
                    Experience the convenience and simplicity of TextUtils for
                    all your text case conversion needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="container">
              <div
                className="card"
                style={{
                  width: "100%",
                  backgroundColor:
                    props.mode === "light bg-primary-subtle"
                      ? "white"
                      : "#5d5d77",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <div className="card-body">
                  <span
                    className="card-title"
                    style={{ fontSize: "2rem", fontStyle: "italic" }}
                  >
                    About <span style={{ fontSize: "2.2rem" }}>Developer!</span>
                  </span>

                  <div className="text-center">
                    <img
                      src="aboutDeveloper.jpg"
                      className="card-img-top"
                      alt="..."
                      style={{
                        height: "11.5rem",
                        width: "11rem",
                        borderRadius: "25rem",
                      }}
                    />
                  </div>

                  <div className="card-body">
                    <p className="card-text">
                      The developer behind TextUtils is a skilled web developer
                      with a strong foundation in HTML, CSS, and JavaScript.
                      With hands-on experience in building and deploying web
                      pages, the developer has mastered the art of creating
                      visually appealing and functional websites.
                    </p>
                    <p className="card-text">
                      In addition to the core web technologies, the developer
                      has expanded their skill set to include React, a popular
                      JavaScript library for building user interfaces. With
                      React, they can create interactive and dynamic web
                      applications, providing users with a seamless and engaging
                      experience.
                    </p>
                    {/* <p className="card-text">
              Always eager to learn and grow, the developer is currently on the journey of mastering the MERN stack. MERN stands for MongoDB, Express.js, React, and Node.js - a powerful combination of technologies for building full-stack web applications. By gaining expertise in these technologies, the developer aims to create robust and scalable web applications from end to end.
            </p> */}
                    <p className="card-text">
                      With a strong foundation in web development and a constant
                      drive to expand their skills, the developer is committed
                      to delivering high-quality and user-friendly web
                      applications. TextUtils is just one of the many projects
                      they have undertaken to showcase their passion for coding
                      and create practical solutions for everyday tasks.
                    </p>
                    <p className="card-text">
                      Stay tuned as the developer continues to evolve and bring
                      more exciting features and functionalities to TextUtils
                      and other web applications in the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
