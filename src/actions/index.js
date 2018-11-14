export function showConsolelog(article) {
  console.log("herehehre", article);
  return {
    type: "SHOW_CONSOLE_LOG",
    payload: article
  };
}
