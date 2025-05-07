// import { useParams } from "react-router";
// import { Card, Typography, List, Form, Input, Button, message } from "antd";
// import { HeartOutlined, HeartFilled } from "@ant-design/icons";
// import { useWishlist } from "../context/WishlistContext";
// import Pic1 from "../assets/pic1forPG.webp";
// import Pic2 from "../assets/pic2forPG.avif";
// import Pic3 from "../assets/pic3forPG.jpg";
// import room1 from "../assets/room1.jpg";
// import room2 from "../assets/room2.jpeg";
// import room3 from "../assets/room3.jpg";
// import room4 from "../assets/room4.jpg";
// import room5 from "../assets/room5.jpeg";
// import room6 from "../assets/room6.avif";

// const { Title, Paragraph } = Typography;

// const pgDataList = [
//   {
//     id: 1,
//     name: "Luxury PG in Delhi",
//     rent: "₹8000/month",
//     facilities: ["AC", "WiFi", "Food", "24/7 Security", "Laundry"],
//     owner: "Rahul Sharma",
//     contact: "+91 98765 43210",
//     location: "South Delhi, Near Metro",
//     images: [Pic1, room1, room2],
//   },
//   {
//     id: 2,
//     name: "Budget PG in Mumbai",
//     rent: "₹5000/month",
//     facilities: ["Non-AC", "WiFi", "Shared Kitchen"],
//     owner: "Neha Jain",
//     contact: "+91 98234 56789",
//     location: "Andheri West, Near Bus Stand",
//     images: [Pic2, room3, room4],
//   },
//   {
//     id: 3,
//     name: "Premium PG in Bangalore",
//     rent: "₹12000/month",
//     facilities: ["AC", "Gym", "Swimming Pool", "CCTV"],
//     owner: "Amit Kumar",
//     contact: "+91 99876 54321",
//     location: "Electronic City, Near IT Hub",
//     images: [Pic3, room5, room6],
//   },
// ];

// const PG_Details = () => {
//   const { id } = useParams();    ///extracting id parameter from the url
//   const pgData = pgDataList.find((pg) => pg.id === parseInt(id));
//   const { wishlist, toggleWishlist } = useWishlist(); // ✅ context hook

//   if (!pgData) {
//     return (
//       <div className="pt-20 text-center text-red-500 text-2xl">
//         PG Not Found
//       </div>
//     );
//   }

//   const onFinish = (values) => {
//     console.log("Form Data:", values);
//     // API call for backend later
//   };

//   return (
//     <div className="pt-20 px-6 lg:px-20">
//       {/* PG Info Section */}
//       <Card className="mb-8 shadow-md border-none rounded-xl">
//         <Title level={2} className="text-blue-600 font-semibold">
//           {pgData.name}
//         </Title>
//         <Paragraph>{pgData.location}</Paragraph>
//         <Paragraph className="text-lg font-semibold text-green-600">
//           {pgData.rent}
//         </Paragraph>
//         <Paragraph>
//           <strong>Facilities:</strong> {pgData.facilities.join(", ")}
//         </Paragraph>
//         <Paragraph>
//           <strong>Owner:</strong> {pgData.owner} |{" "}
//           <strong>Contact:</strong> {pgData.contact}
//         </Paragraph>
//       </Card>

//       {/* ✅ Image Gallery with Wishlist Icon */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//         {pgData.images.map((img, index) => {
//           const isWished = wishlist.some(
//             (pg) => pg.id === pgData.id && pg.image === img
//           );

//           return (
//             <div key={index} className="relative">
//               <button
//                 onClick={() =>
//                   toggleWishlist({
//                     id: pgData.id,
//                     name: pgData.name,
//                     rent: pgData.rent,
//                     location: pgData.location,
//                     image: img,
//                   })
//                 }
//                 className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md transition-all"
//               >
//                 {isWished ? (
//                   <HeartFilled style={{ color: "red", fontSize: "18px" }} />
//                 ) : (
//                   <HeartOutlined className="text-gray-600 text-lg" />
//                 )}
//               </button>

//               <Card
//                 className="shadow-lg border-none rounded-xl overflow-hidden"
//                 cover={
//                   <img
//                     src={img}
//                     alt={`Image ${index + 1}`}
//                     className="w-full h-[400px] object-cover"
//                     draggable="false"
//                   />
//                 }
//               />
//             </div>
//           );
//         })}
//       </div>

//       {/* Nearby Places */}
//       <Card
//         title="Nearby Places"
//         bordered={false}
//         className="shadow-md border-none rounded-xl"
//       >
//         <List
//           size="small"
//           dataSource={[
//             "Metro Station - 500m",
//             "Supermarket - 300m",
//             "Hospital - 1km",
//             "Gym - 700m",
//           ]}
//           renderItem={(item) => <List.Item>• {item}</List.Item>}
//         />
//       </Card>

