import { Link } from "react-router";
import { Layout, Card, Typography, Button, Row, Col } from 'antd';

import Pic1 from "../assets/pic1forPG.webp";
import Pic2 from "../assets/pic2forPG.avif";
import Pic3 from "../assets/pic3forPG.jpg";
import pic3forPG from "../assets/Background2.jpg";

const { Content } = Layout;
const { Title, p } = Typography;

const Home = () => {
  return (
    <Layout>   
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${pic3forPG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <Title level={1} className="!text-white !mb-4">
            Find Your Perfect PG
          </Title>
          <p className="!text-lg !text-white">
            Explore verified PGs with top amenities.
          </p>
          <Link to="/listings">
            <Button type="primary" size="large" className="bg-blue-500 hover:bg-blue-700">
              Explore Now
            </Button>
            </Link>
          
        </div>
      </div>

      {/* Featured Listings */}
      <Content className="container mx-auto my-12 px-4">
        <Title level={2} className="text-center !text-3xl !font-bold !mb-6">
          Featured PGs
        </Title>
        <Row gutter={[16, 16]} justify="center">
          {/* PG 1 */}
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img src={Pic1} alt="Luxury PG in Delhi" className="object-cover h-60" />}
            >
              <Title level={3} className="!text-xl !font-semibold">
                Luxury PG in Delhi
              </Title>
              <p className="!text-gray-600">
                ₹8000/month | AC, WiFi, Food
              </p>
            </Card>
          </Col>

          {/* PG 2 */}
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img src={Pic2} alt="Budget PG in Mumbai" className="object-cover h-60" />}
            >
              <Title level={3} className="!text-xl !font-semibold">
                Budget PG in Mumbai
              </Title>
              <p className="!text-gray-600">
                ₹5000/month | Non-AC, WiFi
              </p>
            </Card>
          </Col>

          {/* PG 3 */}
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img src={Pic3} alt="Premium PG in Bangalore" className="object-cover h-60" />}
            >
              <Title level={3} className="!text-xl !font-semibold">
                Premium PG in Bangalore
              </Title>
              <p className="!text-gray-600">
                ₹12000/month | AC, Gym, Pool
              </p>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;



