import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import heroImage from "../../assets/images/hero.png";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      if (user.accountType === "Creator") {
        navigate("/creator-dashboard", { replace: true });
      } else {
        navigate("/fan-dashboard", { replace: true });
      }
    }
  }, [navigate]);

  return (
    <>
      <Navbar />

      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 text-center text-lg-start">

              <span className="badge bg-danger px-3 py-2 mb-3">
                🔥 Exclusive Creator Platform
              </span>

              <h1 className="display-4 fw-bold mb-4">
                Subscribe To
                <br />
                Exclusive Content
              </h1>

              <p className="lead mb-4">
                Unlock premium photos, exclusive videos, private chat,
                live sessions and members-only content.
              </p>

              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">

                <button
                  className="btn btn-danger btn-lg"
                  onClick={() => navigate("/signup")}
                >
                  Join Now
                </button>

                <button
                  className="btn btn-outline-light btn-lg"
                  onClick={() => navigate("/creator/james")}
                >
                  Explore
                </button>

              </div>

            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">

              <img
                src={heroImage}
                alt="Creator Platform"
                className="img-fluid hero-image"
              />

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;