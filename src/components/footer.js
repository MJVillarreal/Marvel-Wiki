import styles from "../styles/footer.module.css";

import Logo from "../assets/images/Marvel-Logo.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  const youtubeUrl = "https://www.youtube.com/@marvel";
  const instagramUrl = "https://www.instagram.com/marvelstudios/?hl=es";
  const xUrl =
    "https://x.com/MarvelStudios?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor";

  return (
    <div className={styles.footerContainer}>
      <div>
        <img src={Logo} alt="logo" className={styles.footerLogo}></img>
      </div>
      <div className={styles.iconContainer}>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerIcon}
        >
          <span>
            <YouTubeIcon sx={{ fontSize: 40 }} />
          </span>
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerIcon}
        >
          <span>
            <InstagramIcon sx={{ fontSize: 40 }} />
          </span>
        </a>
        <a
          href={xUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerIcon}
        >
          <span>
            <XIcon sx={{ fontSize: 40 }} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
