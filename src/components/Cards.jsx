
//import PropTypes from 'prop-types';

//function Cards({ item }) {
//  return (
//    <>
//      <div>
//        <div className="card bg-base-100 w-96 shadow-xl">
//          <figure>
//            <img
//              src={item.image}
//              alt="Plant"
//            />
//          </figure>
//          <div className="card-body">
//            <h2 className="card-title">
//              {item.name}
//              <div className="badge badge-secondary">{item.category}</div>
//            </h2>
//            <p>{item.title}</p>
//            <div className="card-actions justify-end">
//              <div className="badge badge-outline">Fashion</div> 
//              <div className="badge badge-outline">Products</div>
//            </div>
//          </div>
//        </div>
//      </div>
//    </>
//  );
//}

//Cards.propTypes = {
//  item: PropTypes.shape({
//    image: PropTypes.string.isRequired,
//    name: PropTypes.string.isRequired,
//    category: PropTypes.string.isRequired,
//    title: PropTypes.string,
//  }).isRequired,
//};

//export default Cards;
import React from "react";
import PropTypes from 'prop-types';

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Plant" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Cards.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Cards;
