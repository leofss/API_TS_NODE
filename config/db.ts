import mongoose from "mongoose";
import config from "config";
//Logger
import Logger from "./logger"

async function con() {

    const dbUrl = config.get<string>("dbUrl");

    try {
        await mongoose.connect(dbUrl);
        Logger.info("Conectou ao db");

    } catch (error) {
        Logger.error("Não foi possível conectar");
        Logger.error(`erro ${error}`);
        process.exit(1)
    }
    
}

export default con