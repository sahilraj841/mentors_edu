"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import AboutUs from "@/components/ConsultantAboutUs";

export default function Consultant() {
  const [formData, setFormData] = useState({
    memberType: "",
    applicantName: "",
    whatsappNumber: "",
    otherNumber: "",
    email: "",
    experienceDetails: "",
    city: "",
    state: "",
    pincode: "",
    adharCard: "",
    panCard: ""
  });

  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("You must agree to be contacted.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email, // Sending sender's email
          formData, // Sending entire form data
        }),
      });

      const result = await response.json();
      alert(result.message);
      setFormData({
        memberType: "",
        applicantName: "",
        whatsappNumber: "",
        otherNumber: "",
        email: "",
        experienceDetails: "",
        city: "",
        state: "",
        pincode: "",
        adharCard: "",
        panCard: ""
      });
      setAgreed(false);
    } catch (error) {
      alert("Error submitting the form. Please try again.");

      
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-2">
            Partner As Education Consultant
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#B22222]">
            With One Of North India&apos;s Leading Education Brands
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
          <div className="space-y-2">
            <Label htmlFor="memberType">
              Member Type <span className="text-red-500">*</span>
            </Label>
            <Select
              onValueChange={(value) => setFormData({ ...formData, memberType: value })}
              value={formData.memberType}
            >
              <SelectTrigger id="memberType">
                <SelectValue placeholder="Member Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Individual</SelectItem>
                <SelectItem value="library">Library</SelectItem>
                <SelectItem value="stationary">Stationary</SelectItem>
                <SelectItem value="hostel">Hostel</SelectItem>
                <SelectItem value="mess">Mess</SelectItem>
                <SelectItem value="individual-associate">Individual Associate</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {Object.keys(formData)
            .filter((key) => key !== "memberType")
            .map((key) => (
              <div className="space-y-2" key={key}>
                <Label htmlFor={key}>
                  {key.replace(/([A-Z])/g, " $1").trim()} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id={key}
                  name={key}
                  placeholder={key}
                  value={formData[key]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

          <div className="md:col-span-3 flex items-center gap-2 mt-4">
            <Checkbox id="agreement" checked={agreed} onCheckedChange={setAgreed} />
            <Label htmlFor="agreement">I agree to be contacted by the team of Mentors Eduserv</Label>
          </div>

          <div className="md:col-span-3 text-center text-gray-500 mt-2">
            It is not a full-time employment opportunity with Motion and is only part-time counselling.
          </div>

          <div className="md:col-span-3 flex justify-center mt-6">
            <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-8 py-2">
              SUBMIT
            </Button>
          </div>
        </form>
      </div>
      <section>
        <AboutUs />
      </section>
    </>
  );
}
