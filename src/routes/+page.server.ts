import type { Actions } from "./$types"
import validator from "validator"
import { fail } from "@sveltejs/kit"
import { Resend } from "resend"
import {
  RECEIPT_EMAIL,
  RESEND_API_KEY,
  SENDER_EMAIL,
} from "$env/static/private"

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const name = data.get("name") as string
    const email = data.get("email") as string
    const company = data.get("company") as string
    const projectDesc = data.get("projectDesc") as string
    const url = data.get("url") as string
    const webTechnology = data.get("webTechnology") as string
    const websiteOptions = data.get("websiteOptions") as string

    // validate
    let hasError = false
    const errorObject: {
      name?: string
      email?: string
      projectDesc?: string
      websiteOptions?: string
      url?: string
    } = {}
    if (!validator.isEmail(email)) {
      hasError = true
      errorObject.email = "invalid email"
    }

    if (validator.isEmpty(name)) {
      hasError = true
      errorObject.name = "name cannot be empty"
    }

    if (validator.isEmpty(projectDesc)) {
      hasError = true
      errorObject.projectDesc = "projectDesc cannot be empty"
    }

    if (validator.isEmpty(websiteOptions)) {
      hasError = true
      errorObject.websiteOptions = "select a website option"
    }
    if (data.get("websiteOptions") === "Maintenance") {
      if (validator.isEmpty(url)) {
        hasError = true
        errorObject.url = "website url cannot be empty if Maintenance request."
      }
      if (validator.isEmpty(webTechnology)) {
        hasError = true
        errorObject.websiteOptions = "select a website option"
      }
    }

    const resend = new Resend(RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: [RECEIPT_EMAIL],
      subject: `Freelance message from ${name} ${
        company ? `- ${company}` : ""
      }`,
      html: `<div>Company: </div>
      <div>${company}</div>
      <div>Email From: ${email}</div>
      <div>Message:</div>
      <div>${projectDesc}</div>
      <div>New or Maintaining old site? ${websiteOptions}</div>
      <div></div>
      ${url ? `<div>Website URL</div><div>${url}</div>` : ""}
      ${
        webTechnology
          ? `<div>Website Technologies</div><div>${webTechnology}</div>`
          : ""
      }
      `,
    })
    console.log(error)
    if (hasError) {
      return fail(400, errorObject)
    }
    return { status: "success" }
  },
} satisfies Actions
