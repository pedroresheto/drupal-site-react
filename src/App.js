
import './App.css';
import Competencies from './components/Competencies';
import Header from './components/Header'
import Support from './components/Support';
import Laptop from './components/Laptop';
import Rates from './components/Rates'
import QuickTasks from './components/QuickTasks';
import Team from './components/Team';
import LastCases from './components/LastCases'
import Reviews from './components/Reviews';
import WorkWithUs from './components/WorkWithUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ReviewsSlide from './components/ReviewsSlide';
import ModalForm from './components/ModalForm'
import { useSelector } from 'react-redux';

function App() {
  const isModal = useSelector((state)=> state.state.modal)
  return (
    <div className="App">
      {isModal? <ModalForm /> : ''}
      <Navbar />
      <Header />
      <Competencies />
      <Support />
      <Laptop />
      <Rates />
      <QuickTasks />
      <Team />
      <LastCases />
      <Reviews />
      <WorkWithUs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
