import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthFormTitle from "../shared/AuthFormTitle";
import { useSingUpMutation } from "../../redux/auth/authApi";
import Swal from "sweetalert2";

type Inputs = {
  password: string;
  email: string;
};

const SignUp = () => {
  const [SignUp, { isLoading }] = useSingUpMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await SignUp(data).unwrap();
      // token save in local storage
      localStorage.setItem("token", JSON.stringify(result.token));
      // reset form after sing up
      reset();
      // success modal show after successfully sing up.
      Swal.fire({
        title: "Well Done!",
        text: "User Sign Up Successful!",
        icon: "success",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container flex justify-center items-center h-screen">
      <div
        className="w-[444px] h-[558px] rounded-2xl border border-solid border-[#eee] px-[62px] pt-[54px]"
        style={{
          boxShadow:
            "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        }}
      >
        <AuthFormTitle title="Sign Up to continue with Stack" />
        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <div>
            <label htmlFor="">Email</label> <br />
            <input
              type="email"
              className="w-full mt-1 px-[14px] py-[10px] rounded-lg border border-solid border-[#D6BBFB] outline-none"
              style={{
                boxShadow:
                  "0px 0px 0px 4px #F4EBFF, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              }}
              placeholder="Enter Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-[#F04438] text-sm mt-1">
                This field is required
              </p>
            )}{" "}
          </div>
          <div className="mt-5">
            <label htmlFor="">Password</label> <br />
            <input
              type="password"
              className="w-full mt-1 px-[14px] py-[10px] rounded-lg border border-solid border-[#D6BBFB] outline-none"
              style={{
                boxShadow:
                  "0px 0px 0px 4px #F4EBFF, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              }}
              placeholder="Enter Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-[#F04438] text-sm mt-1">
                This field is required
              </p>
            )}{" "}
          </div>
          <button
            type="submit"
            className={`${
              isLoading && "cursor-not-allowed"
            } w-full rounded-lg py-[10px] mt-5 text-white bg-[#6941C6] transition-transform active:scale-95 hover:opacity-95`}
          >
            {isLoading ? "Loading..." : "Sing Up"}
          </button>
          <p className="font-medium text-[#377DFF] mt-6">
            <span className="text-[#B0B7C3]">Already have an account? </span>
            <Link to="/sign-in">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
