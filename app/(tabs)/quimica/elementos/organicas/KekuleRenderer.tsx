import React from "react";
import { WebView } from "react-native-webview";

const KekuleRenderer = ({ smiles }: { smiles: string }) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://unpkg.com/kekule/dist/kekule.min.js"></script>
      <style>
        body, html {
          margin: 0;
          padding: 0;
          background-color: black; /* Fundo preto */
          color: white; /* Texto branco para visibilidade */
          height: 100%; /* Garantir altura 100% */
        }
        #chemViewer {
          width: 100%;
          height: 100%;
          background-color: black; /* Fundo preto para o conteúdo */
        }
      </style>
    </head>
    <body>
      <div id="chemViewer"></div>
      <script>
        const viewer = new Kekule.ChemWidget.Viewer(document.getElementById('chemViewer'));
        viewer.setChemObj(Kekule.IO.loadFormatData('${smiles}', 'smi'));
        viewer.setEnableToolbar(false);
        viewer.setEnableInspector(false);
      </script>
    </body>
    </html>
  `;

  return (
    <WebView
      originWhitelist={["*"]}
      source={{ html: htmlContent }}
      style={{ height: 300, width: 300 }} // Ajuste o tamanho conforme necessário
      javaScriptEnabled={true}
      scrollEnabled={false}
    />
  );
};

export default KekuleRenderer;
