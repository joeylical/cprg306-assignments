export default function Item({name, quantity, category, selector, deletor}) {
  return (
    <li key={name} className="flex p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 group" onClick={selector?()=>selector(name):()=>{}}>
      <div className="flex-1">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="text-sm">
          Buy {quantity} in {category}
        </div>
      </div>
      <button
        className="flex-none -m-2 text-center group-hover:text-white group-hover:bg-orange-400 p-4 bg-slate-900 text-slate-900"
        onClick={e=>{
          e.stopPropagation();
          deletor && deletor();
        }} >
        Delete
      </button>
    </li>
  );
}
