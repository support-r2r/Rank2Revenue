export const GET = async () => {
    const robotsTxt = `
      User-agent: *
      Allow: /
  
      Sitemap: https://rank2revenue.com.au/sitemap.xml
    `;
  
    return new Response(robotsTxt.trim(), {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  };
  