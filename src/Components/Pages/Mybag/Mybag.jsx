/** @format */
import { useState, useEffect } from "react";
import ShopItem from "../../ShopItem/ShopItem";
import "./Mybag.css";
const Mybag = ({ games, refrence }) => {
  const [total, setTotal] = useState(0);
  const handletotalpaymeny = () => {
    return games
      .map((game) => game.price * (1 - game.discount))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      .toFixed(2)
  };

  useEffect(() => {
    setTotal(handletotalpaymeny());
  }, [games]);

  return (
    <section id='bag' className='bag' ref={refrence}>
      <div className='container-fluid'>
        <div className='row mb-3'></div>
      </div>
      {games.length === 0 ? (
        <h2>Your Bag is Empty</h2>
      ) : (
        <>
          <div className='row'>
            <div className='table-responsive'>
              <table className='shopBagTable table table-borderless aligm-middle'>
                <thead>
                  <tr>
                    <th scope='col'>No.</th>
                    <th scope='col'>Preview</th>
                    <th scope='col'>Game</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Discount</th>
                    <th scope='col'>Payment</th>
                    <th scope='col'>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {games.map((game, index) => (
                    <ShopItem index={index} key={game._id} game={game} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className='row d-flex justify-content-between mt-5'>
            <div className='col-lg-2 d-flex align-items-center'>
              <p className='itemcount'>Total Items : {games.length}</p>
            </div>
            <div className='col-lg-10 d-flex justify-content-end'>
              <div className='payment'>
                Total : {total}
                <a href='#'>
                  Check Out <i className='bi bi-wallet-fill'></i>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Mybag;
