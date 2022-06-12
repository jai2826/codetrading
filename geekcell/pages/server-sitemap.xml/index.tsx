import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { GetServerSideProps } from "next";

export const getServerSideProps:GetServerSideProps=async(ctx)=>{
  let headers = { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` };
  let response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs`, { headers: headers });
  const blogs = await response.json();
  const newblogs = blogs.data;
  console.log(blogs)
  
  const fields:ISitemapField[] = newblogs.map(item=>({
    loc:`${process.env.SITE_URL}/Blog/${item.attributes.slug}`,
    lastmod: new Date().toISOString()
  }))

  return getServerSideSitemap(ctx, fields)
}

export default function Site() {}