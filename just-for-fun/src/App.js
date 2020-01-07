import React from 'react';
import './App.css';
import Table from './Components/Table'
function App() {
  return (
    <div className="App">
      <header className="App-header">Data Uploader </header>
      <Table/>
      <div id="viewer"
    data-kbmax
    data-configurator-id="189"
    data-show-header="false"
    data-show-drawer="false"
    data-show-move="false"
    data-bind-to-form=""
    data-load-style="none"
    style="height: 800px;">
    <a href="http://www.kbmax.com/" style="position: absolute; right: 20px; bottom: 20px; width: 12%;">
        <img src="http://kbmax.kbmax.com/images/kbmax_logo_nx108.png" alt= "3D Product Configurator by KBMax" style="max-height: 108px; height: auto; width: 100%;" />
    </a>
</div>
<script src="https://training-dev.kbmax.com/embed.min.js"></script>
    </div>
  );
}

export default App;
