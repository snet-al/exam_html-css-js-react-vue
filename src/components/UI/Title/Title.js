import styles from "./Title.module.css";

const Title = (props) => {
  return (
    <title className={`${styles.title} ${props.className}`}>{props.text}</title>
  );
};

export default Title;
