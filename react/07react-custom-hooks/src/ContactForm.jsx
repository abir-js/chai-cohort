import { useState } from "react";
import { useContactForm } from "./hooks/useContactForm.js";
useContactForm;

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { loading, submitContact, successMessage, errorMessage } =
    useContactForm();

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      Contact Form
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name: "
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email: "
        />
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Your password: "
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message: "
        />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "send"}
        </button>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </>
  );
}

export default ContactForm;
