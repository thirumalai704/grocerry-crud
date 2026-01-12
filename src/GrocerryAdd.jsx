import { Fragment, useState } from "react";
const GrocerryAdd = () => {
  let [item, setItem] = useState("");

  let [list, setList] = useState([]);

  let [edit, setEdit] = useState(null);

  let handleChange = (e) => {
    e.target;
    console.log(e.target.value);
    setItem(e.target.value);
  };

  let handleUpdate = (index) => {
    setItem(list[index]);
    setEdit(index);
  };

  let handleDelete = (x) => {
    console.log(x);

    setList(list.filter((_, index) => index != x));
  };

  let handleSumbit = (e) => {
    e.preventDefault();
    if (item == "") {
      alert("enter some value");
    }

    if (edit !== null) {
      setList((prev) => prev.map((val, i) => (i === edit ? item : val)));
      console.log(list);

      setItem("");
      setEdit(null);
    } else {
      setList([...list, item]);
      setItem("");
      console.log(list);
    }
  };

  return (
    <>
      <h1 className="text-center mt-20 text-4xl text-red-500 font-medium">
        Add Grocerry Items
      </h1>
      <form
        className="flex items-center flex-col mt-10"
        onSubmit={handleSumbit}
      >
        <div className="mt-8 flex gap-x-20">
          <input
            className="ring-red-500 ring-1 ml-2 px-4 py-2 w-full outline-0 capitalize"
            type="text"
            placeholder="Enter items"
            value={item}
            onChange={handleChange}
          />

          <button className="bg-red-500 px-4 py-2 text-white w-48">
            Add Items
          </button>
        </div>
      </form>

      {/* display list */}

      <div className="flex justify-center mt-10 ">
        <table className="border-spacing-5 text-center  w-4xl border">
          <thead>
            <tr className="border">
              <th className="font-medium border text-red-700 p-2">Item No</th>
              <th className="font-medium border  text-green-700 p-2">
                Items Name
              </th>
              <th className="font-medium border  text-orange-700 p-2">
                Update Items
              </th>
              <th className="font-medium border  text-rose-700 p-2">
                Delete Items
              </th>
            </tr>
          </thead>

          <tbody>
            {list.map((value, index) => {
              return (
                <Fragment key={index}>
                  <tr className=" w-full">
                    <td className="mr-10 border text-red-600">{index + 1}</td>

                    <td className="border text-green-600 capitalize">
                      {value}
                    </td>
                    <td
                      className="border text-orange-700 cursor-pointer"
                      onClick={() => handleUpdate(index)}
                    >
                      Update
                    </td>
                    <td
                      onClick={() => handleDelete(index)}
                      className="border text-rose-700 cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GrocerryAdd;
