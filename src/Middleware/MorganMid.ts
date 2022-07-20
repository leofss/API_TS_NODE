import morgan, {StreamOptions} from "morgan";
import config from "config";
import Logger from "../../config/logger";

const stream : StreamOptions = {
    write: (message) => Logger.http(message)
};

const skip = () => {
    const env = config.get<string>("env") || "dev"
    return env !== "dev"
}

const MorganMid = morgan(
    ":method :url :status - :response-time ms",
    {stream, skip}
)

export default MorganMid