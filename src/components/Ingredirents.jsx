import React from 'react';
import { paginate } from '../utils/paginate';

const Ingredients = ({
  smoothies,
  deleteSmoothie,
  pageSize,
  currentPage,
  searchQuery,
}) => {
  console.log(smoothies);

  let filtered = smoothies;

  if (searchQuery) {
    filtered = smoothies.filter((m) =>
      m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  }

  const allSmoothies = paginate(filtered, currentPage, pageSize);

  return (
    <React.Fragment>
      <div className='smoothies-list'>
        {allSmoothies.map((smoothie) => {
          return (
            <div className='card mt-4' key={smoothie.id}>
              <div className='card-body'>
                <div className='smootie-title'>
                  <h4 className='mb-4'>{smoothie.title}</h4>

                  <button
                    onClick={() => deleteSmoothie(smoothie)}
                    className='btn btn-sm btn-danger'
                  >
                    X
                  </button>
                </div>
                {smoothie.ingredients.map((ingredient, index) => {
                  return (
                    <ul key={index}>
                      <li>{ingredient}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Ingredients;
