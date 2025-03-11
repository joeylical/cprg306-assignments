import Link from "next/link";
import range from "./range";

const minWeek = 2;
const maxWeek = 10;
const curWeek = 7;

const weekLink = i => (
  <li
    key={`week${i}`} 
    className="justify-between gap-x-6 py-2 ml-5">
    <Link 
      href={i <= curWeek?`/week-${i}`:'#'} 
      className={"flex min-w-0 gap-x-4 "+((i<=curWeek)?'text-sky-800':'text-stone-500')}>
      Week {i}
    </Link>
  </li>);

export default function Home() {
  return (
    <>
      <h1>
        CPRG306: Web Development 2 - Assignments
      </h1>
      <br/>
      <h2>Assignments:</h2>
      <ul className="list-disc block justify-between gap-x-6 py-2">
        {range(minWeek, maxWeek+1).map(weekLink)}
      </ul>
    </>
  );
}
