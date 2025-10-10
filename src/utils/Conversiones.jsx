// CONVIERTE EN MAYUSCULA LA PRIMER LETRA DE UNA PALABRA

export const ConvertirCapitalize = (input) => {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};
