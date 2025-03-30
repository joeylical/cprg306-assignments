import Item from "./item";

export default function ItemList({itemArray, sortBy, selector, itemDeleter }) {
  switch (sortBy) {
    case 'name':
      itemArray.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'category':
    case 'group':
      itemArray.sort((a, b) => a.category.localeCompare(b.category));
      break;
  }

  const append = (arr, item, ret) => {
    arr.push(item);
    return ret;
  };

  return sortBy === 'group' ? (
    itemArray.reduce((a, b) => (a.length > 0 && a.at(-1)[0].category === b.category ? append(a.at(-1), b, a) : append(a, [b], a)), []).map(item => (
      <div key={item[0].category} >
        <h2 className="capitalize text-xl">{item[0].category}</h2>
        <ul className="text-sky-100">
          {item.map(it => (
            <Item key={it.id} selector={selector} deletor={()=>itemDeleter(it)} {...it} ></Item>
          ))}
        </ul>
      </div>
    ))
  ) : (
    <ul className="text-sky-100">
      {itemArray.map(item => (
        <Item key={item.id} selector={selector} deletor={()=>itemDeleter(item)} {...item}></Item>
      ))}
    </ul>
  );
}
