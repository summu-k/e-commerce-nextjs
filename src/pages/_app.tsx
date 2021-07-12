import 'tailwindcss/tailwind.css';
import BaseLayout from '../component/layouts/BaseLayout';

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Component {...pageProps} />;
    </BaseLayout>
  );
}

export default MyApp;
