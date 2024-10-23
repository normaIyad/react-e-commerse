import {Link} from "react-router-dom"

export default function Total({total}) {
  return (
<section className="cost-discount">
  <div className="container">
    <div className="row justify-content-sm-between">
      <div className="col-md-6">
        <div className="mb-2">
          <h5 className="font-weight-bold"> Discount Code</h5>
          <p> Enter your coupon code if you have one</p>
        </div>
        <div className=" input-group">
          <input type="text" className="form-control" placeholder="Enter your discount code" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <button className="btn btton mainbkcolor " type="button">Apply</button>
        </div>
        <Link to="/home" className="btn btn-outline-secondary mt-3 font-weight-bold mainbkcolor" type=" button">contenu shopping</Link>
      </div>
      <div className="col-md-6 mb-2 ">
        <div className="d-flex justify-content-evenly">
          <p className="p-2">sup total </p>
          <span className="p-2">${total}</span>
        </div>
        <div className="d-flex justify-content-evenly border-bottom ">
          <p className="p-2">shipping </p>
          <span className="p-2">$5.00</span>
        </div>
        <div className="d-flex  justify-content-evenly border-bottom total ">
          <p className="p-2 font-weight-bold">grand total</p>
          <span className=" p-2 font-weight-bold">${total + 5}</span>
        </div>
        <div className="d-flex justify-content-evenly mt-3">
          <Link className="btn btton mainbkcolor" to={"/order"}>Proceed To get Order</Link>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
