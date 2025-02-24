

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  bio: string;
  website: string;
  location: string;
  birthDate: string;
  gender: string;
}

type LoginAttempt = {
  id: number;
  userId: number;
  timestamp: string;
  ipAddress: string;
  success: boolean;
}

type ProfileUrls = 'basic-info' | 'security' | 'forget-data';

type Gender = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY';
