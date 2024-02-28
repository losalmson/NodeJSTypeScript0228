// import express from "express";
// import type { Express } from "express"; 
// Anses vara best practice eg. men vi kan skriva som nedan ...
// const port: Number = 3000
// const app: Express = express();

import express, { Express, Request, Response } from "express"; // Här importerar vi typerna Request och Response också, så vi kan använda de nedan!
import  { Message, getAllMessages } from "./models/message";
import dotenv from "dotenv";
import { initializeDatabase, sequelize} from "./database/db";
 
dotenv.config();
 
const app: Express = express(); // OBS. Vi säger vad detta är för datatyp!
const port = process.env.PORT || 3001;
 
app.get("/test", (req: Request, res: Response) => { // Ange datatyp
    res.json(getAllMessages());
  });
  
 
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
 
app.listen(port, async () => {
  await initializeDatabase();
  //await sequelize.sync(); //vi gör denna en gång för att dropa vår tabell och create table i databasen, men sen kommenterar vi bort den!
  console.log(`[server]: Server is running at http://localhost:${port}`);
}); 