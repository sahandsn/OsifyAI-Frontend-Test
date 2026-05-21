import winston from "winston";
import { format } from "date-fns";
import { tz } from "@date-fns/tz";
import { env } from "@/env";

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format() {
        return format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS", {
          in: tz(env.NEXT_PUBLIC_DEFAULT_Timezone),
        });
      },
    }),
    winston.format.errors({ stack: true }),
    winston.format.prettyPrint(),
  ),
  transports: [
    new winston.transports.File({
      filename: "logs/server.log",
      eol: "\n\n",
    }),
  ],
});
