const DbUser = process.env.DB_USER;
const DbPass = process.env.DB_PASS;

export default{
    port: 3000,
    dbUrl : `mongodb+srv://${DbUser}:${DbPass}@cluster0.gr3erew.mongodb.net/?retryWrites=true&w=majority`
}