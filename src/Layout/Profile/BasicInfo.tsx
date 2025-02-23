// Layout/Profile/BasicInfo.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { basicInfoSchema } from "@/validation/basicInfoValidation";

export default function BasicInfo() {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    bio: "I'm a software developer passionate about building great products.",
    location: "New York, USA",
    website: "https://johndoe.com",
    birthDate: "1990-01-01",
    gender: "male",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar el formulario
    const { error } = basicInfoSchema.validate(formData, { abortEarly: false });

    if (error) {
      const validationErrors: Record<string, string> = {};
      error.details.forEach((detail) => {
        validationErrors[detail.path[0]] = detail.message;
      });
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Datos guardados:", formData);
    }
  };

  return (
    <section id="basic-info" className="mb-8 w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Basic Information
      </h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        {/* Full Name */}
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1"
          />
          {errors.fullName && <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1"
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1"
          />
          {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
        </div>

        {/* Bio */}
        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="mt-1"
            rows={4}
          />
          {errors.bio && <p className="text-sm text-red-500 mt-1">{errors.bio}</p>}
        </div>

        {/* Location */}
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1"
          />
          {errors.location && <p className="text-sm text-red-500 mt-1">{errors.location}</p>}
        </div>

        {/* Website */}
        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="mt-1"
          />
          {errors.website && <p className="text-sm text-red-500 mt-1">{errors.website}</p>}
        </div>

        {/* Birth Date */}
        <div>
          <Label htmlFor="birthDate">Birth Date</Label>
          <Input
            id="birthDate"
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="mt-1"
          />
          {errors.birthDate && <p className="text-sm text-red-500 mt-1">{errors.birthDate}</p>}
        </div>

        {/* Gender */}
        <div>
          <Label htmlFor="gender">Gender</Label>
          <Select onValueChange={handleSelectChange} value={formData.gender}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && <p className="text-sm text-red-500 mt-1">{errors.gender}</p>}
        </div>

        {/* Save Changes Button */}
        <Button
          type="submit"
          variant="outline"
          className="w-full mt-6"
        >
          Save Changes
        </Button>
      </form>
    </section>
  );
}