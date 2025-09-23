import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import siteData from '../data/siteData.json';

export const GET: APIRoute = async () => {
  try {
    const posts = await getCollection('blog');

    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteData.title}</title>
    <description>${siteData.description}</description>
    <link>https://iotrealm-by-cor-inc.pages.dev</link>
    <language>ja-JP</language>
    <managingEditor>contact@iotrealm.com (IoTRealm Team)</managingEditor>
    <webMaster>webmaster@iotrealm.com (IoTRealm Webmaster)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} IoTRealm. All rights reserved.</copyright>
    <category>Technology</category>
    <category>IoT</category>
    <category>AI</category>
    <category>Digital Transformation</category>
    <atom:link href="https://iotrealm-by-cor-inc.pages.dev/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>IoTRealm RSS Generator</generator>
    <image>
      <url>https://iotrealm-by-cor-inc.pages.dev/iotrealm.png</url>
      <title>${siteData.title}</title>
      <link>https://iotrealm-by-cor-inc.pages.dev</link>
      <width>400</width>
      <height>400</height>
    </image>
${posts.map((post) => `
    <item>
      <title><![CDATA[${post.data.title || 'Untitled'}]]></title>
      <description><![CDATA[${post.data.summary || 'No description available'}]]></description>
      <link>https://iotrealm-by-cor-inc.pages.dev/articles/${post.slug}/</link>
      <guid>https://iotrealm-by-cor-inc.pages.dev/articles/${post.slug}/</guid>
      <pubDate>${post.data.pubDate ? new Date(post.data.pubDate).toUTCString() : new Date().toUTCString()}</pubDate>
      <author>contact@iotrealm.com (${post.data.author || 'IoTRealm Team'})</author>
      ${post.data.tags ? post.data.tags.map((tag: string) => `<category>${tag}</category>`).join('\n      ') : ''}
    </item>`).join('')}
  </channel>
</rss>`.trim();

    return new Response(rssXml, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new Response('Error generating RSS feed', { status: 500 });
  }
};