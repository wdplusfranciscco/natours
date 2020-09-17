const logDebugStamp = (fileName, message) => {
  const date = new Date();

  const localDate = date.toLocaleDateString('es-ES', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const localTime = date.toLocaleTimeString('es-ES', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  console.log(`${localDate} [ ${fileName} ] ${localTime} >>>   ⏰ ${message}`);
};

module.exports = logDebugStamp;
