export default function(state = null, action) {
  switch (action.type) {
    case "SHOW_CONSOLE_LOG":
      return action.payload;
  }

  return state;
}
