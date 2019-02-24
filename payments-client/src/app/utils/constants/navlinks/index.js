const NON_AUTH_LINKS = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Sign in",
    path: "/signin"
  },
  {
    label: "Sign up",
    path: "/signup"
  },
  {
    label: "Support",
    path: "/support"
  }
];

const AUTH_LINKS = [
  {
    label: "Wallet",
    path: "/wallet"
  },
  {
    label: "Payments",
    path: "/payments"
  },
  {
    label: "Recipients",
    path: "/recipients"
  },
  {
    label: "Settings",
    path: "/settings"
  },
  {
    label: "Sign out",
    path: "/"
  }
];

export default {
  NON_AUTH_LINKS,
  AUTH_LINKS
};
