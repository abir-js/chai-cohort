import { useEffect, useState } from "react";
import { useContactform } from "./hooks/useContactForm";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { loading, submitContact, successMessage, errorMessage } =
    useContactform();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      ConractForm
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name here"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email here"
        />
        <textarea
          name="messge"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message here"
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "sending..." : "Send"}
        </button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
