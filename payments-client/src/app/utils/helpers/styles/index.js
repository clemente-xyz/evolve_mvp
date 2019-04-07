const DEVICE_WIDTH_LIMIT_SIZES = {
  SMARTPHONE: "480px",
  TABLET: "1024px",
  DESKTOP: "1224px",
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

  if (device === "DESKTOP") {
    return `
      @media (min-width: ${DEVICE_WIDTH_LIMIT_SIZES.DESKTOP}) {
        ${styles}
      }
    `;
  }

  return null;
};

export default {
  stylesForSpecialDevice,
};
