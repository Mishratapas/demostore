import {useSelector} from "react-redux";
import {ProductContent} from "../components";

import {bags} from "../data";

export default function useRender() {
  const {items} = useSelector((state) => state.data);

  const renderAll = Array.from(items).map((product) => (
    <div key={product.id}>
      <ProductContent product={product} />
    </div>
  ));

  const renderMens = Array.from(items)
    .filter((p) => p.category === "men's clothing")
    .map((product) => (
      <div key={product.id}>
        <ProductContent product={product} />
      </div>
    ));

  const renderWomen = Array.from(items)
    .filter((p) => p.category === "women's clothing")
    .map((product) => (
      <div key={product.id}>
        <ProductContent product={product} />
      </div>
    ));

  const renderJewelery = Array.from(items)
    .filter((p) => p.category === "jewelery")
    .map((product) => (
      <div key={product.id}>
        <ProductContent product={product} />
      </div>
    ));

  const renderElectronics = Array.from(items)
    .filter((p) => p.category === "electronics")
    .map((product) => (
      <div key={product.id}>
        <ProductContent product={product} />
      </div>
    ));

  const renderBags = bags.map((product) => (
    <div key={product.id}>
      <ProductContent product={product} />
    </div>
  ));

  return [
    renderAll,
    renderMens,
    renderWomen,
    renderJewelery,
    renderElectronics,
    renderBags,
  ];
}
