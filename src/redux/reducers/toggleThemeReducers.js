import { TOGGLE_THEME } from "../types/toggleTheme";

const toggleThemeInitial = "light";

function toggleThemeReducer(state = toggleThemeInitial, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === "light" ? "dark" : "light";

    default:
      return state;
  }
}

export default toggleThemeReducer;
