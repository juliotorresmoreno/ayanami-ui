"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { basicInfoSchema } from "@/validation/basicInfoValidation";
import { withProfile } from "@/hoc/withProfile";

interface BasicInfoProps {
  readonly profile: User;
}

function BasicInfo({ profile }: BasicInfoProps) {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const [formData, setFormData] = useState<Omit<User, "id">>({
    name: profile.name ?? "",
    email: profile.email ?? "",
    phone: profile.phone ?? "",
    bio: profile.bio ?? "",
    location: profile.location ?? "",
    website: profile.website ?? "",
    birthDate: profile.birthDate ?? "",
    gender: profile.gender ?? "MALE",
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

  const updateProfile = async (data: Omit<User, "id">) => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${apiURL}/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update profile");
    }

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = basicInfoSchema.validate(formData, { abortEarly: false });

    if (error) {
      const validationErrors: Record<string, string> = {};
      error.details.forEach((detail) => {
        validationErrors[detail.path[0]] = detail.message;
      });
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      await updateProfile(formData);
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <section id="basic-info" className="mb-8 w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Basic Information
      </h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1"
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

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

        <div>
          <Label htmlFor="gender">Gender</Label>
          <Select onValueChange={handleSelectChange} value={formData.gender}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MALE">Male</SelectItem>
              <SelectItem value="FEMALE">Female</SelectItem>
              <SelectItem value="OTHER">Other</SelectItem>
              <SelectItem value="PREFER_NOT_TO_SAY">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && <p className="text-sm text-red-500 mt-1">{errors.gender}</p>}
        </div>

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

export default withProfile(BasicInfo);