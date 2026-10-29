import { useState } from "react";
import emailjs from "@emailjs/browser";
import { socials, socialIcons } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { personal, t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = language === "id" ? "Nama wajib diisi" : "Please fill in your name";
    }
    if (!formData.email.trim()) {
      errs.email = language === "id" ? "Email wajib diisi" : "Please fill in your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = language === "id" ? "Format email tidak valid" : "Invalid email format";
    }
    if (!formData.message.trim()) {
      errs.message = language === "id" ? "Pesan wajib diisi" : "Please enter your message";
    } else if (formData.message.trim().length < 5) {
      errs.message = language === "id" ? "Pesan minimal 5 karakter" : "Message must be at least 5 characters";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");
    setErrorMessage("");

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_wcscnvt";
    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_qo2wwqt";
    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "sUDkzcNxCbr8YEpgP";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          from_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          reply_to: formData.email,
          user_email: formData.email,
          time: new Date().toLocaleString(language === "id" ? "id-ID" : "en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
          message: formData.message,
          to_name: personal.name,
          title: `Pesan Baru dari ${formData.name}`,
        },
        publicKey
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMessage(
        err?.text || (language === "id" ? "Gagal mengirim pesan. Silakan coba lagi." : "Failed to send message. Please try again.")
      );
    }
  };

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mb-8 sm:mb-12 md:mb-16 scroll-mt-28" id="contact">
      <div className="mb-8 reveal-pop">
        <h2 className="font-headline-md text-headline-md text-onepiece-dark bg-onepiece-gold border-4 border-onepiece-dark px-4 py-2 inline-block w-fit shadow-[4px_4px_0px_0px_#111827] uppercase select-none">
          {t("contact.badge")}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left side */}
        <div className="reveal-left delay-100">
          <h3 className="font-adventure text-2xl sm:text-3xl md:text-[32px] text-onepiece-dark uppercase mb-3 leading-tight font-black">
            {language === "id" ? (
              <>
                MARI MEMBANGUN SESUATU
                <br />
                <span className="text-onepiece-red font-adventure font-black text-2xl sm:text-3xl md:text-4xl tracking-wide">
                  YANG LUAR BIASA.
                </span>
              </>
            ) : (
              <>
                LET'S TURN IDEAS
                <br />
                <span className="text-onepiece-red font-adventure font-black text-2xl sm:text-3xl md:text-4xl tracking-wide">
                  INTO REALITY.
                </span>
              </>
            )}
          </h3>

          <p className="font-body-lg text-on-surface mb-6 text-body-lg leading-relaxed">
            {t("contact.subtitle")}
          </p>

          {/* Hire Me Direct Gmail Action Button */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
              personal.email
            )}&su=${encodeURIComponent(
              `Opportunity / Collaboration for ${personal.name}`
            )}&body=${encodeURIComponent(
              "Hi Aminuddin,\n\nI saw your portfolio and would love to connect with you regarding..."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 py-2.5 sm:px-5 sm:py-3.5 mb-6 sm:mb-8 relative select-none cursor-pointer group bg-onepiece-gold text-onepiece-dark border-3 border-onepiece-dark pirate-btn shadow-[4px_4px_0px_0px_#111827] max-w-full"
            title="Click to send email directly via Gmail"
          >
            <span className="font-adventure text-xs sm:text-sm md:text-base font-black uppercase tracking-wide truncate">
              {language === "id" ? "REKRUT SAYA UNTUK BUKA POTENSI SAYA" : "HIRE ME TO UNLOCK MY POTENTIAL"}
            </span>
            <span className="material-symbols-outlined text-on-surface text-[18px] group-hover:translate-x-1 transition-transform flex-shrink-0">
              arrow_forward
            </span>
          </a>

          <div className="flex flex-wrap gap-2.5 sm:gap-4">
            {socials.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <a
                  key={social.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 inline-flex items-center justify-center rounded-xl cursor-pointer group transition-all bg-[#FFFDF8] text-onepiece-dark border-3 border-onepiece-dark shadow-[3px_3px_0px_0px_#111827] sm:shadow-[4px_4px_0px_0px_#111827] hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_#111827]"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  {Icon && (
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-on-surface group-hover:scale-110 transition-transform" />
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-5 sm:p-7 md:p-8 relative reveal-right delay-200 wanted-card bg-[#FFFDF8]">
          {status === "success" ? (
            <div className="pt-6 pb-4 flex flex-col items-center text-center gap-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-onepiece-gold border-3 border-onepiece-dark shadow-[3px_3px_0px_0px_#111827]">
                <span className="material-symbols-outlined text-[32px]">
                  check_circle
                </span>
              </div>
              <h4 className="uppercase text-xl font-adventure font-black text-onepiece-dark">
                {language === "id" ? "PESAN BERHASIL TERKIRIM!" : "MESSAGE SENT SUCCESSFULLY!"}
              </h4>
              <p className="font-body-md text-on-surface-variant max-w-sm text-sm">
                {t("contact.form.successMsg")}
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 px-6 py-2.5 uppercase cursor-pointer bg-onepiece-red text-white font-adventure text-xs font-black pirate-btn"
              >
                {language === "id" ? "KIRIM PESAN LAIN" : "SEND ANOTHER MESSAGE"}
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5 pt-2">
              {status === "error" && (
                <div className="p-3 bg-red-100 border-3 border-primary text-primary text-xs font-bold font-adventure flex items-center gap-2 shadow-[3px_3px_0px_0px_#ba1a1a] animate-shake">
                  <span className="material-symbols-outlined text-[18px]">
                    error
                  </span>
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label
                    className="font-bold uppercase text-xs font-adventure text-onepiece-dark"
                    htmlFor="name"
                  >
                    {t("contact.form.nameLabel")}
                  </label>
                  {errors.name && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-red-100 text-primary border-2 border-primary font-adventure text-[10px] font-bold uppercase shadow-[2px_2px_0px_0px_#ba1a1a] animate-fadeIn select-none">
                      <span className="material-symbols-outlined text-[13px]">error</span>
                      {errors.name}
                    </span>
                  )}
                </div>
                <input
                  className={`border-3 p-3.5 font-body-md transition-all text-sm focus:outline-none focus:bg-white border-onepiece-dark bg-white shadow-[3px_3px_0px_0px_#111827] focus:border-onepiece-red ${errors.name
                    ? "border-primary bg-red-50/60 shadow-[3px_3px_0px_0px_#ba1a1a] animate-shake"
                    : ""
                    }`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.form.namePlaceholder")}
                  type="text"
                  autoComplete="name"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label
                    className="font-bold uppercase text-xs font-adventure text-onepiece-dark"
                    htmlFor="email"
                  >
                    {t("contact.form.emailLabel")}
                  </label>
                  {errors.email && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-red-100 text-primary border-2 border-primary font-adventure text-[10px] font-bold uppercase shadow-[2px_2px_0px_0px_#ba1a1a] animate-fadeIn select-none">
                      <span className="material-symbols-outlined text-[13px]">error</span>
                      {errors.email}
                    </span>
                  )}
                </div>
                <input
                  className={`border-3 p-3.5 font-body-md transition-all text-sm focus:outline-none focus:bg-white border-onepiece-dark bg-white shadow-[3px_3px_0px_0px_#111827] focus:border-onepiece-red ${errors.email
                    ? "border-primary bg-red-50/60 shadow-[3px_3px_0px_0px_#ba1a1a] animate-shake"
                    : ""
                    }`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.form.emailPlaceholder")}
                  type="text"
                  autoComplete="email"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label
                    className="font-bold uppercase text-xs font-adventure text-onepiece-dark"
                    htmlFor="message"
                  >
                    {t("contact.form.messageLabel")}
                  </label>
                  {errors.message && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-red-100 text-primary border-2 border-primary font-adventure text-[10px] font-bold uppercase shadow-[2px_2px_0px_0px_#ba1a1a] animate-fadeIn select-none">
                      <span className="material-symbols-outlined text-[13px]">error</span>
                      {errors.message}
                    </span>
                  )}
                </div>
                <textarea
                  className={`border-3 p-3.5 font-body-md transition-all min-h-[120px] text-sm focus:outline-none focus:bg-white border-onepiece-dark bg-white shadow-[3px_3px_0px_0px_#111827] focus:border-onepiece-red ${errors.message
                    ? "border-primary bg-red-50/60 shadow-[3px_3px_0px_0px_#ba1a1a] animate-shake"
                    : ""
                    }`}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>

              <button
                className="inline-flex items-center justify-center gap-2 px-6 py-4 uppercase relative mt-2 w-full cursor-pointer disabled:opacity-50 bg-onepiece-red text-white font-adventure text-sm font-black pirate-btn shadow-[4px_4px_0px_0px_#111827]"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t("contact.form.sendingBtn")}
                  </>
                ) : (
                  <>
                    <span>{t("contact.form.sendBtn")}</span>
                    <span className="material-symbols-outlined text-[18px]">
                      send
                    </span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
