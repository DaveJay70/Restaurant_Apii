import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const apiurl = "http://localhost:5000/rest";

function Get_all_item() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(apiurl)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);



  const Item_data = data.map((item) => {
    return (
      <>
        <div class="card col-2 g-1  m-3 border border-2 border-danger">
          <img src={item.Image} class="card-img-top" alt="..." height={200} />
          <div class="card-body">
            <h5 class="card-title text-center text-primary mt-1 ">{item.Name}</h5>
            <h5 class="card-title text-center text-primary mt-1 ">Price is:-{item.Price}</h5>
            <div className="text-center">
              <Link
                to={"/rest/" + item.ItemID}
                type="button"
                class=" btn btn-primary  mt-2"
              >
                View Detail
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <nav class="navbar mt-3 mb-3 ">
        <div class="container row">
          <Link className="btn btn-primary col-1 mx-5" to="/rest/add">
            Add
          </Link>
          <h1 className="text-primary text-center col">Restaurant Menu</h1>
        </div>
      </nav>
      <div className="container">
        <div className="row">{Item_data}</div>
      </div>
    </>
  );

}
export default Get_all_item;
