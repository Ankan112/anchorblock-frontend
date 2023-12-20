import Navigation from "../shared/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="main-container">
        <div className="flex justify-center items-center gap-5 mt-10">
          <div className=" border border-solid p-5 rounded-lg bg-[#6941C6] text-white w-1/4">
            <h3 className="text-lg font-semibold">Sign In Credential</h3>
            <p>
              Email:{" "}
              <span className="text-base font-medium">eve.holt@reqres.in</span>
            </p>
            <p>
              Password:{" "}
              <span className="text-base font-medium">cityslicka</span>
            </p>
          </div>
          <div className=" border border-solid p-5 rounded-lg bg-[#6941C6] text-white w-1/4">
            <h3 className="text-lg font-semibold">Sign Up Credential</h3>
            <p>
              Email:{" "}
              <span className="text-base font-medium">eve.holt@reqres.in</span>
            </p>
            <p>
              Password: <span className="text-base font-medium">pistol</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
