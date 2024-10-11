import { GetServerSideProps } from 'next';
import Card from '../components/molecules/Card';
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
      <div className="row">
        <div className="col-md-6">
          <div className="section-1">
            풀타임, 파트타임
          </div>
          <div className="section-2">
            
          </div>
        </div>
        <div className="col-md-6">
        {data.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            job={item.job}
            experience={item.experience}
            skills={item.skills}
            salary={item.salary}
            imgSrc={item.imgSrc}
          />
        ))}
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