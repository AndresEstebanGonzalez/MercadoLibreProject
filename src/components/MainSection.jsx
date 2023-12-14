import styles from "../styles/MainSection.module.scss";

import MARKETPLACE_DATA from "../marketplaceData";
import ProductCard from "./ProductCard";
import FilterSection from "./FilterSection";
import FilterHeader from "./FilterHeader";

export default function MainSection() {
  const MARKETPLACE_DATA_PRODUCTS = MARKETPLACE_DATA.website.products;

  const PRODUCT_ARRAY = MARKETPLACE_DATA_PRODUCTS.map((item) => {
    return <ProductCard item={item} key={item.id} />;
  });

  return (
    <div className={styles.mainContainer}>
      <FilterHeader />
      <div className={styles.promotionSection}>
        <FilterSection />
        <div className={styles.productContainer}>{PRODUCT_ARRAY}</div>
      </div>
    </div>
  );
}
