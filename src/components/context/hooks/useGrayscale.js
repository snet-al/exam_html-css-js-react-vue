import { useContext } from "react";
import GrayscaleContext from "../GrayscaleContext";

const useGrayscale = () => useContext(GrayscaleContext);

export default useGrayscale;
