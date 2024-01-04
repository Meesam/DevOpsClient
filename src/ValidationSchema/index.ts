import { ZodType, boolean, z } from "zod";
import { CustomerBasicInfo, CustomerContact } from "../Interface";

export const customerBasicInfoSchema: ZodType<Partial<CustomerBasicInfo>> =
  z.object({
    name: z.string().min(4).max(255),
    website: z
      .string()
      .regex(
        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g
      ),
    logoUrl: z.string().min(4).max(255),
    description: z.string().min(4).max(255),
  });

export const customerContactsSchema: ZodType<Partial<CustomerContact>> =
  z.object({
    phone: z.string().min(4).max(10),
    email: z.string().email(),
    street: z.string().min(4).max(20),
    city: z.string().min(4).max(20),
    state: z.string().min(2).max(20),
    postalCode: z.string().min(4).max(10),
  });
