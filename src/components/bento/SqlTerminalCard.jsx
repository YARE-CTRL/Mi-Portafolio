const SQL_QUERY = `SELECT
  c.customer_segment,
  SUM(oi.revenue) AS total_revenue
FROM orders o
JOIN customers c USING (customer_id)
JOIN order_items oi USING (order_id)
WHERE o.created_at >= NOW() - INTERVAL '30 days'
GROUP BY 1, 2
ORDER BY 3 DESC;`;

const RESULT_LINE = "Query returned 2,847 rows in 94ms";
const PLAN_LINE =
  "Execution plan: Index Scan on orders (cost=0.42..1.24 rows=1)";
const BUFFER_LINE = "Buffers: shared hit=3 read=1 · Planning time: 0.8ms";

export default function SqlTerminalCard() {
  return (
    <article className="bento-card bg-black border border-zinc-800 p-0 flex flex-col h-full overflow-hidden">
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/40">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
        <span className="font-mono text-xs text-zinc-600 ml-2 tracking-wide">
          psql · production_db · query_optimizer
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-4 flex flex-col gap-3 flex-1 overflow-auto">
        {/* Prompt */}
        <p className="font-mono text-xs text-zinc-400">
          <span className="text-green-400">$</span>{" "}
          psql -d production_db -U sre_analyst
        </p>

        {/* SQL block */}
        <pre className="font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
          {SQL_QUERY}
        </pre>

        {/* Result */}
        <p className="font-mono text-xs text-green-400 font-medium">
          {RESULT_LINE}
        </p>

        {/* Execution plan */}
        <div className="flex flex-col gap-1 border-t border-zinc-800 pt-3">
          <p className="font-mono text-xs text-zinc-600">{PLAN_LINE}</p>
          <p className="font-mono text-xs text-zinc-700">{BUFFER_LINE}</p>
        </div>
      </div>
    </article>
  );
}
