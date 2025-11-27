import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_ydgdg3f";
const EMAILJS_TEMPLATE_ID = "template_iiaun2f";
const EMAILJS_PUBLIC_KEY = "ggW0b2eLK2EmzHHPK";

export const ZAID_EMAIL = "izaid.dev@gmail.com";
export const YAKSHI_EMAIL = "yakshigupta01@gmail.com";

/**
 * Sends an email using EmailJS service
 * * @param {Object} templateParams - Parameters for the email template
 * @returns {Promise<void>} Promise representing the email sending operation
 */

export async function sendEmail(messageParams) {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      messageParams,
      EMAILJS_PUBLIC_KEY
    );
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw new Error("Failed to send email.");
  }
}
