import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const user = auth.currentUser;

      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="container py-5 text-white">

      <div className="d-flex justify-content-between align-items-center">

        <h1>Dashboard</h1>

        <button
          className="btn btn-danger"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      <hr />

      {userData ? (
        <>
          <h2>Welcome, {userData.fullName} 👋</h2>

          <div className="mt-4">
            <p><strong>Full Name:</strong> {userData.fullName}</p>
            <p><strong>Username:</strong> {userData.username}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Account Type:</strong> {userData.accountType}</p>
          </div>
        </>
      ) : (
        <p>Loading user...</p>
      )}

    </div>
  );
}

export default Dashboard;