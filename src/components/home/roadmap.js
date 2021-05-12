const HomeRoadMap = () => {
  return (
    <section className="roadmap" id="roadmap">
      <div className="container">
        <div className="row mb-4">
          <h2 className="text-center col-12 text-slate-dark heading-bigger mb-4">
            Hydnora Finance Roadmap
          </h2>

          <ul className="roadmap-list">
            <li>
              <h3 className="title">2021 Q1</h3>

              <ul>
                <li>Presale &amp; Security Audit</li>
                <li>Exchange Launchpool</li>
                <li>Hydnora Farms</li>
                <li>Exchange listing</li>
              </ul>
            </li>

            <li>
              <h3 className="title">2021 Q2</h3>

              <ul>
                <li>Hydnora LP &amp; Farms</li>
                <li>Exchange Access Integration</li>
                <li>Hydnora Vault &amp; Yield Engine</li>
                <li>Fiat Gateway integration</li>
              </ul>
            </li>

            <li>
              <h3 className="title">2021 Q3</h3>

              <ul>
                <li>Smart Asset Management, Delegation &amp; Curation</li>
                <li>Pooling Mechanism</li>
                <li>Flashloans integrations</li>
                <li>Binance Smart Chain DeFi protocols integrations</li>
                <li>Analytics Engine Indexers with Graph</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeRoadMap;
