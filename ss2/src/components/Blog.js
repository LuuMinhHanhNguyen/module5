import React from "react";

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className=" container my-2">
          <table className=" table">
            <thead className=" table-dark">
              <tr>
                <td>ID</td>
                <td>Title</td>
                <td>Category</td>
                <td>Time</td>
              </tr>
            </thead>
            <tbody>
              {this.props.list.map((el, index) => {
                return (
                  <tr key={`el_${index}`}>
                    <td>{index + 1}</td>
                    <td>{el.title}</td>
                    <td>{el.category}</td>
                    <td>{el.updatedAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default Blog;
