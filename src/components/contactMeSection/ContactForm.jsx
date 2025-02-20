import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const form = useRef();
  function handleName(event) {
    setName(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handleMessage(event) {
    setMessage(event.target.value);
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      SERVICE_ID,
       TEMPLATE_ID, 
       form.current, {
        publicKey: PUBLIC_KEY,
      }).then(() => {
          console.log("SUCCESS!");
          setName('')
          setEmail('')
          setMessage('')
          setSuccess('Message sent!')
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }
  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form
        className="flex flex-col gap-4 text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="your name"
          value={name}
          onChange={handleName}
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <input
          name="from_email"
          type="email"
          placeholder="your email"
          value={email}
          onChange={handleEmail}
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <textarea
          name="message"
          type="text"
          placeholder="your message"
          value={message}
          onChange={handleMessage}
          rows="9"
          cols="50"
          required
          className=" rounded-lg bg-lightBrown p-2"
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
