"use server";

export async function startChatAction(prevState: any, formData: FormData) {
  const message = formData.get("message");
  console.log(message);
  return {
    success: false,
  };
}
