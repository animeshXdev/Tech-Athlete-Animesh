import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        "service_03jkwcc",
        "template_9tz7zwa",
        {
          name: data.name,
          email: data.email,
          phone: data.phone || "N/A",
          message: data.message,
        },
        "BaFswMHyviXUIlHws"
      );

      toast.success("Message sent successfully!");
      reset();
    } catch {
      toast.error("Failed to send message.");
    }
  };

  return (
    <>
      <section className="max-w-7xl mx-auto p-6">
        <Toaster position="top-right" reverseOrder={false} />

        <div className="flex flex-col md:flex-row md:gap-10 h-[700px]">
          {/* Left side: form + follow me icons below */}
          <motion.div
            className="flex flex-col flex-1 bg-white shadow-lg rounded-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 flex-grow"
            >
              <h2 className="text-3xl font-semibold mb-6 text-primary">
                Contact Me
              </h2>

              <input
                {...register("name")}
                placeholder="Name"
                className="input input-bordered w-full"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

              <input
                {...register("email")}
                placeholder="Email"
                className="input input-bordered w-full"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <input
                {...register("phone")}
                placeholder="Phone (Optional)"
                className="input input-bordered w-full"
              />

              <textarea
                {...register("message")}
                placeholder="Message"
                className="textarea textarea-bordered w-full resize-none"
                rows={5}
              />
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}

              <motion.button
                type="submit"
                className="btn btn-primary mt-2"
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </motion.button>
            </form>

            {/* Follow me icons below form */}
            <div>
              <h1 className="text-3xl font-semibold text-primary">
                Follow me on...
              </h1>
            </div>
            <div className="flex gap-6 justify-center md:justify-start mt-8 text-3xl text-primary">
              <a
                href="https://youtube.com/@parkour_by_animesh?si=ZTEpZ5oYgpz1AS70"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-red-600 transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/active_animesh?utm_source=qr&igsh=bHE0aW5lemZzMGw0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/animesh.prakash.16"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-600 transition"
              >
                <FaFacebook />
              </a>
            </div>
          </motion.div>

          {/* Right side: Map only */}
          <motion.div
            className="flex-1 rounded-lg overflow-hidden shadow-lg h-[300px] md:h-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14393.356137883125!2d85.1067803037594!3d25.5936480416968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed581270368427%3A0xe526d92f4bacc843!2sGardanibagh%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1749374441545!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              className="h-full w-full"
              style={{ border: 0 }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
