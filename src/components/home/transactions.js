const HomeTransactions = () => {
  return (
    <section id="transactions" className="transactions">
      <div className="container">
        <div className="row">
          <div className="feature__block text-slate col-12 col-lg-5 mt-5 mr-lg-5">
            <p className="mb-4 heading-big">
              Fully decentralized and community-driven
            </p>
            <div className="feature__intro">
              <h3 className="text-slate-dark heading-bigger mb-4">
                The Hydnora Finance community is considered the main driver and asset
              </h3>
            </div>
            <p className="mb-sm-4 mb-md-5">
              Hydnora Finance aims to improve the Blockchain user experience,
              Secure the data using The Graph protocol and create a social utility.
              Take advantage of the full potential of flash loans
              Products for the comfort of life.
              <br />
              Hydnora Finance, will block liquidity until all our products are fully operational
              We will burn 50% of the tokens after the presale
            </p>
            <a
              target="_blank"
              href="https://docs.hydnora.finance"
              className="btn text-white btn-larger pink-btn font-weight-bold rounded-pill"
            >
              <span className="btn-center-text">Get Docs</span>
            </a>
          </div>
          <div className="feature__description col-12 col-lg-6 mt-5 mt-lg-0 ml-lg-5">
            <div className="row align-items-center">
              <div className="col-6">
                <img src="/images/loss.svg" alt="Create Payment Address" />
                <h4 className="text-slate-dark heading-big fw-500">
                  Loss Mitigation
                </h4>
                <p>
                  Hydnora Finance uses a combination of strategies to mitigate loss:
                  <br />
                  <small>a.</small> Risk avoidance <br />
                  <small>b.</small> Risk acceptance
                  <br />
                  <small>c.</small> Risk reduction
                  <br />
                  <small>d.</small> Subrogation by leveraging legal resources to
                  ensure HydnoraDaap solvency
                </p>
              </div>
              <div className="col-6">
                <img src="/images/staking.svg" alt="Ask for Payment" />
                <h4 className="text-slate-dark heading-big fw-500">Staking</h4>
                <p>
                  The Hydnora Finance community can stake digital assets to receive
                  rewards through Liquidity mining program
                </p>
              </div>
              <div className="col-6">
                <img src="/images/gov.svg" alt="Get Paid" />
                <h4 className="text-slate-dark heading-big fw-500">
                  Governance
                </h4>
                <p>
                  The vision of Hydnora Finance is to create an operating system for
                  trustless transactions by eliminating counterparty risk via
                  disintermediating.
                </p>
              </div>
              <div className="col-6">
                <img src="/images/dev.svg" alt="Get Payment Notification" />
                <h4 className="text-slate-dark heading-big fw-500">
                  Product Development
                </h4>
                <p>
                  Hydnora Finance blockchain product development is driven by
                  community use case, proof of concept built and launched with
                  data mapping and governance implementation.
                </p>
              </div>

              <div className="col-6">
                <img src="/images/loss.svg" alt="Get Payment Notification" />
                <h4 className="text-slate-dark heading-big fw-500">
                  Data Curation
                </h4>
                <p>
                  Hydnora Finance data curation, using The Graph Protocol, helps
                  manage data to make it more useful for users engaging in data
                  discovery and analysis.
                </p>
              </div>

              <div className="col-6">
                <a
                  href="https://docs.hydnora.finance/features"
                  target="_blank"
                  style={{
                    border: '1px solid #eee',
                    borderRadius: '6px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '120px',
                  }}
                >
                  See full Features
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          small {
            display: inline-block;
            margin: 0 5px 0 0;
            color: #ff7ca0;
          }
        `}
      </style>
    </section>
  );
};

export default HomeTransactions;
