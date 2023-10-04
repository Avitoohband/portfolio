"use client";

import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "@/components/SubmitButton";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import toast from "react-hot-toast"

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.75);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:Avitoohband@gmail.com">
          Avitoohband@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);       
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
      >
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your Email"
        />
        <textarea
          name="message"
          className="rounded-lg h-52 my-3 borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your Message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
