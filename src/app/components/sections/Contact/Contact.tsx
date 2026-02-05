"use client";

import { useState } from "react";
import Tittle from "../../ui/Tittle";
import InputGroup from "./InputGroup";
import ContactCard from "./ContactCard";
import { contacts } from "@/src/app/data/contacts";
import { logoMap } from "../../icons/logoMap";
import { useEmail } from "@/src/app/hooks/useEmail";
import { en } from "@/src/app/i18n/en";
import ScrollFadeUp from "../../ui/ScrollFadeUp";

const Contact = () => {
  const { formRef, loading, successMessage, errorMessage, sendEmail } =
    useEmail();

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
    if (value.trim() !== "") setErrors((prev) => ({ ...prev, [name]: false }));
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

    sendEmail();
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactTexts = en.contact;

  return (
    <section id="contact" className="py-20 px-4">
      <Tittle
        text={contactTexts.sectionTitle.text}
        highlightedText={contactTexts.sectionTitle.highlightedText}
        bgText={contactTexts.sectionTitle.bgText}
      />
      <ScrollFadeUp>
        <p className="text-center text-white/70 my-4 max-w-2xl mx-auto">
          {contactTexts.description}
        </p>
      </ScrollFadeUp>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* CONTACT + SOCIAL */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-2">
              {contactTexts.getInTouchTitle}
            </h3>
            {contacts.map((c) => {
              const Icon = logoMap[c.icon];
              return (
                <ContactCard
                  key={c.title}
                  title={c.title}
                  value={c.value}
                  link={c.link}
                  icon={<Icon className="w-6 h-6" />}
                />
              );
            })}
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
                    label={contactTexts.form.fields.name.label}
                    placeholder={contactTexts.form.fields.name.placeholder}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                  <InputGroup
                    label={contactTexts.form.fields.email.label}
                    placeholder={contactTexts.form.fields.email.placeholder}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>

                <InputGroup
                  label={contactTexts.form.fields.subject.label}
                  placeholder={contactTexts.form.fields.subject.placeholder}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                />
                <InputGroup
                  label={contactTexts.form.fields.message.label}
                  placeholder={contactTexts.form.fields.message.placeholder}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  textarea
                  rows={5}
                  type="text"
                />

                {successMessage && (
                  <p className="text-green-400 font-medium">
                    {contactTexts.form.successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="text-red-500 font-medium">
                    {contactTexts.form.errorMessage}
                  </p>
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
                  {loading
                    ? contactTexts.form.submitButton.loading
                    : contactTexts.form.submitButton.default}
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
