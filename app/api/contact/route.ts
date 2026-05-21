import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  budget?: string;
  company?: string;
  contact?: string;
  details?: string;
  email?: string;
  form?: string;
  idea?: string;
  lang?: string;
  name?: string;
  projectType?: string;
};

const defaultToEmail = "hello@notagency.io";
const defaultSmtpHost = "mail.privateemail.com";
const defaultSmtpPort = 587;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 4000) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function findReplyEmail(payload: ContactPayload) {
  const directEmail = clean(payload.email);

  if (emailPattern.test(directEmail)) {
    return directEmail;
  }

  const contact = clean(payload.contact);
  const match = contact.match(/[^\s@]+@[^\s@]+\.[^\s@]+/);

  return match?.[0];
}

function buildRows(payload: ContactPayload) {
  return [
    ["Имя", clean(payload.name)],
    ["Email", clean(payload.email)],
    ["Контакт", clean(payload.contact)],
    ["Компания / проект", clean(payload.company)],
    ["Тип проекта", clean(payload.projectType)],
    ["Бюджет", clean(payload.budget)],
    ["Идея", clean(payload.idea)],
    ["Детали", clean(payload.details)],
  ].filter(([, value]) => value);
}

function buildMessage(payload: ContactPayload) {
  const rows = buildRows(payload);

  return rows.map(([label, value]) => `${label}: ${value}`).join("\n\n");
}

function buildHtmlMessage(payload: ContactPayload) {
  const rows = buildRows(payload);
  const form = clean(payload.form);
  const title = "Новый клиент";
  const preheader =
    form === "brief"
      ? "Новый бриф с сайта notagency.io."
      : "Новая заявка с сайта notagency.io.";
  const primaryMessage = clean(payload.details) || clean(payload.idea);

  const rowsHtml = rows
    .map(
      ([label, value], index) => `
        <tr>
          <td style="padding: 0 0 12px 0;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border: 2px solid #111116; border-collapse: separate; border-radius: 8px; overflow: hidden; box-shadow: 5px 5px 0 ${index % 3 === 0 ? "#ff2f8b" : index % 3 === 1 ? "#00d9ff" : "#d8ff38"};">
              <tr>
                <td style="background: #111116; color: #ffffff; font-family: Arial, sans-serif; font-size: 11px; font-weight: 800; letter-spacing: 0.08em; padding: 9px 12px; text-transform: uppercase;">
                  ${escapeHtml(label)}
                </td>
              </tr>
              <tr>
                <td style="background: #ffffff; color: #111116; font-family: Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 1.45; padding: 13px 12px; white-space: pre-line;">
                  ${escapeHtml(value)}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      `,
    )
    .join("");

  return `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin: 0; padding: 0; background: #f8f3e7;">
    <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
      ${escapeHtml(preheader)}
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #f8f3e7; border-collapse: collapse;">
      <tr>
        <td align="center" style="padding: 28px 14px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse; max-width: 680px;">
            <tr>
              <td style="background: #f8f3e7; border: 3px solid #ffffff; border-radius: 10px; box-shadow: 10px 10px 0 #ff2f8b; overflow: hidden;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                  <tr>
                    <td style="background: #111116; border-bottom: 3px solid #ffffff; padding: 14px 18px;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                          <td style="color: #d8ff38; font-family: Arial, sans-serif; font-size: 13px; font-weight: 900; letter-spacing: 0.12em; text-transform: uppercase;">
                            NotAgency / Заявка
                          </td>
                          <td align="right" style="color: #ffffff; font-family: Arial, sans-serif; font-size: 12px; font-weight: 700;">
                            notagency.io
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 26px 20px 14px 20px;">
                      <div style="display: inline-block; background: #00d9ff; border: 2px solid #111116; border-radius: 999px; box-shadow: 4px 4px 0 #111116; color: #111116; font-family: Arial, sans-serif; font-size: 12px; font-weight: 900; letter-spacing: 0.08em; line-height: 1; margin-bottom: 16px; padding: 9px 13px; text-transform: uppercase; vertical-align: middle;">
                        ${form === "brief" ? "бриф" : "заявка"} <span style="color: #111116; font-size: 13px; line-height: 1;">★</span>
                      </div>
                      <h1 style="color: #111116; font-family: Impact, Arial Black, Arial, sans-serif; font-size: 42px; letter-spacing: 0; line-height: 0.98; margin: 0 0 12px 0; text-transform: uppercase;">
                        ${escapeHtml(title)}
                      </h1>
                      <p style="color: rgba(8, 8, 8, 0.74); font-family: Arial, sans-serif; font-size: 17px; font-weight: 700; line-height: 1.45; margin: 0;">
                        ${escapeHtml(primaryMessage || preheader)}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 20px 24px 20px;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                        ${rowsHtml}
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="background: #d8ff38; border-top: 3px solid #111116; color: #111116; font-family: Arial, sans-serif; font-size: 13px; font-weight: 800; line-height: 1.4; padding: 14px 20px;">
                      Если клиент оставил email, можно ответить прямо на это письмо.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const contact = clean(payload.contact);
  const message = clean(payload.idea) || clean(payload.details);

  if (!name || (!email && !contact) || !message) {
    return NextResponse.json(
      { error: "Name, contact and message are required." },
      { status: 400 },
    );
  }

  if (email && !emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER ?? defaultToEmail;
  const smtpPass = process.env.EMAIL_PASSWORD;

  if (!smtpPass) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? defaultToEmail;
  const from = process.env.CONTACT_FROM_EMAIL ?? `NotAgency <${defaultToEmail}>`;
  const smtpHost = process.env.SMTP_HOST ?? defaultSmtpHost;
  const smtpPort = Number(process.env.SMTP_PORT ?? defaultSmtpPort);
  const subject =
    clean(payload.form) === "brief"
      ? "Новый клиент: бриф с notagency.io"
      : "Новый клиент: заявка с notagency.io";
  const text = buildMessage(payload);
  const html = buildHtmlMessage(payload);
  const replyTo = findReplyEmail(payload);

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      ...(replyTo ? { replyTo } : {}),
    });
  } catch {
    return NextResponse.json(
      { error: "Email service rejected the message." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
