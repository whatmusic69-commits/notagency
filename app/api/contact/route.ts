import { NextResponse } from "next/server";

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

const defaultToEmail = "hello@notagency.dev";
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
    ["Form", clean(payload.form)],
    ["Language", clean(payload.lang)],
    ["Name", clean(payload.name)],
    ["Email", clean(payload.email)],
    ["Contact", clean(payload.contact)],
    ["Company / project", clean(payload.company)],
    ["Project type", clean(payload.projectType)],
    ["Budget", clean(payload.budget)],
    ["Idea", clean(payload.idea)],
    ["Details", clean(payload.details)],
  ].filter(([, value]) => value);
}

function buildMessage(payload: ContactPayload) {
  const rows = buildRows(payload);

  return rows.map(([label, value]) => `${label}: ${value}`).join("\n\n");
}

function buildHtmlMessage(payload: ContactPayload) {
  const rows = buildRows(payload);
  const form = clean(payload.form);
  const title =
    form === "brief" ? "New Project Brief" : "New Contact Request";
  const preheader =
    form === "brief"
      ? "A new brief was submitted through notagency.dev."
      : "A new request was submitted through notagency.dev.";
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
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin: 0; padding: 0; background: #080808;">
    <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
      ${escapeHtml(preheader)}
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #080808; border-collapse: collapse;">
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
                            NotAgency / Inbox
                          </td>
                          <td align="right" style="color: #ffffff; font-family: Arial, sans-serif; font-size: 12px; font-weight: 700;">
                            notagency.dev
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 26px 20px 14px 20px;">
                      <div style="display: inline-block; background: #00d9ff; border: 2px solid #111116; border-radius: 999px; box-shadow: 4px 4px 0 #111116; color: #111116; font-family: Arial, sans-serif; font-size: 12px; font-weight: 900; letter-spacing: 0.08em; margin-bottom: 16px; padding: 8px 12px; text-transform: uppercase;">
                        ${escapeHtml(form || "contact")}
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
                      Reply directly from this email if the sender provided a valid email address.
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

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? defaultToEmail;
  const from = process.env.CONTACT_FROM_EMAIL ?? `NotAgency <${defaultToEmail}>`;
  const subject =
    clean(payload.form) === "brief"
      ? "New project brief from notagency.dev"
      : "New contact request from notagency.dev";
  const text = buildMessage(payload);
  const html = buildHtmlMessage(payload);
  const replyTo = findReplyEmail(payload);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Email service rejected the message." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
