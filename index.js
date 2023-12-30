import app from "./app.js";
import {PORT} from './config.js';
import connectionDB from "./db.js";


connectionDB()
app.listen(PORT, () => {
  console.log("listening in port ,",PORT);
});
