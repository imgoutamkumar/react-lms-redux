import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);

  const handleInputChange = (e, index) => {
    if (/^[a-zA-Z0-9]$/.test(e.target.value) || e.target.value === "") {
      const newOtp = [...otp];
      newOtp[index] = e.target.value;
      setOtp(newOtp);
    }
    if (e.target.value !== "" && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (otp.every((digit) => digit != "")) {
      const otpString = otp.join("").trim();
      console.log("values : ", otpString);
    } else {
      console.error("Error while verifying otp");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 px-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full sm:max-w-md p-5 mx-auto border rounded-md"
      >
        <h2 className="mb-10 text-center text-5xl font-extrabold">
          Verify OTP.
        </h2>
        <p className="mb-6 text-center text-gray-400">
          enter the 6-digit code sent to your email
        </p>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-4 mx-auto flex justify-between items-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                className="size-12 border border-gray-300 focus:border-black focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-xl md:font-semibold rounded-lg text-center bg-white"
                value={digit}
                ref={(element) => (inputRef.current[index] = element)}
                name="otp"
                maxLength={1}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-end">
            <Link className="text-sm hover:text-blue-600"> Resend OTP </Link>
          </div>
          <div className="mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-2 bg-gradient-to-r from-[#9B111E] to-[#D50032]
text-white font-bold rounded-lg shadow-lg hover:from-[#D50032] hover:to-[#9B111E] focus:outline-none focus:ring-2 focus:ring-[#FF4C6A] focus:ring-offset-2 focus:ring-offset-[#D50032] transition duration-200"
            >
              Verify
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default OtpVerification;
