"use client";
import { Button } from "@/components/Button";
import { BACKEND_URL } from "@/lib/Constants";
import Link from "next/link";
import React, { useRef } from "react";
import { signIn } from "next-auth/react";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const SigninPage = () => {
  const login = async () => {
    const result = await signIn("credentials", {
      redirect: false,
      username: "test@gmail.com",
      password: "123",
    });

    if (result?.error) {
      // setError(result.error);
      alert("Login Failed!");
    } else {
      // Redirect or show success message
      window.location.href = "/";
    }
  };

  return (
    <div>
      <div>Sign in</div>
      <div>
        <div>
          <Button onClick={login}>Submit</Button>
          <Link href={"/"}>Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
