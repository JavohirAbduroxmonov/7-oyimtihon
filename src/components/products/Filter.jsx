import React, { useEffect, useState } from "react";
import styles from "./Filter.module.scss";

const Filter = ({
  selectedBrand,
  setSelectedBrand,
  selectedColor,
  setSelectedColor,
  setSort,
}) => {
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);

  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    async function fetchBrands() {
      try {
        const response = await fetch(`${baseURL}/brands`);
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    }

    async function fetchColors() {
      try {
        const response = await fetch(`${baseURL}/colors`);
        const data = await response.json();
        setColors(data);
      } catch (error) {
        console.error("Error fetching colors:", error);
      }
    }

    fetchBrands();
    fetchColors();
  }, [baseURL]);

  return (
    <div>
      <div className={styles.filter}>
        <h3>BRAND</h3>
        <ul>
          {brands.map((brand, index) => (
            <li key={index}>
              <input
                type="radio"
                value={brand}
                name="brand"
                id={brand}
                checked={brand === selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              />
              <label htmlFor={brand}>{brand}</label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>COLORS</h3>
        <ul className={styles.colorsContainer}>
          {colors.map((color, index) => (
            <li key={index}>
              <div
                style={{
                  background: color,
                  outline: selectedColor === color ? "3px solid red" : "",
                }}
                className={styles.color}
                onClick={() => setSelectedColor(color)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
