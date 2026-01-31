"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import GitHubLogo from "../../icons/GitHubLogo";
import GmailLogo from "../../icons/GmailLogo";
import XLogo from "../../icons/XLogo";
import ContactCard from "../../ui/Cards/ContactCard";
import Tittle from "../../ui/Tittle";

interface InputGroupProps {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: boolean;
  textarea?: boolean;
  rows?: number;
}

const InputGroup = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
  error,
  textarea = false,
  rows = 5,
}: InputGroupProps) => {
  const baseClasses = `
    w-full rounded-2xl px-4 py-3
    bg-blue-950/40 border
    ${error ? "border-red-500" : "border-blue-500/20"}
    text-white placeholder:text-white/30
    focus:outline-none focus:border-cyan-400/60
    focus:bg-blue-900/40
    transition-all
  `;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] uppercase tracking-widest text-cyan-300/60 ml-1">
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={onChange}
          className={baseClasses + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseClasses}
        />
      )}
    </div>
  );
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      subject: !formData.subject.trim(),
      message: !formData.message.trim(),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((v) => v)) return;

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_o7vwszr",
        "template_nzqyqbn",
        formRef.current,
        "5gOPnAZzsrC7ZcgYr"
      )
      .then(
        () => {
          setLoading(false);
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Email send error:", error.text);
          setLoading(false);
          setErrorMessage("Failed to send the message.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4">
      <Tittle text="Contact" highlightedText="Me" bgText="Contact" />
      <p className="text-center text-white/70 my-4 max-w-2xl mx-auto">
        Actively seeking freelance, remote, full-time, or part-time
        opportunities.
      </p>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* CONTACT + SOCIAL */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-2">Get in Touch</h3>

            <ContactCard
              title="Email"
              value="yourname@example.com"
              icon={<GmailLogo className="w-6 h-6" />}
              link="mailto:yourname@example.com"
            />

            <ContactCard
              title="GitHub"
              value="github.com/yourusername"
              icon={<GitHubLogo className="w-6 h-6" />}
              link="https://github.com"
            />

            <ContactCard
              title="X (formerly Twitter)"
              value="@yourusername"
              icon={
                <XLogo className="w-5 h-5 text-white/80 group-hover:text-cyan-300 transition-colors" />
              }
              link="https://x.com/yourusername"
            />
          </div>

          {/* FORM */}
          <div className="relative mt-8">
            <div className="bg-blue-950/40 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-400/10 blur-[90px] rounded-full" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputGroup
                    label="Name"
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                  <InputGroup
                    label="Email"
                    placeholder="youremail@example.com"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>

                <InputGroup
                  label="Subject"
                  placeholder="Project Inquiry"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                />

                <InputGroup
                  label="Message"
                  placeholder="Tell me about your project..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  textarea
                  rows={5}
                  type="text"
                />

                {successMessage && (
                  <p className="text-green-400 font-medium">{successMessage}</p>
                )}
                {errorMessage && (
                  <p className="text-red-500 font-medium">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`
                    w-full py-4 rounded-2xl font-bold
                    bg-gradient-to-r from-cyan-400 to-blue-500
                    text-white
                    hover:scale-[1.02] active:scale-[0.98]
                    transition-all duration-300
                    shadow-lg shadow-cyan-400/20
                    ${
                      loading
                        ? "opacity-60 cursor-not-allowed animate-pulse"
                        : ""
                    }
                  `}
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
