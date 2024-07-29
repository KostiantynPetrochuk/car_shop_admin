"use client";
import { Button } from "@/components/Button";
import InputBox from "@/components/InputBox";
import { BACKEND_URL } from "@/lib/Constants";
import Link from "next/link";
import React, { useRef } from "react";
import { signIn } from "next-auth/react";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const register = async () => {
    const res = await fetch(BACKEND_URL + "/auth/register", {
      method: "POST",
      body: JSON.stringify({
        // name: data.current.name,
        // email: data.current.email,
        // password: data.current.password,
        login: data.current.name,
        // email: data.current.email,
        pwd: data.current.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    const response = await res.json();
    alert("User Registered!");
    console.log({ response });
    //
    // auto login after register and redirect
    const result = await signIn("credentials", {
      redirect: false,
      username: "test@gmail.com",
      password: "123",
    });

    if (result?.error) {
      // setError(result.error);
      alert("Login after register Failed!");
    } else {
      // Redirect or show success message
      window.location.href = "/";
    }
  };
  const data = useRef<FormInputs>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <div>Sign up</div>
      <div>
        <InputBox
          autoComplete="off"
          name="name"
          labelText="Name"
          required
          onChange={(e) => (data.current.name = e.target.value)}
        />
        <InputBox
          name="email"
          labelText="Email"
          required
          onChange={(e) => (data.current.email = e.target.value)}
        />
        <InputBox
          name="password"
          labelText="password"
          type="password"
          required
          onChange={(e) => (data.current.password = e.target.value)}
        />
        <div>
          <Button onClick={register}>Submit</Button>
          <Link href={"/"}>Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
