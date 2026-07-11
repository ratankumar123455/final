/**
 * Thin abstraction over a WhatsApp Business API provider (Gupshup, Twilio, WATI, ...).
 * With no WHATSAPP_API_URL/WHATSAPP_API_KEY set, messages are logged instead of sent,
 * so the app runs end-to-end before you've signed up for a provider.
 * Wire up the real payload shape for your chosen provider before going live.
 */
export async function sendWhatsAppMessage(to: string, message: string): Promise<{ mocked: boolean }> {
  const apiUrl = process.env.WHATSAPP_API_URL;
  const apiKey = process.env.WHATSAPP_API_KEY;

  if (!apiUrl || !apiKey) {
    console.log(`[WhatsApp:MOCK] To ${to}: ${message}`);
    return { mocked: true };
  }

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ to, message }),
  });

  if (!res.ok) {
    throw new Error(`WhatsApp send failed: ${res.status} ${await res.text()}`);
  }

  return { mocked: false };
}

export function reminderMessage(shopName: string, customerName: string, balance: number): string {
  return `Namaste ${customerName}, ${shopName} की taraf se yaad dilana hai ki aapka ₹${balance.toFixed(
    2,
  )} udhaar baaki hai. Kripya jald bhugtan karein. Dhanyawad!`;
}
