import Link from "next/link";
import classes from "./social-item.module.css";

function SocialItem(props) {
  const { link: link, icon: Icon } = props;

  return (
    <li>
      <Link href={link} className={classes.icon}>
        <Icon />
      </Link>
    </li>
  );
}

export default SocialItem;
