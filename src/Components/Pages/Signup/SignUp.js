import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Sheared/Loading";

const SignUp = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (googleUser || user) {
    console.log(googleUser || user);
  }

  if (loading || googleLoading || updating) {
    return <Loading />;
  }

  let signInErrors;
  if (error || googleError || updateError) {
    signInErrors = (
      <p className="text-red-400 italic text-sm">
        Error: {error?.message} {googleError?.message}
        {updateError?.message}
      </p>
    );
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    toast("profile updated");
  };

  return (
    <div className="hero min-h-screen ">
      <div
        style={{ width: "385px", height: "556px" }}
        className="hero-content flex-col"
      >
        <div className="card flex-shrink-0 w-full max-w-lg shadow-xl bg-base-100">
          <div className="card-body ">
            <h1 className="text-center font-semibold">SignUp</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Enter your name",
                    },
                  })}
                  type="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                />
                {errors.name?.type === "required" && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors?.name.message}
                  </span>
                )}
              </div>
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
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
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
              </div>
              <div className="form-control ">
                <button className="btn btn-accent">Sign Up</button>
              </div>
            </form>
            <p className="text-xs text-center">
              Already have an account?
              <Link
                to="/login"
                href="#"
                className="label-text-alt link link-hover mx-3 text-secondary"
              >
                LogIn now
              </Link>
            </p>
            <div className="divider text-xs my-2">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-accent"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
          {signInErrors}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
