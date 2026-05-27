export function randomDuration() {
  const minutes =
    Math.floor(Math.random() * 3) + 2;

  const seconds = String(
    Math.floor(Math.random() * 60)
  ).padStart(2, "0");

  return `${minutes}:${seconds}`;
}
