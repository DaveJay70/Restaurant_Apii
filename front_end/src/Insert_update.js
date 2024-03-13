import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const apiUrl = "http://localhost:5000/rest";
function Add_Edit() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (id !== undefined) {
      fetch(apiUrl + "/" + id)
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  }, []);
  return (
    <>
      <div className="container">
        <input
          className="form-control mt-2"
          type="text"
          placeholder="Enter ItemId"
          value={data.ItemID}
          onChange={(e) => {
            setData({ ...data, ItemID: e.target.value });
          }}
        />
        <br />
        <input
          className="form-control mt-2"
          type="text"
          placeholder="Enter ItemName"
          value={data.Name}
          onChange={(e) => {
            setData({ ...data, Name: e.target.value });
          }}
        />
        <br />
        <input
          className="form-control mt-2"
          type="text"
          placeholder="Enter ImagePath"
          value={data.Image}
          onChange={(e) => {
            setData({ ...data, Image: e.target.value });
          }}
        />
        <br />
        <input
          className="form-control mt-2"
          type="text"
          placeholder="Enter ItemDescription"
          value={data.Description}
          onChange={(e) => {
            setData({ ...data, Description: e.target.value });
          }}
        />
        <br />
        <input
          className="form-control mt-2"
          type="text"
          placeholder="Enter ItemPrice"
          value={data.Price}
          onChange={(e) => {
            setData({ ...data, Price: e.target.value });
          }}
        />
        <br />
        <input
          className="form-control mt-2"
          type="text"
          placeholder="Enter ItemCategory"
          value={data.Category}
          onChange={(e) => {
            setData({ ...data, Category: e.target.value });
          }}
        />
        <br />
        <br />
        {id === undefined && (
          <button
            onClick={() => {
              fetch(apiUrl, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json",
                },
              }).then(() => {
                navigate("/rest");
              });
            }}
            className="btn btn-primary"
          >
            Add
          </button>
        )}
        {id !== undefined && (
          <button
            onClick={() => {
              fetch(apiUrl + "/" + id, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((res) => {
                  return res.json();
                })
                .then(() => {
                  navigate('/rest')
                });
            }}
            className="btn btn-warning"
          >
            Edit
          </button>
        )}
      </div>
    </>
  );
}

export default Add_Edit;
