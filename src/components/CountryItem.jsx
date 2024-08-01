import styles from "./CountryItem.module.css";
import flagemojiToPNG from "../handlers/flagEmojiToPNG";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>
        {country.emoji ? flagemojiToPNG(country.emoji) : ""}
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
