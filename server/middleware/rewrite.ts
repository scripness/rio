export default defineEventHandler(async (event) => {
  const urlObj = getRequestURL(event);

  const query = getQuery(event);

  const body = await readBody(event).catch(() => {});

  if (urlObj.pathname === "/profile") {
    return proxyRequest(event, "https://rio.stream/754");
    // await sendProxy(event, "http://localhost:3000/ascrip/profile", {
    //   sendStream: true,
    //   streamRequest: false,
    // });
  }
});
