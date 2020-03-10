import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#FFFFFF" />

          <meta name="description" content="Michael Richardson is a software engineering living in the UK. This is his personal portfolio of projects." />

          <meta name="twitter:card" value="summary" />

          <meta property="og:title" content="Michael Richardson" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.michaelprichardson.com" />
          <meta property="og:image" content={require("assets/img/me.png")} />
          <meta property="og:description" content="Michael Richardson is a software engineering living in the UK. This is his personal portfolio of projects." />

          <link rel="apple-touch-icon" sizes="180x180" href={require("assets/img/apple-touch-icon.png")} />
          <link rel="icon" type="image/png" sizes="32x32" href={require("assets/img/favicon-32x32.png")} />
          <link rel="icon" type="image/png" sizes="16x16" href={require("assets/img/favicon-16x16.png")} />

          {/* Fonts and icons */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Source+Code+Pro|Roboto+Slab:400,700|Material+Icons"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  };
};

export default MyDocument;
