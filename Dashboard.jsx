// import React, { useEffect, useState } from "react";
// import { Card, Tabs, Row, Col, message } from "antd";
// import axios from "axios";

// const { TabPane } = Tabs;

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const [listings, setListings] = useState([]);
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (!storedUser) return;
//     setUser(storedUser);

//     // ✅ Fetch Listings
//     axios
//       .get("http://localhost:3000/api/pgs")
//       .then((res) => setListings(res.data))
//       .catch(() => message.error("Failed to load PG listings"));

//     // ✅ Fetch Wishlist
//     axios
//       .get("http://localhost:3000/api/wishRotues")
//       .then((res) => setWishlist(res.data))
//       .catch(() => message.error("Failed to load wishlist"));
//   }, []);

//   const renderPGCard = (item) => (
//     <Col xs={24} sm={12} md={8} lg={6} key={item._id} className="mb-4">
//       <Card
//         hoverable
//         cover={
//           <img
//             alt={item.pgName}
//             src={
//               item.image
//                 ? `data:image/jpeg;base64,${item.image}`
//                 : "https://via.placeholder.com/300x200"
//             }
//             className="h-48 object-cover w-full"
//           />
//         }
//       >
//         <Card.Meta
//           title={item.pgName}
//           description={
//             <div>
//               <p className="text-gray-600">{item.location}</p>
//               <p className="text-blue-500 font-semibold">₹{item.rent}/month</p>
//             </div>
//           }
//         />
//       </Card>
//     </Col>
//   );

//   return (
//     <div className="p-4 max-w-6xl mx-auto">
//       <Card title="User Dashboard" bordered={false}>
//         <Tabs defaultActiveKey="1">
//           {/* ✅ USER INFO */}
//           <TabPane tab="My Info" key="1">
//             {user ? (
//               <div className="space-y-2 text-base">
//                 <p>
//                   <strong>Username:</strong> {user.username}
//                 </p>
//                 <p>
//                   <strong>Email:</strong> {user.email}
//                 </p>
//                 <p>
//                   <strong>Role:</strong> {user.role}
//                 </p>
//               </div>
//             ) : (
//               <p>No user info found.</p>
//             )}
//           </TabPane>

//           {/* ✅ LISTINGS */}
//           <TabPane tab="My Listings" key="2">
//             <Row gutter={[16, 16]}>
//               {listings.length > 0 ? (
//                 listings.map((pg) => renderPGCard(pg))
//               ) : (
//                 <p>No listings found.</p>
//               )}
//             </Row>
//           </TabPane>

//           {/* ✅ WISHLIST */}
//           <TabPane tab="My Wishlist" key="3">
//             <Row gutter={[16, 16]}>
//               {wishlist.length > 0 ? (
//                 wishlist.map((pg) => renderPGCard(pg))
//               ) : (
//                 <p>No PGs in wishlist yet.</p>
//               )}
//             </Row>
//           </TabPane>
//         </Tabs>
//       </Card>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import { Card, Tabs, Row, Col, message, Table } from "antd";
import axios from "axios";

const { TabPane } = Tabs;

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [listings, setListings] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) return;
    setUser(storedUser);

    // ✅ Fetch all users
    axios
      .get("http://localhost:3000/api/auth/users")
      .then((res) => setUsers(res.data))
      .catch(() => message.error("Failed to load users"));

    // ✅ Fetch Listings
    axios
      .get("http://localhost:3000/api/pgs")
      .then((res) => setListings(res.data))
      .catch(() => message.error("Failed to load PG listings"));

    // ✅ Fetch Wishlist
    axios
      .get("http://localhost:3000/api/wishRotues")
      .then((res) => setWishlist(res.data))
      .catch(() => message.error("Failed to load wishlist"));
  }, []);

  const renderPGCard = (item) => (
    <Col xs={24} sm={12} md={8} lg={6} key={item._id} className="mb-4">
      <Card
        hoverable
        cover={
          <img
            alt={item.pgName}
            src={
              item.image
                ? `data:image/jpeg;base64,${item.image}`
                : "https://via.placeholder.com/300x200"
            }
            className="h-48 object-cover w-full"
          />
        }
      >
        <Card.Meta
          title={item.pgName}
          description={
            <div>
              <p className="text-gray-600">{item.location}</p>
              <p className="text-blue-500 font-semibold">₹{item.rent}/month</p>
            </div>
          }
        />
      </Card>
    </Col>
  );

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <Card title="User Dashboard" bordered={false}>
        <Tabs defaultActiveKey="1">
          {/* ✅ USER INFO TAB SHOWS ALL USERS */}
          <TabPane tab="All Users" key="1">
            <Table
              dataSource={users}
              columns={columns}
              rowKey="_id"
              pagination={{ pageSize: 10 }}
            />
          </TabPane>

          {/* ✅ LISTINGS */}
          <TabPane tab="My Listings" key="2">
            <Row gutter={[16, 16]}>
              {listings.length > 0 ? (
                listings.map((pg) => renderPGCard(pg))
              ) : (
                <p>No listings found.</p>
              )}
            </Row>
          </TabPane>

          {/* ✅ WISHLIST */}
          <TabPane tab="My Wishlist" key="3">
            <Row gutter={[16, 16]}>
              {wishlist.length > 0 ? (
                wishlist.map((pg) => renderPGCard(pg))
              ) : (
                <p>No PGs in wishlist yet.</p>
              )}
            </Row>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default Dashboard;


