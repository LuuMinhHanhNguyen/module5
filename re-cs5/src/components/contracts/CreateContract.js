export default function CreateContract() {
  return (
    <>
      <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div className="wrapper wrapper--w960">
          <div className="card card-2">
            <div className="card-heading"></div>
            <div className="card-body">
              <h2 className="title">Create New Contract</h2>
              <form method="POST">
                <div className="input-group">
                  <input
                    className="input--style-2"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="input-group">
                  <input
                    className="input--style-2"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="input-group">
                  <input
                    className="input--style-2"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="input-group">
                  <input
                    className="input--style-2"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="input-group">
                  <input
                    className="input--style-2"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="p-t-30">
                  <button className="btn btn--radius btn--green" type="submit">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
