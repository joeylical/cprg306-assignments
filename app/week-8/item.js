export default function Item({name, quantity, category, selector}) {
  return (
    <li key={name} className="p-2 m-4 bg-slate-900 max-w-sm" onClick={selector?()=>selector(name):()=>{}}>
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="text-sm">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
