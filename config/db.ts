import mongoose from "mongoose";
import config from "config";

async function con() {

    const dbUrl = config.get<string>("dbUrl");

    try {
        await mongoose.connect(dbUrl);
        console.log("Conectou ao db");

    } catch (error) {
        console.log("Não foi possível conectar");
        console.log(`erro ${error}`);
    }
    
}

export default con