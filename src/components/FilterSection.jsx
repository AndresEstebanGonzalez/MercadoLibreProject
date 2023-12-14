import MARKETPLACE_DATA from "../marketplaceData";
import styles from "../styles/FilterSection.module.scss";

export default function FilterSection() {
  const MARKETPLACE_DATA_CATEGORY = MARKETPLACE_DATA.website.categorySector;

  const LIST_ARRAY = ({ item }) => {
    return (
      <li className={styles.listElementContainer}>
        <a
          href={`https://www.mercadolibre.com.ar${item.href}`}
          className={styles.listElement}
        >
          {item.name}
          <span className={styles.quantity}> ({item.quantity})</span>
        </a>
      </li>
    );
  };

  const tipoDeOfertasListArray = MARKETPLACE_DATA_CATEGORY.tipoOferta.map(
    (item) => {
      return <LIST_ARRAY key={item.id} item={item} />;
    }
  );

  const categoriasListArray = MARKETPLACE_DATA_CATEGORY.categorias.map(
    (item) => {
      return <LIST_ARRAY key={item.id} item={item} />;
    }
  );

  const costoDeEnvioListArray = MARKETPLACE_DATA_CATEGORY.costoEnvio.map(
    (item) => {
      return <LIST_ARRAY key={item.id} item={item} />;
    }
  );

  const pagoListArray = MARKETPLACE_DATA_CATEGORY.pago.map((item) => {
    return <LIST_ARRAY key={item.id} item={item} />;
  });

  const precioListArray = MARKETPLACE_DATA_CATEGORY.precio.map((item) => {
    return <LIST_ARRAY key={item.id} item={item} />;
  });

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Todas</h1>
      <p className={styles.p}>10.000 productos</p>
      <div className={styles.switchFilterContainer}></div>
      <h2 className={styles.subtitle}>Tipo de oferta</h2>
      <ul className={styles.list}>{tipoDeOfertasListArray}</ul>
      <h2 className={styles.subtitle}>Categorías</h2>
      <ul className={styles.list}>{categoriasListArray}</ul>
      <h2 className={styles.subtitle}>Costo de envío</h2>
      <ul className={styles.list}>{costoDeEnvioListArray}</ul>
      <h2 className={styles.subtitle}>Pago</h2>
      <ul className={styles.list}>{pagoListArray}</ul>
      <h2 className={styles.subtitle}>Precio</h2>
      <ul className={styles.list}>{precioListArray}</ul>
    </div>
  );
}
