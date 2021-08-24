import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MailIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import TextInput from "@components/ui/TextInput";
import Checkbox from "@components/ui/Checkbox";
import Button from "@components/ui/Button";

import SignupForm from "@components/auth/SignupForm";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const router = useRouter();

  const handleShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword, setShowPassword]
  );

  const handleShowConfirmPassword = useCallback(
    () => setShowConfirmPassword(!showConfirmPassword),
    [showConfirmPassword, setShowConfirmPassword]
  );

  const signupHandler = async (enteredSignupData) => {
    console.log(enteredSignupData);
  };

  // const onSignUp = (event) => {
  //   event.preventDefault();
  //   if (password === confirmPassword) {
  //     setError("");
  //     setShowErrorAlert(false);
  //     router.push("/");
  //   } else {
  //     setError("Passwords do not match.");
  //     setShowErrorAlert(true);
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/signin">
            <a className="font-medium text-cyan-600 hover:text-cyan-500">
              Login.
            </a>
          </Link>
        </p>
      </div>
      <SignupForm onSignup={signupHandler} />
    </div>
  );
};

export default SignUp;
