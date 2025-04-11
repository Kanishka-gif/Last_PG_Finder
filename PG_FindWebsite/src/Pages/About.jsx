import React from 'react';
import { Card, Avatar, Typography } from 'antd';
import one from "../assets/People1.jpg";
import two from "../assets/people2.jpg"

const { Title, Paragraph } = Typography;

const teamMembers = [
  {
    name: 'Kanishka Gupta',
    role: 'Founder & Developer',
    image: one,
  },
  {
    name: 'Abhishek Saini',
    role: 'Co-Founder & Marketing Head',
    image: two,
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <Title level={2} className="text-blue-600">About Smart PG Finder</Title>
        <Paragraph className="text-gray-600">
          Smart PG Finder helps you find the best PG accommodations with verified listings, user reviews, and secure bookings.
        </Paragraph>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-4xl mx-auto mb-8">
        <Card className="shadow-md">
          <Title level={3}>Our Mission</Title>
          <Paragraph>
            To simplify the process of finding a PG by providing accurate listings and user feedback.
          </Paragraph>
          <Title level={3}>Our Vision</Title>
          <Paragraph>
            To become the most trusted platform for PG accommodation searches.
          </Paragraph>
        </Card>
      </div>

      {/* Team Section */}
      <div className="max-w-4xl mx-auto">
        <Title level={3} className="text-center mb-4">Meet Our Team</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-md">
              <div className="flex items-center space-x-4">
                <Avatar size={64} src={member.image} />
                <div>
                  <Title level={4}>{member.name}</Title>
                  <Paragraph className="text-gray-500">{member.role}</Paragraph>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Paragraph className="text-gray-500">
          Have questions? <a href="/Contact_Us" className="text-blue-600">Contact_us</a>
        </Paragraph>
      </div>
    </div>
  );
};

export default About;
