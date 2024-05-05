import contact from "../../utils/contact.svg";
import { useState } from "react";

const Contact = () => {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <div className="flex items-center justify-center gap-20 ">
      <div className="w-[27rem]">
        <img src={contact} className="w-full" />
      </div>
      <div>
        <div className="flex flex-col justify-center items-center my-4">
          <div className="">
            <h2 className="my-7 text-center text-4xl font-bold font-sans">
              Contact Us
            </h2>
            <p className="my-8 text-center max-w-lg text-gray-500">
              We&apos;re here to help with any questions about our App.{" "}
              <br></br>
              Reach out and let us know how we can assist you.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 ">
            <input
              type="email"
              placeholder="Your email address"
              className="w-[30rem] p-4  rounded-lg text-neutral-500 border-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <textarea
              rows={7}
              className="w-[30rem] p-4  text-neutral-400 rounded-lg border-2"
              placeholder="Your message"
              onChange={(e) => setMsg(e.target.value)}
            >
              {msg}
            </textarea>
            <button className="mt-5 px-4 py-2 self-start text-white bg-neutral-500 rounded-lg">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
