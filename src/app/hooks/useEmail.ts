"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { en } from "@/src/app/i18n/en";

export const useEmail = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = () => {
    if (!formRef.current) return;

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSuccessMessage(en.contact.form.successMessage);
          setLoading(false);
        },
        (error) => {
          console.error(error.text);
          setErrorMessage(en.contact.form.errorMessage);
          setLoading(false);
        }
      );
  };

  return { formRef, loading, successMessage, errorMessage, sendEmail };
};
