


// import { useParams } from "react-router";
// import { Card, Typography, List, Form, Input, Button } from "antd";

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

// // Sample PG Data
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
//   const { id } = useParams();

//   // Correctly fetch PG data using ID
//   const pgData = pgDataList.find((pg) => pg.id === parseInt(id));

//   if (!pgData) {
//     return (
//       <div className="pt-20 text-center text-red-500 text-2xl">
//         PG Not Found
//       </div>
//     );
//   }

//   const onFinish = (values) => {
//     console.log("Form Data:", values);
//     // Backend ke liye yahan API call karni hai
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

//       {/* ✅ Image Gallery as Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//         {pgData.images.map((img, index) => (
//           <Card
//             key={index}
//             className="shadow-lg border-none rounded-xl overflow-hidden transition-transform transform hover:scale-105"
//             cover={
//               <img
//                 src={img}
//                 alt={`Image ${index + 1}`}
//                 className="w-full h-[200px] object-cover"
//                 draggable="false"
//               />
//             }
//           />
//         ))}
//       </div>

//       {/* ✅ Nearby Places */}
//       <Card title="Nearby Places" bordered={false} className="shadow-md border-none rounded-xl">
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

//       {/* ✅ Controlled Form */}
//       <Card className="mt-8 shadow-md border-none rounded-xl" title="Contact Owner">
//         <Form layout="vertical" onFinish={onFinish}>
//           {/* Name Field */}
//           <Form.Item
//             label="Your Name"
//             name="name"
//             rules={[{ required: true, message: "Please enter your name" }]}
//           >
//             <Input placeholder="Enter your name" className="rounded-md" />
//           </Form.Item>

//           {/* Message Field */}
//           <Form.Item
//             label="Message"
//             name="message"
//             rules={[{ required: true, message: "Please enter your message" }]}
//           >
//             <Input.TextArea rows={4} placeholder="Enter your message" className="rounded-md" />
//           </Form.Item>

//           {/* Submit Button */}
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


// import { useParams } from "react-router";
// import { Card, Typography, List, Form, Input, Button } from "antd";

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

// // Sample PG Data
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
//   const { id } = useParams();

//   // Correctly fetch PG data using ID
//   const pgData = pgDataList.find((pg) => pg.id === parseInt(id));

//   if (!pgData) {
//     return (
//       <div className="pt-20 text-center text-red-500 text-2xl">
//         PG Not Found
//       </div>
//     );
//   }

//   const onFinish = (values) => {
//     console.log("Form Data:", values);
//     // Backend ke liye yahan API call karni hai
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

//       {/* ✅ Image Gallery as Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//         {pgData.images.map((img, index) => (
//           <Card
//             key={index}
//             className="shadow-lg border-none rounded-xl overflow-hidden"
//             cover={
//               <img
//                 src={img}
//                 alt={`Image ${index + 1}`}
//                 className="w-full h-[400px] object-cover"
//                 draggable="false"
//               />
//             }
//           />
//         ))}
//       </div>

//       {/* ✅ Nearby Places */}
//       <Card title="Nearby Places" bordered={false} className="shadow-md border-none rounded-xl">
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

//       {/* ✅ Controlled Form */}
//       <Card className="mt-8 shadow-md border-none rounded-xl" title="Contact Owner">
//         <Form layout="vertical" onFinish={onFinish}>
//           {/* Name Field */}
//           <Form.Item
//             label="Your Name"
//             name="name"
//             rules={[{ required: true, message: "Please enter your name" }]}
//           >
//             <Input placeholder="Enter your name" className="rounded-md" />
//           </Form.Item>

//           {/* Message Field */}
//           <Form.Item
//             label="Message"
//             name="message"
//             rules={[{ required: true, message: "Please enter your message" }]}
//           >
//             <Input.TextArea rows={4} placeholder="Enter your message" className="rounded-md" />
//           </Form.Item>

//           {/* Submit Button */}
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


// import { useParams } from "react-router";
// import { Card, Typography, List, Form, Input, Button, message } from "antd";
// import { HeartOutlined, HeartFilled } from "@ant-design/icons";
// import { useState } from "react";

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
//  // Inside component:
// // const { wishlist, toggleWishlist } = useWishlist();
// // const isWished = wishlist.some((pg) => pg.id === pgData.id);

// // // Inside your image cards (where heart icon is shown):
// // <div onClick={() => toggleWishlist(pgData)} className="absolute top-4 right-4 cursor-pointer">
// //   {isWished ? (
// //     <HeartFilled className="text-red-500 text-lg" />
// //   ) : (
// //     <HeartOutlined className="text-gray-600 text-lg" />
// //   )}
// // </div>

// // Sample PG Data
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

// // Temporary wishlist
// let wishlistItems = [];

// const PG_Details = () => {
//   const { id } = useParams();
//   const pgData = pgDataList.find((pg) => pg.id === parseInt(id));
//   const [wishlistMap, setWishlistMap] = useState({});

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

//   const toggleWishlist = (imageIndex) => {
//     const key = `${pgData.id}-${imageIndex}`;
//     const isWished = wishlistMap[key];

