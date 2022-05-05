import express from "express";
import products from "./routes/products";
import cart from "./routes/cart";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/carritos", cart);
app.use("/api/productos", products);

app.listen(port, () => {
  console.log(`"server is running on port ${port}`);
});
