import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { MailIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import TextInput from "@components/ui/TextInput";
import Button from "@components/ui/Button";
import Checkbox from "@components/ui/Checkbox";
import Alert from "@components/ui/Alert";

interface LoginFormProps {
  onLogin?: any;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>();
  const passwordInputRef = useRef<HTMLInputElement>();

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

    const enteredEmail = emailInputRef?.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    onLogin(loginData);
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

          {showAlert ? (
            <Alert
              text="Alert for login error."
              linkText="Hello World!"
              variant="danger"
            />
          ) : null}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="remember_me" name="remember_me" />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link href="#">
                <a className="font-medium text-cyan-600 hover:text-cyan-500">
                  Forgot your password?
                </a>
              </Link>
            </div>
          </div>
          <Button
            variant="secondary"
            textSize="md"
            onClick={submitHandler}
            className="w-full"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
