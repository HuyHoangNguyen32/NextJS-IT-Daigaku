import '@/src/styles/globals.css'

export default function App({ Component, pageProps }) {
  console.log("_app.jsx")
  return <Component {...pageProps} />
}
