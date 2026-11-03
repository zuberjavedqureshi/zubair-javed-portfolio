/** Copyright year, captured when the page is prerendered (static output; refreshed on each deploy). */
export async function getBuildYear() {
  "use cache";
  return new Date().getFullYear();
}
