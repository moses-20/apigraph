import "dotenv/config";
import app from "app";

function notify(): void {
  console.log("SERVER IS UP");
}

app.listen(4000, notify);
