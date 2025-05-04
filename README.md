  <h1 style="color: #111;">🤖 Furia Chatbot</h1>
  <p>Landing page sobre a equipe de CS + um chatbot interativo para responder perguntas relacionadas ao time de e-sports FURIA. Utiliza <strong>React</strong>, <strong>Fuse.js</strong> para busca fuzzy e uma base de intents customizada com sugestões inteligentes, emojis e respostas contextuais.</p>

  <h2 style="color: #111;">🧠 Funcionalidades</h2>
  <ul>
    <li>Introdução, ultimas partidas, próximos eventos da FURIA CS</li>
    <li>Busca inteligente com correspondência fuzzy usando <code style="background: #eee; padding: 0.2em 0.4em; border-radius: 4px;">Fuse.js</code>.</li>
    <li>Sugestões de perguntas com rolagem horizontal.</li>
    <li>Interface elegante com modal e botão flutuante.</li>
    <li>Dataset customizado com <code style="background: #eee; padding: 0.2em 0.4em; border-radius: 4px;">intents</code>, <code style="background: #eee; padding: 0.2em 0.4em; border-radius: 4px;">tags</code>, <code style="background: #eee; padding: 0.2em 0.4em; border-radius: 4px;">stopWords</code>, <code style="background: #eee; padding: 0.2em 0.4em; border-radius: 4px;">emojis</code>, e <code style="background: #eee; padding: 0.2em 0.4em; border-radius: 4px;">defaultSuggestions</code>.</li>
  </ul>

  <h2 style="color: #111;">📦 Instalação</h2>
  <pre style="background: #eee; padding: 1em; border-radius: 6px; overflow-x: auto;"><code>git clone https://github.com/LeoImenes/furia-bot.git
cd furia-bot
npm install
npm run dev</code></pre>

  <h2 style="color: #111;">🗃️ Estrutura dos Dados</h2>
  <ul>
    <li><strong>intents:</strong> Lista de intents com tags e respostas.</li>
    <li><strong>stopWords:</strong> Palavras ignoradas para melhorar precisão na busca.</li>
    <li><strong>emojis:</strong> Emojis separados por categoria (vitória ou derrota).</li>
    <li><strong>defaultSuggestions:</strong> Sugestões fixas exibidas como botões rápidos.</li>
  </ul>

  <h2 style="color: #111;">🧩 Principais Arquivos</h2>
  <table style="width: 100%; border-collapse: collapse; margin: 1em 0;">
    <thead>
      <tr>
        <th style="border: 1px solid #ccc; padding: 0.6em; text-align: left;">Arquivo</th>
        <th style="border: 1px solid #ccc; padding: 0.6em; text-align: left;">Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #ccc; padding: 0.6em;">FuriaChatbot.tsx</td>
        <td style="border: 1px solid #ccc; padding: 0.6em;">Componente principal do chatbot</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ccc; padding: 0.6em;">furiaBotDataset.ts</td>
        <td style="border: 1px solid #ccc; padding: 0.6em;">Dataset contendo intents, sugestões e emojis</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ccc; padding: 0.6em;">styles.css</td>
        <td style="border: 1px solid #ccc; padding: 0.6em;">Estilos do modal e do botão do chatbot</td>
      </tr>
    </tbody>
  </table>

  <h2 style="color: #111;">🚀 Customização</h2>
  <p>
    Para adicionar novas perguntas/respostas, edite o arquivo 
    <code style="background: #eee; padding: 0.2em 0.4em; border-radius: 4px;">furiaBotDataset.ts</code> na parte de 
    <code style="background: #eee; padding: 0.2em 0.4em; border-radius: 4px;">intents</code>.<br/>
  </p>

  <h2 style="color: #111;">🧪 Testes</h2>
  <p>Você pode testar o componente abrindo o modal e digitando perguntas como:</p>
  <ul>
    <li><em>Quando é o próximo jogo?</em></li>
    <li><em>A FURIA venceu?</em></li>
    <li><em>Quem são os jogadores?</em></li>
  </ul>

  <h2 style="color: #111;">🛠 Tecnologias</h2>
  <ul>
    <li>React</li>
    <li>TypeScript</li>
    <li>Fuse.js</li>
    <li>CSS</li>
  </ul>
