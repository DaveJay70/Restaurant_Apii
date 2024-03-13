import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const apiUrl = "http://localhost:5000/rest";
function Get_by_id() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(apiUrl + "/" + id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);
  return (
    <>
      <div className="container mt-3 border border-3 border-primary rounded">
        <div className="row ">
          <div className="col-3 m-2 mb-5">
            <img src={data.Image} width={300} height={300} className="img ms-2" />
          </div>
          <div className="col">
            <table class="table" >
              <tr>
                <td>
                  <h1 className="h1 text-primary ">Name is :-  {data.Name}</h1>
                  <h5 className="p1 text-danger">Description :- {data.Description}</h5>
                  <h5 className="p1 text-danger ">Price is :- {data.Price}</h5>
                  <h5 className="p1 text-danger">Category :- {data.Category}</h5>
                  <button
                    className="btn btn-warning m-3  border border-2 border-warning"
                    onClick={() => {
                      navigate('/rest');
                    }}
                  >
                    Back
                  </button>
                  <button
                    className="btn btn-primary border border-2 border-primary m-3"
                    onClick={() => {
                      navigate("/rest/" + id + "/edit");
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger m-3  border border-2 border-danger"
                    onClick={() => {
                      fetch(apiUrl + "/" + id, {
                        method: "DELETE",
                      })
                        .then((res) => {
                          return res.json();
                        })
                        .then((res) => {
                          console.log(res);
                          navigate("/rest");
                        });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Get_by_id;
