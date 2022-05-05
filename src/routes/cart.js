import express from "express";
import Container from "../dataAccess/container";
import * as path from "path";
import { v4 as uuidv4 } from "uuid";

const { Router } = express;
const router = new Router();
const container = new Container(
  path.resolve(__dirname, "../data", "carts.json")
);

router.get("/", async (req, res) => {
  const carts = await container.getAll();
  res.json(carts);
});

router.get("/:id", async (req, res) => {
  const cart = await container.getById(req.params.id);
  if (cart) return res.send(cart);
  else res.status(404).json({ error: "carrito no encontrado" });
});

router.get("/:id/productos", async (req, res) => {
  const cart = await container.getById(req.params.id);
  if (cart) return res.send(cart.products);
  else res.status(404).json({ error: "carrito no encontrado" });
});

router.post("/", async (req, res) => {
  const cart = { id: uuidv4(), products: [] };
  await container.save(cart);

  res.status(201).json({ id: cart.id });
});

router.delete("/:id", async (req, res) => {
  const cart = await container.getById(req.params.id);

  if (!cart) res.status(404).json({ error: "carrito no encontrado" });

  container.deleteById(cart.id);

  res.send("carrito eliminado");
});

router.post("/:id/productos", async (req, res) => {
  const cart = await container.getById(req.params.id);

  if (!cart) res.status(404).json({ error: "carrito no encontrado" });

  if (req.body.products && req.body.products.length) {
    cart.products = [...cart.products, ...req.body.products];
    await container.updateCart(cart);

    res.status(201).json({ msg: "los productos fueron agregados al carrito" });
  } else {
    res
      .status(400)
      .json({ error: "Debe enviar una lista de productos válida" });
  }
});

router.delete("/:id/productos/:id_prod", async (req, res) => {
  const cart = await container.getById(req.params.id);
  if (!cart) res.status(404).json({ error: "carrito no encontrado" });

  const product = cart.products.find((p) => p.id == req.params.id_prod);
  if (!product) {
    res.status(404).json({ error: "producto no encontrado en el carrito" });
  }

  const filteredProducts = cart.products.filter(
    (p) => p.id != req.params.id_prod
  );
  cart.products = filteredProducts;

  await container.updateCart(cart);

  res.send("producto eliminado del carrito");
});

export default router;
