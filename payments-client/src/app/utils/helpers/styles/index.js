const DEVICE_WIDTH_LIMIT_SIZES = {
  SMARTPHONE: "480px",
  TABLET: "1024px",
};

const stylesForSpecialDevice = (device, styles) => {
  if (device === "SMARTPHONE") {
    return `
      @media (max-width: ${DEVICE_WIDTH_LIMIT_SIZES.SMARTPHONE}) {
        ${styles}
      }
    `;
  }

  if (device === "TABLET") {
    return `
      @media (max-width: ${DEVICE_WIDTH_LIMIT_SIZES.TABLET}) {
        ${styles}
      }
    `;
  }

  return null;
};

export default {
  stylesForSpecialDevice,
};
