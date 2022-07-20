import { model, Schema } from "mongoose";

const MovieSch = new Schema(
    {
        title: {type: String},
        rating: {type: Number},
        desc: {type: String},
        director: {type: String},
        stars: {type: Array},
        poster: {type: String} 
    },
    {
        timestamps: true,
    }
)

export const MovieModel = model("Movie", MovieSch);