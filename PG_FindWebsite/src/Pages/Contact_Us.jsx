import { useState } from 'react';
import { Form, Input, Button, message, Row, Col } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const Contact_Us = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log('Received values:', values);

 
    setTimeout(() => {
      setLoading(false);
      message.success('Thank you for contacting us! We will get back to you soon.');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        {/* Contact Form */}
        <Form
          name="contact"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          {/* Name */}
          <Form.Item
            name="name"
            label="Your Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Invalid email format' },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          {/* Phone */}
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: 'Please enter your phone number' },
              {
                pattern: /^[0-9]{10}$/,
                message: 'Phone number must be 10 digits',
              },
            ]}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>

          {/* Message */}
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: 'Please enter your message' }]}
          >
            <Input.TextArea rows={4} placeholder="Enter your message" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>

        {/* Contact Details */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <MailOutlined className="mr-2" /> support@smartpgfinder.com
            </Col>
            <Col span={24}>
              <PhoneOutlined className="mr-2" /> +91 9876543210
            </Col>
            <Col span={24}>
              <EnvironmentOutlined className="mr-2" /> 123, MG Road, Delhi, India
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