//     // Toggle state
//     setWishlistMap((prev) => ({
//       ...prev,
//       [key]: !isWished,
//     }));

//     if (!isWished) {
//       message.success("Added to Wishlist");
//     } else {
//       message.info("Removed from Wishlist");
//     }
//   };
//   // const toggleWishlistLocal = (imageIndex) => {
//   //   const key = `${pgData.id}-${imageIndex}`;
//   //   const isWished = wishlistMap[key];
  
//   //   // Toggle icon locally
//   //   setWishlistMap((prev) => ({
//   //     ...prev,
//   //     [key]: !isWished,
//   //   }));
  
//   //   // Update global wishlist (via context)
//   //   if (!isWished) {
//   //     toggleWishlist({
//   //       id: pgDataList.id,
//   //       name: pgDataList.name,
//   //       rent: pgDataList.rent,
//   //       location: pgDataList.location,
//   //       image: pgDataList.images[imageIndex], // Individual image
//   //     });
//   //     message.success("Added to Wishlist");
//   //   } else {
//   //     toggleWishlist({
//   //       id: pgDataList.id,
//   //     });
//   //     message.info("Removed from Wishlist");
//   //   }
//   // };

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
//           const key = `${pgData.id}-${index}`;
//           const isWished = wishlistMap[key];

//           return (
//             <div key={index} className="relative">
//               <button
//                 onClick={() => toggleWishlist(index)}
//                 className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md transition-all"
//               >
//                 {isWished ? (
//                   // <HeartFilled className="text-red-500 text-lg" />
//                   <HeartFilled style={{ color: 'red', fontSize: '18px' }} />
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
//       <Card className="mt-8 shadow-md border-none rounded-xl" title="Contact Owner">
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
//             <Input.TextArea rows={4} placeholder="Enter your message" className="rounded-md" />
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



import { useParams } from "react-router";
import { Card, Typography, List, Form, Input, Button, message } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useWishlist } from "../context/WishlistContext";
import Pic1 from "../assets/pic1forPG.webp";
import Pic2 from "../assets/pic2forPG.avif";
import Pic3 from "../assets/pic3forPG.jpg";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpeg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";
import room5 from "../assets/room5.jpeg";
import room6 from "../assets/room6.avif";

const { Title, Paragraph } = Typography;

// Sample PG Data
const pgDataList = [
  {
    id: 1,
    name: "Luxury PG in Delhi",
    rent: "₹8000/month",
    facilities: ["AC", "WiFi", "Food", "24/7 Security", "Laundry"],
    owner: "Rahul Sharma",
    contact: "+91 98765 43210",
    location: "South Delhi, Near Metro",
    images: [Pic1, room1, room2],
  },
  {
    id: 2,
    name: "Budget PG in Mumbai",
    rent: "₹5000/month",
    facilities: ["Non-AC", "WiFi", "Shared Kitchen"],
    owner: "Neha Jain",
    contact: "+91 98234 56789",
    location: "Andheri West, Near Bus Stand",
    images: [Pic2, room3, room4],
  },
  {
    id: 3,
    name: "Premium PG in Bangalore",
    rent: "₹12000/month",
    facilities: ["AC", "Gym", "Swimming Pool", "CCTV"],
    owner: "Amit Kumar",
    contact: "+91 99876 54321",
    location: "Electronic City, Near IT Hub",
    images: [Pic3, room5, room6],
  },
];

const PG_Details = () => {
  const { id } = useParams();
  const pgData = pgDataList.find((pg) => pg.id === parseInt(id));
  const { wishlist, toggleWishlist } = useWishlist(); // ✅ context hook

  if (!pgData) {
    return (
      <div className="pt-20 text-center text-red-500 text-2xl">
        PG Not Found
      </div>
    );
  }

  const onFinish = (values) => {
    console.log("Form Data:", values);
    // API call for backend later
  };

  return (
    <div className="pt-20 px-6 lg:px-20">
      {/* PG Info Section */}
      <Card className="mb-8 shadow-md border-none rounded-xl">
        <Title level={2} className="text-blue-600 font-semibold">
          {pgData.name}
        </Title>
        <Paragraph>{pgData.location}</Paragraph>
        <Paragraph className="text-lg font-semibold text-green-600">
          {pgData.rent}
        </Paragraph>
        <Paragraph>
          <strong>Facilities:</strong> {pgData.facilities.join(", ")}
        </Paragraph>
        <Paragraph>
          <strong>Owner:</strong> {pgData.owner} |{" "}
          <strong>Contact:</strong> {pgData.contact}
        </Paragraph>
      </Card>

      {/* ✅ Image Gallery with Wishlist Icon */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {pgData.images.map((img, index) => {
          const isWished = wishlist.some(
            (pg) => pg.id === pgData.id && pg.image === img
          );

          return (
            <div key={index} className="relative">
              <button
                onClick={() =>
                  toggleWishlist({
                    id: pgData.id,
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
                    src={img}
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
      <Card
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
      </Card>
    </div>
  );
};

export default PG_Details;

