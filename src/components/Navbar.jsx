import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContentContainer}>
        <div className={styles.topInnerNavbarContainer}>
          <div className={styles.navbarLogoContainer}>
            <a
              className={styles.navbarLogoLink}
              href="https://www.mercadolibre.com.ar/"
            >
              <img
                className={styles.navbarLogoImage}
                src="src/assets/images/navbarLogo.png"
                alt="MercadoLibre Logo"
              />
            </a>
          </div>

          <div className={styles.searchbarContainer}>
            <form
              className={styles.searchbarForm}
              action="https://www.mercadolibre.com.ar/jm/search"
            >
              <input
                className={styles.searchbarInput}
                type="text"
                placeholder="Buscar productos, marcas y más..."
              />
              <button className={styles.searchButton}>
                <img
                  className={styles.searchLogo}
                  src="src/assets/images/searchIcon.svg"
                  alt="Magnifying glass"
                />
              </button>
            </form>
          </div>

          <div className={styles.topRightContainer}>
            <a
              className={styles.navbarStarPlusLink}
              href="https://www.mercadolibre.com.ar/suscripciones/nivel-6#origin=banner-menu&me.component_id=banner_menu_web_ml&me.logic=campaigns&me.position=0&me.bu_line=36&me.flow=-1&me.bu=9&me.audience=all&me.content_id=bannermenu_n6_generico_999"
            >
              <img
                className={styles.navbarStarPlusImage}
                src="src/assets/images/starPlusImage.jpg"
                alt="Por $999 ¡Suscribite al nivel 6!, Disney+ y Star+ Incluídos"
              />
            </a>
          </div>
        </div>
        <div className={styles.bottomInnerNavbarContainer}>
          <div className={styles.deliveryLocationContainer}>
            <a
              className={styles.deliveryLocationInformation}
              href="https://www.mercadolibre.com.ar/navigation/addresses-hub?go=https%3A%2F%2Fwww.mercadolibre.com.ar%2F"
            >
              <span className={styles.deliveryLocationName}>
                Enviar a Andrés
              </span>
              <span className={styles.deliveryLocationAddress}>
                Avenida Belgrano 2846
              </span>
            </a>
          </div>

          <div className={styles.middleMenuContainer}>
            <ul className={styles.navbarMenuList}>
              <li className={styles.navbarMenuItem}>
                <a
                  className={styles.navbarMenuItemA}
                  href="https://www.mercadolibre.com.ar/categorias#nav-header"
                >
                  Categorías
                </a>
              </li>
              <li className={styles.navbarMenuItem}>
                <a
                  className={styles.navbarMenuItemA}
                  href="https://www.mercadolibre.com.ar/ofertas#nav-header"
                >
                  Ofertas
                </a>
              </li>
              <li className={styles.navbarMenuItem}>
                <a
                  className={styles.navbarMenuItemA}
                  href="https://www.mercadolibre.com.ar/gz/home/navigation#nav-header"
                >
                  Historial
                </a>
              </li>
              <li className={styles.navbarMenuItem}>
                <a
                  className={styles.navbarMenuItemA}
                  href="https://www.mercadolibre.com.ar/ofertas/supermercadolibre#nav-header"
                >
                  Supermercado
                </a>
              </li>
              <li className={styles.navbarMenuItem}>
                <a
                  className={styles.navbarMenuItemA}
                  href="https://www.mercadolibre.com.ar/c/ropa-y-accesorios#nav-header"
                >
                  Moda
                </a>
              </li>
              <li className={styles.navbarMenuItem}>
                <a
                  className={styles.navbarMenuItemA}
                  href="https://www.mercadolibre.com.ar/ayuda#nav-header"
                >
                  Vender
                </a>
              </li>
              <li className={styles.navbarMenuItem}>
                <a
                  className={styles.navbarMenuItemA}
                  href="https://www.mercadolibre.com.ar/ofertas#nav-header"
                >
                  Ayuda
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.rightMenuContainer}>
            <div className={styles.rightMenu}>
              <a
                className={`${styles.item} ${styles.optionUser}`}
                href="https://myaccount.mercadolibre.com.ar/summary"
              >
                <img
                  className={`${styles.menuIcon} ${styles.userIcon}`}
                  src="src/assets/images/userIcon.svg"
                  alt="User icon"
                />
                Andres E...
              </a>

              <a
                className={`${styles.item} ${styles.optionCompras}`}
                href="https://myaccount.mercadolibre.com.ar/purchases/list#nav-header"
              >
                Mis compras
              </a>

              <a
                className={`${styles.item} ${styles.optionFavoritos}`}
                href="https://myaccount.mercadolibre.com.ar/bookmarks/list#nav-header"
              >
                Favoritos
              </a>

              <a
                className={`${styles.item} ${styles.optionNotification}`}
                href="https://www.mercadolibre.com.ar/gz/notifications/center#nav-header"
              >
                <img
                  className={`${styles.menuIcon} ${styles.cartIcon}`}
                  src="src/assets/images/bellIcon.svg"
                  alt="Bell icon"
                />
              </a>

              <a
                className={`${styles.item} ${styles.optionCart}`}
                href="https://www.mercadolibre.com.ar/gz/notifications/center#nav-header"
              >
                <img
                  className={styles.menuIcon}
                  src="src/assets/images/cartIcon.svg"
                  alt="Cart icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
