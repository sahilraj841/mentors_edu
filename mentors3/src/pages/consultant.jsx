"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import AboutUs from '@/components/ConsultantAboutUs'

export default function Consultant() {
  const [agreed, setAgreed] = useState(false)

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#B22222] mb-2">Partner As Education Consultant</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#B22222]">
            With One Of India&apos;s Leading Education Brands
          </h2>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
          <div className="space-y-2">
            <Label htmlFor="memberType" className="flex">
              Member Type <span className="text-red-500 ml-1">*</span>
            </Label>
            <Select>
              <SelectTrigger id="memberType">
                <SelectValue placeholder="Member Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Member Type</SelectItem>
                
                <SelectItem value="library">Library</SelectItem>
                <SelectItem value="stationary">Stationary</SelectItem>
                <SelectItem value="hostel">Hostel</SelectItem>
                <SelectItem value="mess">Mess</SelectItem>
                <SelectItem value="individual-associate">Individual Associate</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="applicantName" className="flex">
              Applicant Name <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="applicantName" placeholder="Applicant Name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsappNumber" className="flex">
              WhatsApp Number <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="whatsappNumber" placeholder="Contact Number*" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="otherNumber" className="flex">Other Number</Label>
            <Input id="otherNumber" placeholder="Other Number" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex">
              Email Id <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="email" type="email" placeholder="Email*" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experienceDetails" className="flex">
              Experience Details <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="experienceDetails" placeholder="Experience Details*" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="flex">
              City <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="city" placeholder="City*" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="state" className="flex">
              State <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="state" placeholder="State*" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pincode" className="flex">
              Pincode <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="pincode" placeholder="Pincode*" />
          </div>

          {/* Updated Aadhaar field */}
          <div className="space-y-2">
            <Label htmlFor="adharCard" className="flex">
              Aadhaar Number <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="adharCard" type="text" placeholder="Aadhaar Number" />
          </div>

          {/* Updated PAN field */}
          <div className="space-y-2">
            <Label htmlFor="panCard" className="flex">
              PAN Number <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="panCard" type="text" placeholder="PAN Number" />
          </div>

          <div className="md:col-span-3 flex items-center gap-2 mt-4">
            <Checkbox id="agreement" checked={agreed} onCheckedChange={setAgreed} />
            <Label htmlFor="agreement" className="font-normal">
              I agree to be contacted by the team of Mentors Eduserv
            </Label>
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
  )
}
