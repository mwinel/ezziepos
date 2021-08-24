import { useRouter } from "next/router";
import Link from "next/link";
import LoginForm from "@components/auth/LoginForm";

const Login = () => {
  const router = useRouter();

  const loginHandler = async (enteredLoginData) => {
    console.log(enteredLoginData);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          or{" "}
          <Link href="/auth/signup">
            <a className="font-medium text-cyan-600 hover:text-cyan-500">
              Start your 14 days free trial.
            </a>
          </Link>
        </p>
      </div>
      <LoginForm onLogin={loginHandler} />
    </div>
  );
};

export default Login;
