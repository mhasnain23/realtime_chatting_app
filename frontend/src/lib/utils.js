export const formatMessageTime = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();

  // Check if the date is today
  const isToday = date.toDateString() === now.toDateString();

  // Format the time
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours % 12 || 12}:${minutes
    .toString()
    .padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;

  // If today, return only the time
  if (isToday) {
    return formattedTime;
  }

  // Otherwise, include the date
  const options = { month: "short", day: "numeric" }; // Customize to your locale if needed
  const formattedDate = date.toLocaleDateString(undefined, options);
  return `${formattedDate} at ${formattedTime}`;
};

// Example Usage
const messageTime = formatMessageTime(new Date().getTime());
console.log(messageTime); // e.g., "Nov 30 at 3:45 PM" or "3:45 PM" if it's today
