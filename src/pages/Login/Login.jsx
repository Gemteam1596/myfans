import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        alert("User profile not found. Please create an account.");
        navigate("/signup");
        return;
      }

      const userData = docSnap.data();

      alert("Login successful!");

      if (userData.accountType === "Creator") {
        navigate("/creator-dashboard");
      } else {
        navigate("/fan-dashboard");
      }
    } catch (error) {
      alert(error.message);
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

                <button type="submit" className="btn btn-danger w-100">
                  Login
                </button>

                <div className="text-center mt-4">
                  Don't have an account?{" "}
                  <Link to="/signup" className="ms-2 signup-link">
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