import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './assets/css/App.css'
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/emi-calculator" element={<EmiCalculator />} /> */}
        {/* <Route path="/investment-planner" element={<InvestmentPlanner />} /> */}
        {/* <Route path="/expense-tracker" element={<ExpenseTracker />} /> */}
        {/* <Route path="/financial-goals" element={<FinancialGoals />} /> */}
        {/* <Route path="/budget-planner" element={<BudgetPlanner />} /> */}
        {/* <Route path="/retirement-planner" element={<RetirementPlanner />} /> */}
        {/* <Route path="/tax-calculator" element={<TaxCalculator />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;