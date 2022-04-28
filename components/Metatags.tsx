import Head from 'next/head';

export default function Metatags({
  title = 'Coding Club',
  description = 'Coding Study Club for programmer / 코딩 공부를 위한 스터디',
  image = 'https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@coding club" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}