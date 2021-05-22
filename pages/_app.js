import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// MyApp.getInitialProps = async ({ ctx, router }) => {
//   let pageProps = {};

//   const { locale } = router;
//   // console.log(locale);

//   return {
//     pageProps,
//     locale,
//   };
// };

export default MyApp;
