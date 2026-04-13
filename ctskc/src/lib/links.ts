export const CLUB_PHONE_DISPLAY = "020 8524 1548";
export const CLUB_PHONE_E164 = "442085241548";
export const CLUB_EMAIL = "info@ctskc.co.uk";

export function waLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${CLUB_PHONE_E164}?text=${text}`;
}

export function telLink() {
  return `tel:+${CLUB_PHONE_E164}`;
}

export function mailtoLink(subject?: string) {
  const s = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${CLUB_EMAIL}${s}`;
}

