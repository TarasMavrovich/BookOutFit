import { AppRoute } from "@/shared/auth/enums/app-route.enums";

const getText = (pathname: string, type: string): string => {
  type Properties = Record<string, string>;

  const titles: Properties = {
    [AppRoute.SIGN_IN]: "Log In",
    [AppRoute.SIGN_UP]: "Sign Up",
  };

  const authText: Properties = {
    [AppRoute.SIGN_IN]: "No account?",
    [AppRoute.SIGN_UP]: "Have an account?",
  };

  const authLink: Properties = {
    [AppRoute.SIGN_IN]: "Sign Up",
    [AppRoute.SIGN_UP]: "Log In",
  };

  switch (type) {
    case "title": {
      return titles[pathname] || "";
    }
    case "authText": {
      return authText[pathname] || "";
    }
    case "authLink": {
      return authLink[pathname] || "";
    }
    default: {
      return "";
    }
  }
};

export { getText };
