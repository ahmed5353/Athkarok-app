/**
 * Converts 24-hour time format to 12-hour format with AM/PM
 * @param time24h - Time in 24h format (HH:MM)
 * @returns Time in 12h format with AM/PM
 * @throws Error if time format is invalid
 */
export default function convertTo12h(time24h: string): string {
  // Validate input format
  const timeRegex = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
  if (!timeRegex.test(time24h)) {
    throw new Error(
      "Invalid time format. Please use HH:MM format (00:00-23:59)",
    );
  }

  const [hours, minutes] = time24h.split(":").map(Number);

  const period = hours < 12 ? "ص" : "م";

  // Convert hours
  let hours12 = hours % 12;
  hours12 = hours12 === 0 ? 12 : hours12; // Convert 0 to 12 for midnight/noon

  // Format minutes with leading zero
  const formattedHour = padWithZero(hours12);
  const formattedMinutes = padWithZero(minutes);

  return `${formattedHour}:${formattedMinutes} ${period}`;
}

// Format the time
function padWithZero(number: number): string {
  const formattedNumber = number.toString().padStart(2, "0");
  return formattedNumber;
}
