import * as sendgrid from "sendgrid";
const helper = sendgrid.mail;
const sg = sendgrid(process.env.SENDGRID_API_KEY || "");

export function sendMail(
  to: string,
  from: string,
  subject: string,
  message: string
) {
  let toEmail = new helper.Email(to);
  let fromEmail = new helper.Email(from, "Covalence Group 3");
  let emailContent = new helper.Content("text/html", message);

  let mail = new helper.Mail(fromEmail, subject, toEmail, emailContent);
}
