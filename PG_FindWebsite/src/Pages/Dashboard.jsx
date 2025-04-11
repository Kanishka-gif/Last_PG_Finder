import { useState,useEffect} from 'react';
import { Tabs, Card, List, Button, Avatar } from 'antd';
import Pic1 from "../assets/pic1forPG.webp";
import Pic2 from "../assets/pic2forPG.avif";
import Pic3 from "../assets/pic3forPG.jpg";
import {useNavigate } from 'react-router';


const { TabPane } = Tabs;

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  // Saved PGs
  const [savedPGs, setSavedPGs] = useState([
    {
      id: 1,
      name: 'Luxury PG in Delhi',
      location: 'Delhi',
      rent: 8000,
      image: Pic1,
    },
    {
      id: 2,
      name: 'Budget PG in Mumbai',
      location: 'Mumbai',
      rent: 5000,
      image: Pic2
    },
    {
      id: 3,
      name: 'Premium PG in Bangalore',
      location: 'Bangalore',
      rent: 12000,
      image: Pic3
    },
  ]);

  // Booking History
  const [bookingHistory, setBookingHistory] = useState([
    {
      id: 101,
      pgName: 'Luxury PG in Delhi',
      location: 'Delhi',
      date: '2025-03-10',
      status: 'Confirmed',
    },
    {
      id: 102,
      pgName: 'Budget PG in Mumbai',
      location: 'Mumbai',
      date: '2025-02-28',
      status: 'Pending',
    },
    {
      id: 103,
      pgName: 'Premium PG in Bangalore',
      location: 'Bangalore',
      date: '2025-03-03',
      status:'Confirmed',
    },
  ]);

  // Inquiry Status
  const [inquiries, setInquiries] = useState([
    {
      id: 201,
      pgName: 'Luxury PG in Delhi',
      inquiryDate: '2025-03-05',
      response: 'Not Responded',
    },
    {
      id: 202,
      pgName: 'Budget PG in Mumbai',
      inquiryDate: '2025-02-22',
      response: 'Responded',
    },
    {
      id: 203,
      pgName: 'Premium PG in Bangalore',
      inquiryDate:'2025-02-03',
      response: 'Not Responded',
    },
  ]);

  // Remove PG from Saved List
  const handleRemove = (id) => {
    setSavedPGs(savedPGs.filter((pg) => pg.id !== id));
  };

  return (
    <>
    

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">User Dashboard</h2>

          {/* Tabs */}
          <Tabs defaultActiveKey="1">
            {/* Profile Section */}
            <TabPane tab="Profile" key="1">
              <Card>
                <p><strong>Name:</strong> Kanishka Gupta</p>
                <p><strong>Email:</strong> kanishkagupta@example.com</p>
                <p><strong>Phone:</strong> +91 7017109466</p>
                <Button type="primary" className="mt-4">
                  Edit Profile
                </Button>
              </Card>
            </TabPane>

            {/* Saved Listings */}
            <TabPane tab="Saved PGs" key="2">
              <List
                itemLayout="horizontal"
                dataSource={savedPGs}
                renderItem={(pg) => (
                  <List.Item
                    actions={[
                      <Button danger onClick={() => handleRemove(pg.id)}>
                        Remove
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={pg.image} />}
                      title={pg.name}
                      description={`Location: ${pg.location} | Rent: ₹${pg.rent}`}
                    />
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Booking History" key="3">
              <List
                itemLayout="horizontal"
                dataSource={bookingHistory}
                renderItem={(booking) => (
                  <List.Item>
                    <List.Item.Meta
                      title={booking.pgName}
                      description={`Location: ${booking.location} | Date: ${booking.date} | Status: ${booking.status}`}
                    />
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Inquiry Status" key="4">
              <List
                itemLayout="horizontal"
                dataSource={inquiries}
                renderItem={(inquiry) => (
                  <List.Item>
                    <List.Item.Meta
                      title={inquiry.pgName}
                      description={`Date: ${inquiry.inquiryDate} | Response: ${inquiry.response}`}
                    />
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>
        </div>
      </div>

     
    </>
  );
};

export default Dashboard;