//       {/* Contact Owner Form */}
//       <Card
//         className="mt-8 shadow-md border-none rounded-xl"
//         title="Contact Owner"
//       >
//         <Form layout="vertical" onFinish={onFinish}>
//           <Form.Item
//             label="Your Name"
//             name="name"
//             rules={[{ required: true, message: "Please enter your name" }]}
//           >
//             <Input placeholder="Enter your name" className="rounded-md" />
//           </Form.Item>

//           <Form.Item
//             label="Message"
//             name="message"
//             rules={[{ required: true, message: "Please enter your message" }]}
//           >
//             <Input.TextArea
//               rows={4}
//               placeholder="Enter your message"
//               className="rounded-md"
//             />
//           </Form.Item>

//           <Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               className="bg-blue-500 hover:bg-blue-600 w-full font-semibold"
//             >
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//       </Card>
//     </div>
//   );
// };

// export default PG_Details;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Card,
  Typography,
  List,
  Form,
  Input,
  Button,
  message,
  Spin,
} from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useWishlist } from "../context/WishlistContext";
import axios from "axios";

const { Title, Paragraph } = Typography;

const PG_Details = () => {
  const { id } = useParams();
  const [pgData, setPgData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { wishlist, toggleWishlist } = useWishlist();

  // useEffect(() => {
  //   const fetchPGDetails = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:3000/api/pgs/${id}`);
  //       setPgData(res.data);
  //     } catch (error) {
  //       alert("Failed to fetch PG details.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPGDetails();
  // }, [id]);

  useEffect(() => {
    const fetchPGDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/pgs/${id}`);
        console.log("Fetched PG data:", res.data); // Log data
        setPgData(res.data);
      } catch (error) {
        alert("Failed to fetch PG details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPGDetails();
  }, [id]);

  const onFinish = (values) => {
    console.log("Form submitted:", values);
    alerts("Message sent to the owner!");
    // TODO: Add backend integration for messaging if needed
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  console.log(pgData.image);

  if (!pgData) {
    return (
      <div className="pt-20 text-center text-red-500 text-2xl">
        PG Not Found
      </div>
    );
  }

  return (
    <div className="pt-20 px-6 lg:px-20">
      {/* PG Info */}
      <Card className="mb-8 shadow-md border-none rounded-xl ">
        <Title level={2} className="text-blue-600 font-semibold">
          {pgData.name}
        </Title>
        <Paragraph>{pgData.location}</Paragraph>
        <Paragraph className="text-lg font-semibold text-green-600">
          ₹{pgData.rent}/month
        </Paragraph>
        <Paragraph>
          <strong>Security:</strong> {pgData.security}
        </Paragraph>
        <Paragraph>
          <strong>Facilities:</strong> {pgData.facilities}
        </Paragraph>
        <Paragraph>
          <strong>Contact:</strong> {pgData.contact}
        </Paragraph>
        <Paragraph>
          <strong>Image:</strong> {pgData.image}
        </Paragraph>
      </Card>

      {/* Image Gallery with Wishlist Icon */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {(pgData.image || []).map((img, index) => {
          const isWished = wishlist.some(
            (pg) => pg.id === pgData._id && pg.image === img
          );

          return (
            <div key={index} className="relative">
              <button
                onClick={() =>
                  toggleWishlist({
                    id: pgData._id,
                    name: pgData.name,
                    rent: pgData.rent,
                    location: pgData.location,
                    image: img,
                  })
                }
                className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md transition-all"
              >
                {isWished ? (
                  <HeartFilled style={{ color: "red", fontSize: "18px" }} />
                ) : (
                  <HeartOutlined className="text-gray-600 text-lg" />
                )}
              </button>

              <Card
                className="shadow-lg border-none rounded-xl overflow-hidden"
                cover={
                  <img
                    src={`http://localhost:3000${img}`}
                    alt={`Image ${index + 1}`}
                    className="w-full h-[400px] object-cover"
                    draggable="false"
                  />
                }
              />

           
            </div>
          );
        })}
      </div>

      {/* Nearby Places */}
      <Card
        title="Nearby Places"
        bordered={false}
        className="shadow-md border-none rounded-xl"
      >
        <List
          size="small"
          dataSource={[
            "Metro Station - 500m",
            "Supermarket - 300m",
            "Hospital - 1km",
            "Gym - 700m",
          ]}
          renderItem={(item) => <List.Item>• {item}</List.Item>}
        />
      </Card>

      {/* Contact Owner Form */}
      {/* <Card
        className="mt-8 shadow-md border-none rounded-xl"
        title="Contact Owner"
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Your Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" className="rounded-md" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Enter your message"
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-blue-500 hover:bg-blue-600 w-full font-semibold"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card> */}
    </div>
  );
};

export default PG_Details;
