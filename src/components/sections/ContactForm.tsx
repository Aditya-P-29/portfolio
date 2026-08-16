"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/f/mkjwvpvq" 
      method="POST"
      className="space-y-6 w-full sm:max-w-md lg:max-w-lg mx-auto"
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <Input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="rounded-full"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <Input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className="rounded-full"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <Textarea
          name="message"
          placeholder="Write your message..."
          required
          className="rounded-lg"
        />
      </div>

      {/* Hidden fields (optional) */}
      <input type="hidden" name="_subject" value="New Contact Form Submission!" />
      <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

      <Button type="submit" className="w-full rounded-full">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;





