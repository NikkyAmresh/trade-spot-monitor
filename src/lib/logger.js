const logger = {
  debug: (...arg) => {
    console.debug(new Date().toISOString(), "DEBUG", ...arg);
  },
  info: (...arg) => {
    console.info(new Date().toISOString(), "INFO", ...arg);
  },
  warn: (...arg) => {
    console.warn(new Date().toISOString(), "WARN", ...arg);
  },
  error: (...arg) => {
    console.error(new Date().toISOString(), "ERROR", ...arg);
  },
};

export default logger;
