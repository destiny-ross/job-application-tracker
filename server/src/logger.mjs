import pinoLogger from "pino";
import path from "path";
const __dirname = path.resolve();

const levels = {
  emerg: 80,
  alert: 70,
  crit: 60,
  error: 50,
  warn: 40,
  notice: 30,
  info: 20,
  debug: 10,
};

const streams = [
  { stream: process.stdout },
  { level: "error", stream: process.stderr },
  ...Object.keys(levels).map((level) => {
    return {
      level: level,
      stream: pinoLogger.destination(`${__dirname}/logs/app-${level}.log`),
    };
  }),
];

export default pinoLogger(
  {
    level: process.env.PINO_LOG_LEVEL || "info",
    customLevels: levels,
    base: undefined,
    useOnlyCustomLevels: true,
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true, // colorizes the log
        levelFirst: true,
        translateTime: "yyyy-dd-mm, h:MM:ss TT",
      },
    },
    formatters: {
      level: (label) => {
        return { level: label };
      },
    },
  },

  pinoLogger.multistream(streams, {
    levels,
    dedupe: true,
  })
);
