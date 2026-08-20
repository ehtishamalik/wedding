export const WEDDING_DATE = new Date(2026, 11, 12); // December 12, 2026 (month is 0-indexed)
export const ANIMATION_START_DATE = new Date(2026, 7, 20);

export const FORMATTED_WEDDING_DATE = WEDDING_DATE.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
