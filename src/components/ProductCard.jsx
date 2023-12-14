import MARKETPLACE_DATA from "../marketplaceData";
import styles from "../styles/ProductCard.module.scss";

export default function ProductCard({ item }) {
  return (
    <div className={styles.cardContainer}>
      <a className={styles.itemLinkContainer} href="">
        <div className={styles.itemImageContainer}>
          <img className={styles.itemImage} src={item.image_url} alt="" />
        </div>
        <div className={styles.itemDescriptionContainer}>
          <div className={styles.dealOfTheDayBadgeContainer}>
            {item.deal_of_the_day && (
              <span className={styles.dealOfTheDayBadge}>OFERTA DEL DIA</span>
            )}
          </div>
          <div className={styles.priceInformationContainer}>
            <div className={styles.priceAndDiscountContainer}>
              <s className={styles.priceWithoutDiscountContainer}>
                <span className={styles.currencySymbol}>$</span>
                <span className={styles.priceNoDiscount}>
                  {item.priceWithoutDiscount}
                </span>
              </s>
              <div className={styles.priceWithDiscountContainer}>
                <span className={styles.currencySymbol}>$</span>
                <span className={styles.priceWithDiscount}>
                  {(
                    (item.priceWithoutDiscount *
                      (100 - item.discount_percentage)) /
                    100
                  ).toFixed(2)}
                </span>
              </div>
            </div>
            <span className={styles.discountPercentage}>
              {item.discount && item.discount_percentage + "% OFF"}
            </span>
          </div>
          <p className={styles.productDescriptionP}>{item.name}</p>
          {item.brand && (
            <span className={styles.productSeller}>Por {item.brand}</span>
          )}
          <div className={styles.envioGratisBadgeContainer}>
            {item.free_shipping && (
              <span className={styles.envioGratisBadge}>Envío gratis</span>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}
