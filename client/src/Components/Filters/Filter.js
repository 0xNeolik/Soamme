import { sortOptions } from "../../Const/Const";
import React from "react";

function TypeSellerFilter(props) {
  const handleShortFilterChange = (e) => {
    let valueShort = e.currentTarget.checked;
    props.getShort(valueShort);
  };
  return (
    <div>
      <div>
        <section aria-labelledby="products-heading" className="mx-12">
          <div>
            <form className="block">
              <input
                id="Alfabetico"
                onChange={handleShortFilterChange}
                type="checkbox"
                className="h-4 w-4 border-white rounded text-indigo-500"
              />
              <label
                htmlFor="Alfabetico"
                className="ml-3 text-sm text-indigo-500 "
              >
                Orden alfabetico
              </label>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TypeSellerFilter;
