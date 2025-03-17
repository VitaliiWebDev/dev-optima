"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function FormFreeTrial() {
  const [placeholder, setPlaceholder] = useState("Your business email...");

  const handleResize = useCallback(() => {
    setPlaceholder(
      window.innerWidth < 640 ? "Email..." : "Your business email..."
    );
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

  const ResetForm = useCallback(() => {
    setMessage("");
    setStatus("");
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      ResetForm();
    },
    [ResetForm]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    ResetForm();

    if (emailPattern.test(email)) {
      setStatus("loading");
      try {
        const data = await fakeApiRequest(email);
        if (data) {
          setStatus("success");
          setEmail("");
        }
      } catch (error) {
        setStatus("error");
        setMessage(error as string);
      }
    } else {
      setMessage("Email is a required field");
    }
  };

  const getStatusMessage = (status: string) => {
    if (status === "loading") {
      return (
        <div className="w-11 shrink-0 aspect-1-1 rounded-full bg-(--secondary-blue) mr-[0.375rem]">
          <Image
            src="./icons/load-icon.svg"
            width={44}
            height={44}
            alt=""
            className="rotate"
          />
        </div>
      );
    } else if (status === "success") {
      return (
        <div className="w-11 shrink-0 aspect-1-1 rounded-full bg-(--primary-green) mr-[0.375rem]">
          <Image src="./icons/success-icon.svg" width={44} height={44} alt="" />
        </div>
      );
    } else if (status === "error") {
      return (
        <div className="w-11 shrink-0 aspect-1-1 rounded-full bg-(--primary-pink) mr-[0.375rem]">
          <Image src="./icons/error-icon.svg" width={44} height={44} alt="" />
        </div>
      );
    }
    return (
      <button
        type="submit"
        className="btn btn-primary shrink-0 py-0 h-11 mr-[0.375rem]"
      >
        Free trial
      </button>
    );
  };

  return (
    <>
      <div
        className="p-[1px] rounded-full max-w-[29rem] max-lg:m-auto relative"
        style={{
          background: "linear-gradient(87deg, #1b244f, #273871, #2c427f)",
        }}
      >
        <form
          action="#"
          className="flex items-center rounded-full"
          style={{
            background: "linear-gradient(215deg, #18264a 0%, #0f1631 100%)",
            maskImage: "linear-gradient(white 0%, white 100%)",
          }}
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder={placeholder}
            className="h-[3.5rem] px-6 w-full placeholder:font-light placeholder:text-[] focus:outline-0"
            style={{
              maskImage: "linear-gradient(white 0%, white 100%)",
            }}
          />
          {getStatusMessage(status)}
        </form>
        {message && (
          <div className="px-6 font-medium text-[#F04242] absolute -bottom-3 left-0 translate-y-[100%] w-full">
            {message}
          </div>
        )}
      </div>
    </>
  );
}

const fakeApiRequest = (email: string) => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        console.log(email);
        resolve("Send success");
      } else {
        reject("Send error. Try again later");
      }
    }, 500);
  });
};
