import { Html, Head, Main, NextScript } from "next/document";
import { useSelector } from "react-redux";
import Dashboard from "../components/layout/Dashboard";
import Footer from "../components/layout/Footer";
import Leftside from "../components/layout/Leftbar";
import Rightbar from "../components/layout/Rightbar";
import Topbar from "../components/layout/Topbar";
import { dashboardInfo } from "../services/dashboardSlice";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <title>FTB</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          content="A fully featured admin theme which can be used to build CRM, CMS, etc."
          name="description"
        />
        <meta content="Coderthemes" name="author" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* App favicon */}
        <link rel="shortcut icon" href="/static/assets/images/favicon.ico" />
        {/* third party css */}
        <link
          href="/static/assets/libs/datatables/dataTables.bootstrap4.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/static/assets/libs/datatables/responsive.bootstrap4.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* third party css end */}
        {/* App css */}
        <link
          href="/static/assets/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/static/assets/css/icons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/static/assets/css/app.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="@sweetalert2/themes/dark/dark.css" />
        <script src="sweetalert2/dist/sweetalert2.min.js"></script>
      </Head>

      <body>
        <Main />

        {/* <!-- Vendor js --> */}
        <script src="/static/assets/js/vendor.min.js"></script>
        {/* <!-- third party js --> */}
        <script src="/static/assets/libs/datatables/jquery.dataTables.min.js"></script>
        <script src="/static/assets/libs/datatables/dataTables.bootstrap4.js"></script>
        <script src="/static/assets/libs/datatables/dataTables.responsive.min.js"></script>
        <script src="/static/assets/libs/datatables/responsive.bootstrap4.min.js"></script>
        {/* <!-- Tickets js --> */}
        <script src="/static/assets/js/pages/tickets.js"></script>
        {/* <script src="/static/assets/js/pages/form-fileuploads.init.js"></script> */}
        {/* <script src="/static/assets/js/pages/form-validation.init.js"></script> */}
        {/* <!-- App js --> */}
        <script src="/static/assets/js/app.min.js"></script>
        <NextScript />
      </body>
    </Html>
  );
}
