import { generatePagination } from "../lib/pagination";
import Link from "next/link";

type Props = {
  current: number;
  pages: number;
};
export default function Pagination({ current, pages }: Props) {
  const pagination = generatePagination(current, pages);
  return (
    <ul>
      {pagination.map((it, i) => (
        <li key={i}>
          {it.excerpt ? (
            "..."
          ) : (
            <Link
              href="/posts/page/[page]"
              as={it.page === 1 ? "/posts/" : "/posts/page/" + it.page}
            >
              <a className={it.page === current ? "active" : null}>{it.page}</a>
            </Link>
          )}
        </li>
      ))}
      <style jsx>{`
        ul {
          list-style: none;
          margin: 3rem 0 0 0;
          padding: 0 0 0 30px;
        }
        li {
          display: inline-block;
          margin-right: 1em;
          font-weight: 500;
          color: #9b9b9b;
          font-size: 1.5rem;
        }
        a.active {
          color: #111;
        }
      `}</style>
    </ul>
  );
}