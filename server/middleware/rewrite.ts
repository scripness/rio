export default defineEventHandler((event) => {
  const urlObj = getRequestURL(event);

  if (urlObj.pathname === "/profile") {
    // return proxyRequest(event, "http://localhost:3000/ascrip/profile", {
    //   changeOrigin: true,
    //   rewrite: (path) => "qwe",
    // });
  }
});
