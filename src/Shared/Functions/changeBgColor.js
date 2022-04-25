export const colorGenerate = (color) => {
  const primaryColor = [
    Math.round(Math.random() * 160),
    Math.round(Math.random() * 160),
    Math.round(Math.random() * 160),
  ].join(",");

  const gradient = `linear-gradient(180deg, rgba(${
    color ? color : primaryColor
  },1) -100%, rgba(29,29,29,1) 100%);`;

  return gradient;
};

