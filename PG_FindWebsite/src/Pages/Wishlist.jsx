// import React from "react";
// import { Card, Typography, Empty } from "antd";

// import Pic1 from "../assets/pic1forPG.webp";
// import room1 from "../assets/room1.jpg";
// import Pic2 from "../assets/pic2forPG.avif";
// import room3 from "../assets/room3.jpg";

// const { Title, Paragraph } = Typography;

// // Dummy Wishlist PGs (abhi ke liye hardcoded)
// const wishlistData = [
//   {
//     id: 1,
//     name: "Luxury PG in Delhi",
//     rent: "₹8000/month",
//     location: "South Delhi, Near Metro",
//     image: Pic1,
//   },
//   {
//     id: 2,
//     name: "Budget PG in Mumbai",
//     rent: "₹5000/month",
//     location: "Andheri West, Near Bus Stand",
//     image: room3,
//   },
// ];

// const Wishlist = () => {
//   return (
//     <div className="pt-20 px-6 lg:px-20">
//       <Title level={2} className="mb-6 text-blue-600">My Wishlist</Title>

//       {wishlistData.length === 0 ? (
//         <Empty description="No PGs in Wishlist yet" />
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {wishlistData.map((pg) => (
//             <Card
//               key={pg.id}
//               hoverable
//               cover={
//                 <img
//                   src={pg.image}
//                   alt={pg.name}
//                   className="h-[250px] object-cover"
//                 />
//               }
//               className="rounded-xl shadow-md border-none"
//             >
//               <Title level={4}>{pg.name}</Title>
//               <Paragraph className="text-green-600 font-semibold">{pg.rent}</Paragraph>
//               <Paragraph className="text-gray-600">{pg.location}</Paragraph>
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Wishlist;


import React,{useEffect} from "react";
import { Card, Typography, Empty } from "antd";
import { useWishlist } from "../context/WishlistContext"; 
import {useNavigate } from 'react-router';

const { Title, Paragraph } = Typography;

const Wishlist = () => {
  const { wishlist } = useWishlist(); // ✅ get wishlist from context
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="pt-20 px-6 lg:px-20 min-h-screen">
      <Title level={2} className="mb-6 text-blue-600">My Wishlist</Title>

      {wishlist.length === 0 ? (
        <Empty description="No PGs in Wishlist yet" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((pg, index) => (
            <Card
              key={`${pg.id}-${index}`}
              hoverable
              cover={
                <img
                  src={pg.image}
                  alt={pg.name}
                  className="h-[250px] object-cover"
                />
              }
              className="rounded-xl shadow-md border-none"
            >
              <Title level={4}>{pg.name}</Title>
              <Paragraph className="text-green-600 font-semibold">{pg.rent}</Paragraph>
              <Paragraph className="text-gray-600">{pg.location}</Paragraph>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

