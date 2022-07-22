import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
// import { ThemeProvider } from "styled-components";
import { useUser } from "./context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const { isLoggedIn } = useUser();

  const logout = async () => {
    return await signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("logout successful");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  const displayName = isLoggedIn ? auth.currentUser.displayName : null;

  if (isLoggedIn === null) {
    return (
      <div className="text-5xl text-green-500 flex justify-center items-center mt-56">
        Redirecting...
      </div>
    );
  }

  return (
    <Router>
      <Toaster />
      {isLoggedIn && (
        <nav className="text-center flex flex-col justify-center align-middle md:flex-row md:justify-between py-6 bg-black bg-opacity-40 text-2xl text-white">
          <NavLink
            to="/"
            className=" mx-4 text-green-400 hover:text-green-300 hover:underline"
          >
            <span className="font-serif italic text-amber-500">
              {"<SUSLU/>"}
            </span>{" "}
            RECIPE
          </NavLink>
          <ul>
            <NavLink
              to="/about"
              className=" mx-4 text-green-400 hover:text-green-300 hover:underline"
            >
              About
            </NavLink>
            <a
              href="https://github.com/malisuslu"
              target="_blank"
              rel="noreferrer"
              className=" mx-4 text-green-400 hover:text-green-300 hover:underline"
            >
              Github
            </a>
            <NavLink
              to="/login"
              className=" mx-4 text-green-400 hover:text-green-300 hover:underline"
              onClick={logout}
            >
              Logout (
              <span className="text-amber-500 italic underline">
                {displayName}
              </span>
              )
            </NavLink>
          </ul>
        </nav>
      )}

      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <Navigate to="/login" />}
        />
        <Route
          path={"/*"}
          element={
            <>
              <h1 className="text-3xl text-white flex justify-center items-center mt-56">
                Page Not Found
              </h1>
              <p className="text-3xl text-white flex justify-center items-center text-center">
                Return to
                <a
                  href="/"
                  className=" text-orange-500 hover:text-orange-600 hover:underline break-words whitespace-pre-wrap"
                >
                  {isLoggedIn ? " Home Page" : " Login Page"}
                </a>
              </p>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
