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
  const [principal, setPrincipal] = useState();
  const [rate, setRate] = useState();
  const [tenure, setTenure] = useState();
  const [unit, setUnit] = useState("months");
  const [showSchedule, setShowSchedule] = useState(false);

  const months = unit === "years" ? Math.round((Number(tenure) || 0) * 12) : Number(tenure) || 0;

  function reset() {
    setPrincipal("");
    setRate("");
    setTenure("");
    setUnit("");
    setShowSchedule(false);
  }

  const { emi, totalInterest, totalPayment } = React.useMemo(
    () => computeEmi({ principal: Number(principal), annualRatePct: Number(rate), months }),
    [principal, rate, months]
  );
  const schedule = React.useMemo(
    () => (emi > 0 ? buildSchedule({ principal: Number(principal), annualRatePct: Number(rate), months, emi }) : []),
    [emi, principal, rate, months]
  );

  return (
    <motion.div
      className="w-full bg-neutral-50 text-neutral-900 flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 18 }}
    >
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur w-1/2 items-center mx-auto">
        <motion.div
          className="mx-auto w-full px-2 sm:px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.1 }}
        >
          <motion.div className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.2 }}>
            <motion.div className="p-2 rounded-2xl bg-yellow-600 text-white shadow" initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.3 }}>
              <FaCalculator size={22} />
            </motion.div>
            <motion.h1 className="text-base xs:text-lg sm:text-2xl font-semibold" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.35 }}>
              EMI Calculator <span className="text-yellow-600">(₹)</span>
            </motion.h1>
          </motion.div>
          <motion.button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-xs sm:text-sm hover:bg-yellow-50 active:scale-[.98] transition w-full sm:w-auto justify-center"
            aria-label="Reset"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.4 }}
          >
            <FiRefreshCw /> Reset
          </motion.button>
        </motion.div>
      </header>

      <main className="w-1/2 flex-1 mx-auto p-1 xs:p-2 sm:p-4 grid gap-4 sm:gap-6 md:grid-cols-2">
        <motion.section
          layout
          className="rounded-2xl bg-white shadow-lg border border-yellow-100 p-3 xs:p-4 sm:p-6 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.15 }}
        >
            <motion.h2 className="text-lg font-bold mb-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, type: "spring", stiffness: 80 }}>Loan Details</motion.h2>
            <motion.div className="space-y-4" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <label className="mb-1 block text-sm font-medium">Loan Amount (₹)</label>
                <div className="flex rounded-2xl border border-yellow-200 focus-within:ring-2 focus-within:ring-yellow-500/30 bg-yellow-50">
                  <input
                    type="number"
                    inputMode="decimal"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="w-full rounded-2xl px-3 py-2 outline-none bg-transparent text-base"
                    placeholder="e.g., 500000"
                    min={0}
                  />
                </div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <label className="mb-1 block text-sm font-medium">Interest Rate (p.a. %)</label>
                <div className="flex rounded-2xl border border-yellow-200 focus-within:ring-2 focus-within:ring-yellow-500/30 bg-yellow-50">
                  <input
                    type="number"
                    inputMode="decimal"
                    step="0.01"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="w-full rounded-2xl px-3 py-2 outline-none bg-transparent text-base"
                    placeholder="e.g., 9.5"
                    min={0}
                  />
                </div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <div className="mb-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <label className="block text-sm font-medium">Tenure</label>
                  <div className="flex items-center gap-2 text-xs">
                    <button
                      onClick={() => setUnit("months")}
                      className={`rounded-full px-3 py-1 border transition ${unit === "months" ? "bg-yellow-600 text-white border-yellow-600" : "hover:bg-yellow-50"}`}
                    >
                      Months
                    </button>
                    <button
                      onClick={() => setUnit("years")}
                      className={`rounded-full px-3 py-1 border transition ${unit === "years" ? "bg-yellow-600 text-white border-yellow-600" : "hover:bg-yellow-50"}`}
                    >
                      Years
                    </button>
                  </div>
                </div>
                <div className="flex rounded-2xl border border-yellow-200 focus-within:ring-2 focus-within:ring-yellow-500/30 bg-yellow-50">
                  <input
                    type="number"
                    inputMode="numeric"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-full rounded-2xl px-3 py-2 outline-none bg-transparent text-base"
                    placeholder={unit === "years" ? "e.g., 5 (years)" : "e.g., 60 (months)"}
                    min={1}
                  />
                </div>
                <p className="mt-1 text-xs text-neutral-500">{unit === "years" ? `${months} months` : `${tenure || 0} months`}</p>
              </motion.div>

              <motion.div className="flex gap-2 text-sm text-neutral-700 bg-yellow-50 border border-yellow-200 p-3 rounded-2xl" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <FiInfo className="mt-0.5 shrink-0 text-yellow-600" />
                <p>
                  EMI uses the standard formula with monthly compounding. Edit values to see results update instantly.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

        <motion.section
          layout
          className="rounded-2xl bg-white shadow-lg border border-yellow-100 p-3 xs:p-4 sm:p-6 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.25 }}
        >
            <motion.h2 className="text-lg font-bold mb-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, type: "spring", stiffness: 80 }}>Results</motion.h2>
            <motion.div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <ResultCard label="Monthly EMI" value={`₹ ${formatINR(emi)}`} highlight />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <ResultCard label="Total Interest" value={`₹ ${formatINR(totalInterest)}`} />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <ResultCard label="Total Payment" value={`₹ ${formatINR(totalPayment)}`} />
              </motion.div>
            </motion.div>

            <div className="mt-5 xs:mt-6">
              <motion.button
                onClick={() => setShowSchedule((s) => !s)}
                className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-xs sm:text-sm hover:bg-yellow-50 active:scale-[.98] transition w-full sm:w-auto justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
              >
                {showSchedule ? <FiChevronUp /> : <FiChevronDown />}
                {showSchedule ? "Hide" : "Show"} Amortization Schedule
              </motion.button>

              <AnimatePresence initial={false}>
                {showSchedule && (
                  <motion.div
                    key="schedule"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <motion.div className="mt-4 max-h-80 xs:max-h-96 overflow-x-auto overflow-y-auto rounded-2xl border border-yellow-100 bg-yellow-50 w-full">
                      <table className="w-full text-xs sm:text-sm">
                        <thead className="bg-yellow-100 text-yellow-700 sticky top-0">
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
                            <tr key={row.month} className="odd:bg-white even:bg-yellow-50">
                              <td className="px-3 py-2">{row.month}</td>
                              <td className="px-3 py-2 text-right">₹ {formatINR(row.payment)}</td>
                              <td className="px-3 py-2 text-right">₹ {formatINR(row.principal)}</td>
                              <td className="px-3 py-2 text-right">₹ {formatINR(row.interest)}</td>
                              <td className="px-3 py-2 text-right">₹ {formatINR(row.balance)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </motion.div>
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
      className={`rounded-2xl border p-3 xs:p-4 shadow-sm flex flex-col items-center text-center min-w-0 w-full ${
        highlight ? "bg-yellow-50 border-yellow-200" : "bg-white"
      }`}
    >
      <p className="text-xs uppercase tracking-wide text-neutral-500 break-words">{label}</p>
      <p className={`mt-1 text-base xs:text-lg font-semibold break-words ${highlight ? "text-yellow-700" : "text-neutral-900"}`}>{value}</p>
    </div>
  );
}
