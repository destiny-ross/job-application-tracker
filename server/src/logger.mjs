import pinoms from "pino-multi-stream";
import fs from "fs";

const levels = {
  error: 50,
  info: 20,
  debug: 10,
};

var prettyStream = pinoms.prettyStream({
  prettyPrint: {
    colorize: true,
    translateTime: "SYS:standard",
    ignore: "hostname,pid", // add 'time' to remove timestamp
  },
});
var streams = [
  { stream: fs.createWriteStream("my.log") },
  { stream: prettyStream },
];

const logger = pinoms(pinoms.multistream(streams));

export default logger;
