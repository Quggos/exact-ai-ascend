import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = '' }: ContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    companyEmail: '',
    websiteLink: '',
    jobTitle: '',
    businessPhone: '',
    question: ''
  });

  const [errors, setErrors] = useState({
    companyEmail: '',
    websiteLink: '',
    businessPhone: ''
  });

  const validateEmail = (email: string) => {
    // Email pattern that requires text@text.domain format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateWebsite = (website: string) => {
    if (!website) return true;
    // Simple validation that just ensures there's at least one dot in the domain
    // This allows domain.com without requiring http/https
    const simpleWebsitePattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](\.[a-zA-Z]{2,})+$/;
    return simpleWebsitePattern.test(website);
  };

  const validatePhoneNumber = (phone: string) => {
    // Phone pattern that requires + followed by numbers
    const phonePattern = /^\+[0-9]+$/;
    return phonePattern.test(phone);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    // For phone field, restrict to + and numbers only
    if (name === 'businessPhone') {
      // Allow only + and numeric characters
      const sanitizedValue = value.replace(/[^\+0-9]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: sanitizedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear errors when typing
    if (name === 'companyEmail' || name === 'websiteLink' || name === 'businessPhone') {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email, website and phone
    const emailValid = validateEmail(formData.companyEmail);
    const websiteValid = validateWebsite(formData.websiteLink);
    const phoneValid = validatePhoneNumber(formData.businessPhone);
    
    let hasErrors = false;
    
    if (!emailValid) {
      setErrors(prev => ({ 
        ...prev, 
        companyEmail: 'Please enter a valid email address (e.g. name@company.com)' 
      }));
      hasErrors = true;
    }

    if (!websiteValid) {
      setErrors(prev => ({ 
        ...prev, 
        websiteLink: 'Please enter a valid domain (e.g. company.com)' 
      }));
      hasErrors = true;
    }
    
    if (!phoneValid) {
      setErrors(prev => ({
        ...prev,
        businessPhone: 'Please enter a valid phone number with country code (e.g. +1234567890)'
      }));
      hasErrors = true;
    }
    
    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send email with form data
      const response = await fetch('https://formsubmit.co/ajax/contact@exct.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _template: 'table',
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyName: formData.companyName,
          companyEmail: formData.companyEmail,
          websiteLink: formData.websiteLink,
          jobTitle: formData.jobTitle,
          businessPhone: formData.businessPhone,
          question: formData.question
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        companyName: '',
        companyEmail: '',
        websiteLink: '',
        jobTitle: '',
        businessPhone: '',
        question: ''
      });
      
      setErrors({
        companyEmail: '',
        websiteLink: '',
        businessPhone: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Dark theme styling
  const inputClasses = "w-full px-4 py-3 bg-black/30 border border-white/10 rounded-md text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FC576E]";
  const labelClasses = "block text-white text-sm font-medium mb-2";
  const errorClasses = "text-[#FC576E] text-xs mt-1";

  return (
    <form onSubmit={handleSubmit} className={`glass-morphism border border-white/5 p-6 sm:p-8 rounded-xl ${className}`}>
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className={labelClasses}>First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label htmlFor="lastName" className={labelClasses}>Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="companyName" className={labelClasses}>Company Name *</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Enter your company name"
          />
        </div>

        <div>
          <label htmlFor="companyEmail" className={labelClasses}>Company Email *</label>
          <input
            type="email"
            id="companyEmail"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Enter your company email address"
          />
          {errors.companyEmail && (
            <p className={errorClasses}>{errors.companyEmail}</p>
          )}
        </div>

        <div>
          <label htmlFor="websiteLink" className={labelClasses}>Website Link *</label>
          <input
            type="text"
            id="websiteLink"
            name="websiteLink"
            value={formData.websiteLink}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="domain.com"
          />
          {errors.websiteLink && (
            <p className={errorClasses}>{errors.websiteLink}</p>
          )}
        </div>

        <div>
          <label htmlFor="jobTitle" className={labelClasses}>Job Title *</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Enter your job title"
          />
        </div>

        <div>
          <label htmlFor="businessPhone" className={labelClasses}>Business Mobile Phone *</label>
          <input
            type="tel"
            id="businessPhone"
            name="businessPhone"
            value={formData.businessPhone}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="+1234567890"
          />
          {errors.businessPhone && (
            <p className={errorClasses}>{errors.businessPhone}</p>
          )}
        </div>

        <div>
          <label htmlFor="question" className={labelClasses}>Your Question *</label>
          <textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
            required
            rows={4}
            className={`${inputClasses} resize-none`}
            placeholder="Please describe your question or project requirements"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 rounded-md bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] text-white font-medium hover:opacity-90 transition-all shadow-lg disabled:opacity-70"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm; 