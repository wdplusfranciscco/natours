const logTimestamp = () => {
  var date = new Date();

  var localDate = date.toLocaleDateString("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  var localTime = date.toLocaleTimeString("es-ES", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.log(`${localDate} - ${localTime}`);
};

logTimestamp();
