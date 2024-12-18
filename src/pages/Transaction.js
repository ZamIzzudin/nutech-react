/** @format */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HistoryAction } from "../utils/reducer/transaction";

import MiniProfile from "../components/MiniProfile";
import UserBalance from "../components/UserBalance";
import TransactionCard from "../components/TransactionCard";

export default function Transaction() {
  const [page, setPage] = useState(1);
  const { history_transaction } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HistoryAction.getHistoryTransaction(page));
  }, [dispatch, page]);

  function handlePagination() {
    if (history_transaction.length === 5) {
      setPage(page + 1);
    } else {
      if (page > 1) {
        setPage(page - 1);
      } else {
        setPage(1);
      }
    }
  }

  return (
    <main className="py-8">
      <section className="grid sm:grid-cols-2 sm:grid-rows-1 grid-cols-1 grid-rows-2 gap-3">
        <MiniProfile />
        <UserBalance />
      </section>
      <section className="my-8">
        <h1 className="text-xl font-medium">Semua Transaksi</h1>
      </section>
      <section className="flex flex-col gap-3">
        {history_transaction.map((transaction) => (
          <TransactionCard data={transaction} />
        ))}
      </section>
      <section className="flex justify-center gap-5 my-5 items-center">
        <button
          className="text-red-500 font-medium"
          onClick={() => handlePagination()}
        >
          {history_transaction.length < 5 && page > 1 && "Show Less"}
          {history_transaction.length === 5 && "Show More"}
          {history_transaction.length < 5 && page === 1 && null}
        </button>
      </section>
    </main>
  );
}
