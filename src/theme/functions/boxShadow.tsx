

import rgba from "../functions/rgba";
import pxToRem from "../functions/pxToRem";

function boxShadow(
 offset: [number, number] = [0, 0], 
 radius: [number, number] = [0, 0], 
 color: string  = "", 
 opacity: number = 0, 
 inset: string = ""
): string {
 const [x, y] = offset;
 const [blur, spread] = radius;

 return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
   color,
   opacity.toString()
 )}`;
}

export default boxShadow;
