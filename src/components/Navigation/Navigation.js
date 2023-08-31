import Title from "../UI/Title/Title";
import Button from "../UI/Button/Button";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Navigation = () => {
  return (
    <nav>
      <ToggleSwitch />
      <Title>{"Make photos grayscale"}</Title>
      <Button>{"Fetch new Photos"}</Button>
    </nav>
  );
};
export default Navigation;
