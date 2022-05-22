import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Sheared/Loading";

const LogIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (googleUser || user) {
    navigate(from, { replace: true });
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (loading || googleLoading) {
    return <Loading />;
  }

  let signInErrors;
  if (error || googleError) {
    signInErrors = (
      <p className="text-red-400 italic text-sm">
        Error: {error?.message} {googleError?.message}
      </p>
    );
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="hero min-h-screen ">
      <div
        style={{ width: "385px", height: "480px" }}
        className="hero-content flex-col"
      >
        <div className="card flex-shrink-0 w-full max-w-lg shadow-xl bg-base-100">
          <div className="card-body ">
            <h1 className="text-center font-semibold text-2xl">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                />
                {errors.email?.type === "required" && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors?.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors?.email.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^[A-Za-z]\w{6,14}$/,
                      message:
                        "6 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter",
                    },
                  })}
                  type="password"
                  placeholder="Enter Your Password Here"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors?.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors?.password.message}
                  </span>
                )}
                <label className="label">
                  <Link
                    to="/signup"
                    href="#"
                    className="label-text-alt link link-hover text-secondary"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control ">
                <button className="btn btn-accent">Login</button>
              </div>
            </form>
            <p className="text-xs text-center">
              New in Doctor's Portal?
              <Link
                to="/signup"
                href="#"
                className="label-text-alt link link-hover mx-3 text-secondary"
              >
                Create new account
              </Link>
            </p>
            <div className="divider text-xs my-2">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-accent"
            >
              CONTINUE WITH GOOGLE
            </button>
            {signInErrors}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
