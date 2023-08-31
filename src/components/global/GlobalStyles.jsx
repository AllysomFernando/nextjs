import { theme } from "../Theme";

export default function GlobalStyle() {
    return (
        <style global jsx>{`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        a {
          text-decoration: none;
        }
        body {
          font-family: ${theme.typography.fontFamily}, sans-serif;
          background-color: #F7F7F7;
        }
        img, video {
          max-width: 100%;
          height: auto;
        }
        audio, canvas, embed, iframe, img, object, svg, video {
          display: block;
          vertical-align: middle;
        }
      
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }
        /* ================== */
        /* NextJS */
        /* ================== */
        html {
          height: 100%;
        }
        body,
        #__next {
          height: 100%;
        }
        #__next {
          display: flex;
          flex-direction: column;
        }
        #__next > * {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
        }
        .modalOverlay {
          margin: 20% 40%;
          background-color: #322F4B;
          border-radius: 45px;
          max-width: 500px;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          flex-direction: column;
          padding: 50px;
          width: 100%;
          min-height: 20vh;
      }
      
      .modalContent {
          border-radius: 50px;
          max-width: 800px;
          height: fit-content;
          width: 95%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          flex-direction: column;
          padding: 30px;
          font-family: 'Raleway', sans-serif;
          letter-spacing: 1px;
          font-size: 15px;
          color: white;
      }
      `}</style>
    )
}