import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/store/auth/slices/authSlice";
import { useToast } from "@/hooks/use-toast";
import { LoaderCircle } from "lucide-react";
const Login = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  console.log("loading", isLoading);
  const handleInputChange = (e) => {
    if (e.target.name === "photo") {
      const file = e.target.files[0];
      if (file) {
        setValues({ ...values, [e.target.name]: file });
        console.log("File uploaded:", file);
      }
    } else setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("values : ", values);
    dispatch(loginUser(values)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  };
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 px-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full sm:max-w-md p-5 mx-auto border rounded-md"
      >
        <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="xyz@gmail.com"
              onChange={handleInputChange}
              className="py-2 px-3 border border-gray-300 focus:border-black focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="•••••••••"
              onChange={handleInputChange}
              className="py-2 px-3 border border-gray-300 focus:border-black focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div className="mt-6 flex items-center justify-end">
            {/* <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
              <label
                for="remember_me"
                className="ml-2 block text-sm leading-5 text-gray-900"
              >
                {" "}
                Remember me{" "}
              </label>
            </div> */}
            <Link className="text-sm"> Forgot your password? </Link>
          </div>
          <div className="mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-2 bg-gradient-to-r from-[#9B111E] to-[#D50032]
 text-white font-bold rounded-lg shadow-lg hover:from-[#D50032] hover:to-[#9B111E] focus:outline-none focus:ring-2 focus:ring-[#FF4C6A] focus:ring-offset-2 focus:ring-offset-[#D50032] transition duration-200 "
              disabled={isLoading}
            >
              {isLoading ? (
                <LoaderCircle className="animate-spin text-center mx-auto" />
              ) : (
                "Sign Up"
              )}
            </motion.button>
          </div>
          <div className="mt-6 text-center">
            <Link
              to={"/auth/signup"}
              className="underline hover:text-blue-500 text-sm"
            >
              don't have an account?{" "}
              <span className="font-medium"> Sign up </span>
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
