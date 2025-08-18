import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default function ActionsDemoPage() {
  async function setMessage(formData: FormData) {
    "use server";
    const message = String(formData.get("message") || "").slice(0, 200);
    cookies().set("demo-message", message, { path: "/", httpOnly: true });
    revalidatePath("/actions");
  }

  const currentMessage = cookies().get("demo-message")?.value ?? "—";

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <h1>Server Actions</h1>
      <p>Текущее сообщение (cookie): <strong>{currentMessage}</strong></p>
      <form action={setMessage} style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          name="message"
          placeholder="Введите сообщение"
          required
          style={{ padding: 8, borderRadius: 8 }}
        />
        <button type="submit">Сохранить</button>
      </form>
    </main>
  );
}


