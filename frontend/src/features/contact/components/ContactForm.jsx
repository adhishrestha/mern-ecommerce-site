import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import TextArea from '../../../components/ui/TextArea';
import Button from '../../../components/ui/Button';
import { ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending message to backend handling ecosystem:', formData);
  };
  return (
    <section
      className="w-full bg-white pb-12"
      aria-label="Interactive Messaging Form"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Input
              label="Name"
              id="name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Samantha Clarken"
              required
            />
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@youremail.com"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Input
              label="Phone"
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456 - 7890"
            />
            <Input
              label="Company"
              id="company"
              name="company"
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
              placeholder="Moon"
            />
          </div>

          <TextArea
            label="Message"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            required
          />

          <div className="pt-2">
            <Button
              type="submit"
              variant="dark"
              size="md"
              className="w-full"
              icon={ArrowRight}
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
