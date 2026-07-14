import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Firebase Login
      await signInWithEmailAndPassword(auth, email, password);

      // Load user profile
      const response = await fetch(
        "https://api.myfanshub.club/api/get-profile.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        alert(result.message || "Unable to load profile.");
        setLoading(false);
        return;
      }

      // Save logged in user
      localStorage.setItem("user", JSON.stringify(result.user));

      // Redirect back to the page user originally wanted
      const redirect = localStorage.getItem("redirectAfterLogin");

      if (redirect && redirect !== "/login") {
        localStorage.removeItem("redirectAfterLogin");
        navigate(redirect, { replace: true });
        return;
      }

      // Otherwise go to dashboard
      if (result.user.accountType === "Creator") {
        navigate("/creator-dashboard", { replace: true });
      } else {
        navigate("/fan-dashboard", { replace: true });
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            <div className="login-card">

              <h2>Welcome Back</h2>

              <p>Login to your MyFans account</p>

              <form onSubmit={handleLogin}>

                <div className="mb-3">
                  <label>Email Address</label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="d-flex justify-content-between mb-4">
                  <div>
                    <input type="checkbox" /> Remember Me
                  </div>

                  <Link to="/forgot-password">
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="btn btn-danger w-100"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

                <div className="text-center mt-4">
                  Don't have an account?
                  <Link
                    to="/signup"
                    className="ms-2 signup-link"
                  >
                    Sign Up
                  </Link>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;