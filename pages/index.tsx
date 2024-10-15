import { GetServerSideProps } from 'next';
import Card from '../components/molecules/Card'; // Import the CardCarousel component
import Navbar from '@/components/molecules/Navbar';
import Footer from '@/components/molecules/Footer';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/sample');
  const data = await res.json();
  return { props: { data } };
};

const Home = ({ data }) => {
  return (
    <div className="container" id="grad">
      {/* Navbar */}
      <Navbar />
      {/* Navbar End */}
      {/* Main content */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            Fajar ganteng Banget
          </div>
          <div className="col-md-6">
            <Card data={data} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            
          </div>
        </div>
      </div>
      {/* Main Content End */}
      {/* Footer */}
      <Footer />
      {/* Footer End */}
    </div>
  );
};

export default Home;
