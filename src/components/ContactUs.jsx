import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import ContactBackground from "../assets/contact-bg.png";
// import ContactInner from "../assets/contact-inner-bg.png";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7x474ya",
        "template_1eyu3r9",
        form.current,
        "BkgWK_iu71bItsPix"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      name="contact"
      className="w-full bg-cover bg-center p-16 grid place-items-center"
      style={{
        backgroundImage: `url(${ContactBackground})`,
      }}
    >
      <div className="mb-12 mt-[68px] text-center">
        <h1 className="text-white">CONTACT US</h1>
        <h2 className="text-[36px] text-white font-medium [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-black">
          Have some questions?
        </h2>
      </div>
      <div className="bg-white xl:w-[1060px] xs:w-[250px] sm:w-[450px] md:w-[650px] lg:w-[950px] h-[480px] rounded-3xl mt-[-20px] lg:grid lg:grid-cols-2">
        <div
          className="bg-no-repeat bg-left-bottom rounded-3xl xs:bg-none sm:bg-none 
          md:bg-none lg:bg-[url('assets/contact-inner-bg.png')]"
          // style={{
          //   backgroundImage: `url(${ContactInner})`,
          // }}
        ></div>
        <div className="">
          <div className="p-4">
            <h2 className="mb-4 p-2 text-3xl font-semibold text-strongpink">
              Get in touch!
            </h2>
          </div>
          <div className="lg:mr-8">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col p-4 mt-[-45px]"
            >
              <input
                className="p-3 m-2 border outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                type="text"
                name="user_name"
                required
              />
              <input
                className="p-3 m-2 border outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                name="user_email"
                required
              />
              <textarea
                className="p-3 m-2 border outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                name="message"
                rows="6"
                required
              />
              <input
                className="p-2 m-2 my-4 w-fit rounded-xl bg-yellow border"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
