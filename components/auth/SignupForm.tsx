import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { MailIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import TextInput from "@components/ui/TextInput";
import Button from "@components/ui/Button";
import Checkbox from "@components/ui/Checkbox";
import Alert from "@components/ui/Alert";

interface SignupFormProps {
  onSignup?: any;
}

const SignupForm = ({ onSignup }: SignupFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const handleShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword, setShowPassword]
  );

  const handleShowConfirmPassword = useCallback(
    () => setShowConfirmPassword(!showConfirmPassword),
    [showConfirmPassword, setShowConfirmPassword]
  );

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;

    const signupData = {
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    };

    onSignup(signupData);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-md sm:px-10">
        <form className="space-y-6" onSubmit={submitHandler}>
          <TextInput
            label="Email Address"
            id="email"
            type="text"
            required
            innerRef={emailInputRef}
            icon={
              <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
            }
          />
          <TextInput
            label="Password"
            id="password"
            type={showPassword ? "text" : "password"}
            required
            innerRef={passwordInputRef}
            icon={
              showPassword ? (
                <EyeOffIcon
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={handleShowPassword}
                />
              ) : (
                <EyeIcon
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={handleShowPassword}
                />
              )
            }
          />
          <TextInput
            label="Confirm Password"
            id="confirm_password"
            type={showConfirmPassword ? "text" : "password"}
            required
            innerRef={confirmPasswordInputRef}
            icon={
              showConfirmPassword ? (
                <EyeOffIcon
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={handleShowConfirmPassword}
                />
              ) : (
                <EyeIcon
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={handleShowConfirmPassword}
                />
              )
            }
          />

          {showAlert ? (
            <Alert
              text="Alert for signup error."
              linkText="Hello World!"
              variant="danger"
            />
          ) : null}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="agree_to_terms" name="agree_to_terms" />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                I agree to{" "}
                <Link href="/auth/signin">
                  <a className="font-medium text-cyan-600 hover:text-cyan-500">
                    terms and conditions.
                  </a>
                </Link>
              </label>
            </div>
          </div>
          <Button
            variant="secondary"
            textSize="md"
            onClick={submitHandler}
            className="w-full"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
