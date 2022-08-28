import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    formName: "",
    formEmail: "",
    formTitle: "",
    formDescription: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="formName">Full Name</label>
        <input
          placeholder="e.g. Marjorie J. Dickey"
          type="text"
          name="formName"
          onChange={handleChange}
          value={formData.formName}
        />
        <label htmlFor="formEmail">Email</label>
        <input
          placeholder="e.g. marjorie_dickey@mail.com"
          type="email"
          name="formEmail"
          onChange={handleChange}
          value={formData.formEmail}
        />
        <label htmlFor="formTitle">Title</label>
        <input
          placeholder="e.g. Product Manager"
          type="text"
          name="formTitle"
          onChange={handleChange}
          value={formData.formTitle}
        />
        <label htmlFor="formDescription">Description</label>
        <textarea
          placeholder="Please explain in detail"
          name="formDescription"
          onChange={handleChange}
          value={formData.formDescription}
        />
        <button>Submit</button>
      </form>
      <div className="form-info">
        We value your secrecy. Your name and email will not be shared.
      </div>
    </div>
  );
}
