export const WEDDING_DATE = new Date("2026-01-01T20:00:00");
// export const WEDDING_DATE = new Date("2025-12-04T00:00:00");
export const ANIMATION_START_DATE = new Date("2025-12-01T00:00:00");

export const FORMATTED_WEDDING_DATE = WEDDING_DATE.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
