// export const convertTIme = (time) => {
//   const timeParts = time.split(":");
//   let hours = parseInt(timeParts[0]);
//   const minutes = parseInt(timeParts[1]);

//   let meridiem = "am";

//   if (hours >= 12) {
//     meridiem = "pm";

//     if (hours > 12) {
//       hours -= 12;
//     }
//   }
//   return (
//     hours.toString().padStart(2) +
//     ":" +
//     minutes.toString().padStart(2, "0") +
//     " " +
//     meridiem
//   );
// };

const convertTime = (timeString) => {
  if (!timeString) return ""; // Handle empty values

  const [hours, minutes] = timeString.split(":").map(Number);
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM case

  return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
};

export default convertTime;
