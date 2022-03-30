import bunyan from "bunyan";
const log = bunyan.createLogger({ name: "myapp" });

const logger = {
  debug: (...arg) => {
    log.debug(new Date().toISOString(), "DEBUG", ...arg);
  },
  info: (...arg) => {
    log.info(new Date().toISOString(), "INFO", ...arg);
  },
  warn: (...arg) => {
    log.warn(new Date().toISOString(), "WARN", ...arg);
  },
  error: (...arg) => {
    log.error(new Date().toISOString(), "ERROR", ...arg);
  },
};

export default logger;
