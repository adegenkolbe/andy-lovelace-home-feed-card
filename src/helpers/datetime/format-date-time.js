import fecha from "fecha";

// Check for support of native locale string options
function toLocaleStringSupportsOptions() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}

export const formatDateTime = (toLocaleStringSupportsOptions()
  ? (dateObj, locales) =>
      dateObj.toLocaleString(locales, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
  : (dateObj) => fecha.format(dateObj, "haDateTime"));
