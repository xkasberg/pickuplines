import hexToRgb from "../functions/hexToRgb";

function rgba(color:string, opacity:string) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export default rgba;
