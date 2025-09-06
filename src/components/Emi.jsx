import React, { useMemo, useState } from "react";
import { FiRefreshCw, FiInfo, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaCalculator } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function formatINR(num) {
  if (!isFinite(num)) return "-";
  return num.toLocaleString("en-IN", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
}

function computeEmi({ principal, annualRatePct, months }) {
  const P = Number(principal) || 0;
  const yearlyRate = Number(annualRatePct) || 0;
  const n = Number(months) || 0;

  if (P <= 0 || yearlyRate <= 0 || n <= 0) {
    return { emi: 0, totalInterest: 0, totalPayment: 0 };
  }

  const r = yearlyRate / 12 / 100;
  const pow = Math.pow(1 + r, n);
  const emi = (P * r * pow) / (pow - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - P;

  return { emi, totalInterest, totalPayment };
}

function buildSchedule({ principal, annualRatePct, months, emi }) {
  const schedule = [];
  let balance = principal;
  const r = (annualRatePct / 100) / 12;
  for (let i = 1; i <= months; i++) {
    const interest = balance * r;
    const principalPaid = Math.min(emi - interest, balance);
    balance = Math.max(balance - principalPaid, 0);
    schedule.push({
      month: i,
      interest,
      principal: principalPaid,
      payment: principalPaid + interest,
      balance,
    });
    if (balance <= 0) break;
  }
  return schedule;
}

export default function Emi() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(24);
  const [unit, setUnit] = useState("months");
  const [showSchedule, setShowSchedule] = useState(false);

  const months = unit === "years" ? Math.round((Number(tenure) || 0) * 12) : Number(tenure) || 0;

  const { emi, totalInterest, totalPayment } = useMemo(
    () => computeEmi({ principal: Number(principal), annualRatePct: Number(rate), months }),
    [principal, rate, months]
  );

  const schedule = useMemo(
    () => (emi > 0 ? buildSchedule({ principal: Number(principal), annualRatePct: Number(rate), months, emi }) : []),
    [emi, principal, rate, months]
  );

  const reset = () => {
    setPrincipal(500000);
    setRate(10);
    setTenure(24);
    setUnit("months");
    setShowSchedule(false);
  };

  return (
    <motion.div
      className="min-h-screen bg-neutral-50 text-neutral-900"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-yellow-600 text-white shadow">
              <FaCalculator size={22} />
            </div>
            <h1 className="text-xl sm:text-2xl font-semibold">
              EMI Calculator <span className="text-yellow-600">(9)</span>
            </h1>
          </div>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm hover:bg-neutral-100 active:scale-[.98] transition"
            aria-label="Reset"
          >
            <FiRefreshCw /> Reset
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl p-4 grid gap-6 md:grid-cols-2">
        <motion.section
          layout
          className="rounded-2xl bg-white shadow-sm border p-4 md:p-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-lg font-semibold mb-4">Loan Details</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Loan Amount (9)</label>
              <div className="flex rounded-2xl border focus-within:ring-2 focus-within:ring-yellow-600/30">
                <input
                  type="number"
                  inputMode="decimal"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  className="w-full rounded-2xl px-4 py-2 outline-none bg-transparent"
                  placeholder="e.g., 500000"
                  min={0}
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Interest Rate (p.a. %)</label>
              <div className="flex rounded-2xl border focus-within:ring-2 focus-within:ring-yellow-600/30">
                <input
                  type="number"
                  inputMode="decimal"
                  step="0.01"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-full rounded-2xl px-4 py-2 outline-none bg-transparent"
                  placeholder="e.g., 9.5"
                  min={0}
                />
              </div>
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <label className="block text-sm font-medium">Tenure</label>
                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={() => setUnit("months")}
                    className={`rounded-full px-3 py-1 border transition ${unit === "months" ? "bg-yellow-600 text-white border-yellow-600" : "hover:bg-neutral-100"}`}
                  >
                    Months
                  </button>
                  <button
                    onClick={() => setUnit("years")}
                    className={`rounded-full px-3 py-1 border transition ${unit === "years" ? "bg-yellow-600 text-white border-yellow-600" : "hover:bg-neutral-100"}`}
                  >
                    Years
                  </button>
                </div>
              </div>
              <div className="flex rounded-2xl border focus-within:ring-2 focus-within:ring-yellow-600/30">
                <input
                  type="number"
                  inputMode="numeric"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  className="w-full rounded-2xl px-4 py-2 outline-none bg-transparent"
                  placeholder={unit === "years" ? "e.g., 5 (years)" : "e.g., 60 (months)"}
                  min={1}
                />
              </div>
              <p className="mt-1 text-xs text-neutral-500">{unit === "years" ? `${months} months` : `${tenure || 0} months`}</p>
            </div>

            <div className="flex gap-2 text-sm text-neutral-600 bg-yellow-50 border border-yellow-200 p-3 rounded-2xl">
              <FiInfo className="mt-0.5 shrink-0 text-yellow-600" />
              <p>
                EMI uses the standard formula with monthly compounding. Edit values to see results update instantly.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          layout
          className="rounded-2xl bg-white shadow-sm border p-4 md:p-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-lg font-semibold mb-4">Results</h2>

          <div className="grid sm:grid-cols-3 gap-3">
            <ResultCard label="Monthly EMI" value={`9 ${formatINR(emi)}`} highlight />
            <ResultCard label="Total Interest" value={`9 ${formatINR(totalInterest)}`} />
            <ResultCard label="Total Payment" value={`9 ${formatINR(totalPayment)}`} />
          </div>

          <div className="mt-6">
            <button
              onClick={() => setShowSchedule((s) => !s)}
              className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:bg-neutral-100 active:scale-[.98] transition"
            >
              {showSchedule ? <FiChevronUp /> : <FiChevronDown />}
              {showSchedule ? "Hide" : "Show"} Amortization Schedule
            </button>

            <AnimatePresence initial={false}>
              {showSchedule && (
                <motion.div
                  key="schedule"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 max-h-80 overflow-auto rounded-2xl border">
                    <table className="min-w-full text-sm">
                      <thead className="bg-neutral-50 text-neutral-700 sticky top-0">
                        <tr>
                          <th className="text-left px-3 py-2 font-medium">Month</th>
                          <th className="text-right px-3 py-2 font-medium">EMI</th>
                          <th className="text-right px-3 py-2 font-medium">Principal</th>
                          <th className="text-right px-3 py-2 font-medium">Interest</th>
                          <th className="text-right px-3 py-2 font-medium">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schedule.map((row) => (
                          <tr key={row.month} className="odd:bg-white even:bg-neutral-50">
                            <td className="px-3 py-2">{row.month}</td>
                            <td className="px-3 py-2 text-right">9 {formatINR(row.payment)}</td>
                            <td className="px-3 py-2 text-right">9 {formatINR(row.principal)}</td>
                            <td className="px-3 py-2 text-right">9 {formatINR(row.interest)}</td>
                            <td className="px-3 py-2 text-right">9 {formatINR(row.balance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
}

function ResultCard({ label, value, highlight = false }) {
  return (
    <div
      className={`rounded-2xl border p-4 shadow-sm ${
        highlight ? "bg-yellow-50 border-yellow-200" : "bg-white"
      }`}
    >
      <p className="text-xs uppercase tracking-wide text-neutral-500">{label}</p>
      <p className={`mt-1 text-lg font-semibold ${highlight ? "text-yellow-700" : "text-neutral-900"}`}>{value}</p>
    </div>
  );
}
