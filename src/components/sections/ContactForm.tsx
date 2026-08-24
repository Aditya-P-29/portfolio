"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Add the correct React event type here
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 2. Use currentTarget instead of target for better TypeScript support
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      alert("Message sent successfully!");
      form.reset(); // Now TypeScript knows this is a form that can be reset
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full sm:max-w-md lg:max-w-lg mx-auto"
    >
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <Input type="text" name="name" placeholder="Your name" required className="rounded-full" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <Input type="email" name="email" placeholder="you@example.com" required className="rounded-full" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <Textarea name="message" placeholder="Write your message..." required className="rounded-lg" />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full rounded-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;