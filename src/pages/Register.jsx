import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase-config";
import toast from "react-hot-toast";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const notifyD = (text) =>
    toast.error(text, {
      duration: 4000,
      position: "top-right",
    });

  const notifyS = (text) =>
    toast.success(text, {
      duration: 4000,
      position: "top-right",
    });

  const register = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return notifyD("Passwords do not match! Try again...");
    } else {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName,
          });
          notifyS("Successfully registered!");
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          notifyD(errorMessage);
          // ..
        });
    }
  };

  return (
    <section className="flex justify-center md:w-[60vw] md:h-[90vh]">
      {/* <img src="./images/chef.svg" className="max-w-[300px]" alt="Sample" /> */}
      <form
        className="max-w-md text-white md:w-8/12 md:p-16 p-8 mx-4 mt-4 md:m-auto bg-slate-500 bg-opacity-80 rounded-[4rem]"
        onSubmit={register}
      >
        <h1 className="mb-8 text-3xl text-center">Sign Up</h1>

        {/* <!-- Email input --> */}
        <div className="mb-6">
          <Input
            type="name"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Full Name"
            required={true}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <Input
            type="email"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Email address"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* <!-- Password input --> */}
        <div className="mb-6">
          <Input
            type="password"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <Input
            type="password"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Confirm password"
            required={true}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          className="inline-block w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Create Account
        </Button>
        <div className="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the
          <a
            className="no-underline border-b border-grey-dark text-grey-dark"
            href="#!"
          >
            Terms of Service
          </a>{" "}
          and
          <a
            className="no-underline border-b border-grey-dark text-grey-dark"
            href="#!"
          >
            Privacy Policy
          </a>
        </div>
        <div className="text-center text-sm text-grey-dark mt-4">
          Already have an account?
          <a
            className="no-underline border-b border-green-300 text-green-300 hover:text-green-400 hover:border-green-400"
            href="/login"
          >
            Login
          </a>
        </div>
      </form>
    </section>
  );
}

export default Register;
