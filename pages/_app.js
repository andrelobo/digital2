import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from "@/components/common/Layout";
import "@/styles/main.scss";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-7GHFKT2MP9', {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Remover o listener quando o componente for desmontado
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
