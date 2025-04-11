
// import React from 'react';
// import { Card, Typography, Image, Button } from 'antd';
// import { Link } from 'react-router'; // Updated import for react-router-dom

// import Pic1 from '../assets/pic1forPG.webp';
// import Pic2 from '../assets/pic2forPG.avif';
// import Pic3 from '../assets/pic3forPG.jpg';

// const { Title, Paragraph } = Typography;

// const listings = [
//   {
//     id: 1,
//     name: 'Luxury PG in Delhi',
//     location: 'Delhi',
//     rent: 8000,
//     facilities: ['AC', 'WiFi', 'Food'],
//     security: '24/7 Security Guard, CCTV',
//     contact: '9876543210',
//     image: Pic1,
//   },
//   {
//     id: 2,
//     name: 'Budget PG in Mumbai',
//     location: 'Mumbai',
//     rent: 5000,
//     facilities: ['Non-AC', 'WiFi', 'Shared Kitchen'],
//     security: 'CCTV Surveillance',
//     contact: '9988776655',
//     image: Pic2,
//   },
//   {
//     id: 3,
//     name: 'Comfort PG in Bangalore',
//     location: 'Bangalore',
//     rent: 7000,
//     facilities: ['AC', 'WiFi', 'Parking'],
//     security: 'Biometric Entry',
//     contact: '9123456789',
//     image: Pic3,
//   },
// ];

// const Listings = () => {
//   return (
//     <div className="py-10 px-4 bg-gray-100">
//       <div className="max-w-6xl mx-auto">
//         <Title level={2} className="text-blue-600 text-center mb-6">Available PGs</Title>
//         <div className="grid md:grid-cols-3 gap-6">
//           {listings.map((pg) => (
//             <Card
//               key={pg.id}
//               className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
//               style={{ minHeight: '500px' }} // Ensures consistent height
//             >
//               {/* Image */}
//               <div className="h-48 w-full overflow-hidden">
//                 <Image 
//                   src={pg.image} 
//                   alt={pg.name} 
//                   className="w-full h-full object-cover" 
//                   preview={false} 
//                 />
//               </div>
//               {/* Details */}
//               <div className="p-4 flex flex-col justify-between flex-grow">
//                 <div>
//                   <Title level={4} className="text-lg font-semibold">{pg.name}</Title>
//                   <Paragraph className="text-gray-600">{pg.location}</Paragraph>
//                   <Paragraph className="text-gray-700 text-sm">
//                     <strong>Rent:</strong> ₹{pg.rent}/month
//                   </Paragraph>
//                   <Paragraph className="text-gray-700 text-sm">
//                     <strong>Facilities:</strong> {pg.facilities.join(', ')}
//                   </Paragraph>
//                   <Paragraph className="text-gray-700 text-sm">
//                     <strong>Security:</strong> {pg.security}
//                   </Paragraph>
//                   <Paragraph className="text-gray-700 text-sm">
//                     <strong>Contact:</strong> {pg.contact}
//                   </Paragraph>
//                 </div>
//                 {/* ✅ View Details Button */}
//                 <div className="mt-4">
//                   <Link to={`/pg/${pg.id}`}>
//                     <Button type="primary" className="w-full h-auto">
//                       View Details
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Listings;




import React from 'react';
import { Card, Typography, Image, Button } from 'antd';
import { Link } from 'react-router'; 

import Pic1 from '../assets/pic1forPG.webp';
import Pic2 from '../assets/pic2forPG.avif';
import Pic3 from '../assets/pic3forPG.jpg';

const { Title, Paragraph } = Typography;

const listings = [
  {
    id: 1,
    name: 'Luxury PG in Delhi',
    location: 'Delhi',
    rent: 8000,
    facilities: ['AC', 'WiFi', 'Food'],
    security: '24/7 Security Guard, CCTV',
    contact: '9876543210',
    image: Pic1,
  },
  {
    id: 2,
    name: 'Budget PG in Mumbai',
    location: 'Mumbai',
    rent: 5000,
    facilities: ['Non-AC', 'WiFi', 'Shared Kitchen'],
    security: 'CCTV Surveillance',
    contact: '9988776655',
    image: Pic2,
  },
  {
    id: 3,
    name: 'Comfort PG in Bangalore',
    location: 'Bangalore',
    rent: 7000,
    facilities: ['AC', 'WiFi', 'Parking'],
    security: 'Biometric Entry',
    contact: '9123456789',
    image: Pic3,
  },
];

const Listings = () => {
  return (
    <div className="py-10 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <Title level={2} className="text-blue-600 text-center mb-6">Available PGs</Title>
        <div className="grid md:grid-cols-3 gap-6">
          {listings.map((pg) => (
            <Card
              key={pg.id}
              className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              style={{ minHeight: '500px' }} // Ensures consistent card height
            >
              {/* Image */}
              {/* <div className="h-48 w-full overflow-hidden">
                <Image 
                  src={pg.image} 
                  alt={pg.name} 
                  className="w-full h-80 object-cover" 
                  preview={false} 
                />
              </div> */}
              <div className="h-[300px] w-full overflow-hidden">
                <img
                  src={pg.image}
                  alt={pg.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Details */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <Title level={4} className="text-lg font-semibold">{pg.name}</Title>
                  <Paragraph className="text-gray-600">{pg.location}</Paragraph>
                  <Paragraph className="text-gray-700 text-sm">
                    <strong>Rent:</strong> ₹{pg.rent}/month
                  </Paragraph>
                  <Paragraph className="text-gray-700 text-sm">
                    <strong>Facilities:</strong> {pg.facilities.join(', ')}
                  </Paragraph>
                  <Paragraph className="text-gray-700 text-sm">
                    <strong>Security:</strong> {pg.security}
                  </Paragraph>
                  <Paragraph className="text-gray-700 text-sm">
                    <strong>Contact:</strong> {pg.contact}
                  </Paragraph>
                </div>
              
                <div className="mt-4">
                  <Link to={`/pg/${pg.id}`}>
                    <Button type="primary" className="w-full h-auto">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Listings;




