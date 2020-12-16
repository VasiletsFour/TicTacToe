import * as bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import { app, server } from "./socket";

const createServer = () => {
    try {
        const port = 3000;

        app.use(cors());
        app.use(morgan("dev"));
        app.use(bodyParser.json());
        
        app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*"); 
            res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
            res.setHeader("Access-Control-Allow-Headers", "Content-Type, authorization, X-Requested-With");
            res.setHeader("Access-Control-Expose-Headers", "*");

            next();
        });

        app.use("/api/", (req, res)=>res.send('work'));

        server.listen(port, () => console.log(`Server run on port ${port}`));
    } catch (error) {
        console.log(error);
    }
};

createServer();
