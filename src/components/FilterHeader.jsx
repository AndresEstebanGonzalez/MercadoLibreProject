import styles from "../styles/FilterHeader.module.scss";

import { useState } from "react";

export default function FilterHeader() {
  const [carouselAnimation, setCarouselAnimation] = useState(0);

  const handleButtonLeft = () => {
    !carouselAnimation == 0 && setCarouselAnimation(carouselAnimation + 888);
  };
  const handleButtonRight = () => {
    setCarouselAnimation(carouselAnimation - 888);
  };
  return (
    <div className={styles.mainContianer}>
      <div className={styles.contentContainer}>
        <div className={styles.carouselTitleContainer}>
          <h1 className={styles.headerTitle}>Ofertas</h1>
          <span className={styles.headerSubtitle}>
            ¡Encontrá precios increíbles cada día!
          </span>
        </div>
        <div className={styles.carouselSectionContainer}>
          <button
            className={`${styles.controlContainer} ${styles.left}`}
            onClick={handleButtonLeft}
            style={
              carouselAnimation == 0
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          >
            <span className={styles.controlIconContainer}>
              <img
                className={styles.controlIcon}
                src="src/assets/images/arrowLeft.svg"
                alt=""
              />
            </span>
          </button>
          <div className={styles.carouselContainer}>
            <div
              className={styles.carouselAnimationContainer}
              style={{
                transform: `translate3d(${carouselAnimation}px, 0px, 0px)`,
              }}
            >
              <div
                className={`${styles.carouselItemContainer} ${styles.selected}`}
              >
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/discountIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Todas las ofertas</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/flashDiscountIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Ofertas relámpago</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/gameConsoleIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Videojuegos</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/phoneIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Celulares</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/flashDiscountIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Ofertas relámpago</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/gameConsoleIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Videojuegos</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/phoneIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Celulares</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/lowerPricesIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Menos de $20.000</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/flashDiscountIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Ofertas relámpago</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/gameConsoleIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Videojuegos</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/groceryIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Supermercado</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/christmasIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Llegó Papá Noel!</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/gameConsoleIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Videojuegos</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/phoneIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Celulares</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/lowerPricesIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Menos de $20.000</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/flashDiscountIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Ofertas relámpago</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/gameConsoleIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Videojuegos</p>
                </div>
              </div>

              <div className={styles.carouselItemContainer}>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselItemIcon}
                    src="src/assets/images/groceryIcon.png.jpeg"
                    alt=""
                  />
                  <p className={styles.carouselItemTitle}>Supermercado</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className={`${styles.controlContainer} ${styles.right}`}
            onClick={handleButtonRight}
            style={
              carouselAnimation <= -1776
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          >
            <span className={styles.controlIconContainer}>
              <img
                className={styles.controlIcon}
                src="src/assets/images/arrowRight.svg"
                alt=""
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
