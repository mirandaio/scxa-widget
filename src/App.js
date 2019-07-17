import React from 'react';
import TSnePlotWidget from 'ebi-scea-tsne-widget';

function App() {
  return (
    <div>
      <TSnePlotWidget
        experimentAccession="E-ENAD-15"
        geneId="ENSMUSG00000041147"
      />
    </div>
  );
}

export default App;
