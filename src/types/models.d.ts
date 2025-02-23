

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

type ProfileUrls = 'basic-info' | 'security' | 'forget-data';

type Gender = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY';
