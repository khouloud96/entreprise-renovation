import classes from "./logistics-item.module.css";

function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li
      className={classes.item}
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="200"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
    >
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
