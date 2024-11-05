"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { supabase } from "@/services/supabase";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);

const Contact = ({ data }) => {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cooldown) return; // Spam engelleme

    // Form verilerini Supabase'e gönder
    await supabase.from("contacts").insert([{ ...formData }]);

    // Başarı mesajı göster
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setCooldown(true);

    // Cooldown süresi (örneğin, 30 saniye)
    setTimeout(() => setCooldown(false), 30000);

    // 5 saniye sonra başarı mesajını kaldır
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-3 w-full px-4 lg:w-7/12">
            <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
                {t("Contact.title")}
              </h3>
              <iframe
                src={data.address_iframe}
                width="100%"
                height="250"
                className="rounded-md border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <hr className="my-3" />
              <div className="mt-3 space-y-2 text-2xl">
                <div className="font-bold text-blue">
                  {t("Contact.address")}:{" "}
                  <span className="text-lg font-normal">{data.address}</span>
                </div>
                <div className="font-bold text-blue">
                  {t("Contact.phone")}:
                  <span className="text-lg font-normal">
                    <Link href={`tel:${data.phone}`}>{data.phone}</Link>
                  </span>
                </div>
                <div className="font-bold text-blue">
                  {t("Contact.mail")}:{" "}
                  <span className="text-lg font-normal">
                    <Link href={`mailto:${data.email}`}>{data.email}</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                {t("Contact.writeUs")}
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                {t("Contact.desc")}
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {t("Contact.name")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full rounded-sm bg-[#f8f8f8] px-6 py-3 text-base outline-none focus:border-primary dark:bg-[#2C303B]"
                      required
                    />
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {t("Contact.email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full rounded-sm bg-[#f8f8f8] px-6 py-3 text-base outline-none focus:border-primary dark:bg-[#2C303B]"
                      required
                    />
                  </div>
                  <div className="w-full px-4">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {t("Contact.message")}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Enter your Message"
                      className="w-full resize-none rounded-sm bg-[#f8f8f8] px-6 py-3 text-base outline-none focus:border-primary dark:bg-[#2C303B]"
                      required
                    ></textarea>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="w-full rounded-sm bg-primary px-9 py-4 text-base font-medium text-white hover:bg-primary/90"
                      disabled={cooldown}
                    >
                      {t("Contact.send")}
                    </button>
                    {isSubmitted && (
                      <p className="mt-4 text-green-500">
                        {t("Contact.success")}
                      </p>
                    )}
                    {cooldown && (
                      <p className="mt-4 text-red-500">{t("Contact.wait")}</p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
