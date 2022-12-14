import Layout from "../components/layout/Layout";
import { wrapper } from "../services/store";
import { useSelector } from "react-redux";
import { auth, setAuth } from "../services/auth/authSlice";
import { useEffect } from "react";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const { isAuthenticated } = useSelector(auth);
  const router = useRouter();

  console.log(isAuthenticated);

  useEffect(() => {
    const authTokens = JSON.parse(localStorage.getItem("authTokens"));
    if (authTokens) {
      setAuth(authTokens);
    }

    // on initial load - run auth check
    let url = router.asPath;
    const publicPaths = ["/account/login"];
    const path = url.split("?")[0];

    if (isAuthenticated && publicPaths.includes(path)) {
      router.push({
        pathname: "/",
        query: { returnUrl: router.asPath },
      });
    }

    if (!isAuthenticated && !publicPaths.includes(path)) {
      router.push({
        pathname: "/account/login",
        query: { returnUrl: router.asPath },
      });
    }
  }, []);

  if (!isAuthenticated) {
    return <Component {...pageProps} />;
  }

  return (
    // <SecureRoute>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </SecureRoute>
  );
}
export default wrapper.withRedux(App);
