import className from "classnames";
import { twMerge } from "tailwind-merge"

function cn(...inputs: className.ArgumentArray) {
  return twMerge(className(inputs))
}

export default cn;
