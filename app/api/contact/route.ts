import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;
  if (!formLink) {
    return new NextResponse("Please configure the env variables", {
      status: 500,
    });
  }

  // configure this according to your google form
  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  try {
    const body = await req.json();
    const { name, message, social, email } = body;

    // Encode the values properly
    const params = new URLSearchParams();
    params.append(fieldIdName!, encodeURIComponent(name));
    params.append(fieldIdEmail!, encodeURIComponent(email));
    params.append(fieldIdMessage!, encodeURIComponent(message));
    if (social) {
      params.append(fieldIdSocial!, encodeURIComponent(social));
    }

    const url = `${formLink}?${params.toString()}`;

    const res = await fetch(url, {
      method: "POST",
      mode: "no-cors",
    });

    return NextResponse.json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
