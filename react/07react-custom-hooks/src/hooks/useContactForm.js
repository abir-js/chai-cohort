function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const submitContact = async (formData) => {
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "something error wrong");
      setSuccessMessage(data.success || "Message sent");
    } catch (error) {
      setErrorMessage(error.message || "Request Failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    errorMessage,
    successMessage,
    submitContact,
  };
}

export default useContactForm;
