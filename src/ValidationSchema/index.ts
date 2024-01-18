import { ZodType, boolean, string, z } from "zod";
import { CustomerBasicInfo, CustomerContact, Project } from "../Interface";

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

export const projectSchema: ZodType<Partial<Project>> = z.object({
  customerName: z.string().min(1),
  projectName: z.string().min(4).max(50),
  projectType: z.string().min(4).max(20),
  projectStartDate: z.coerce.date(),
  projectEndDate: z.coerce.date().nullable().unwrap(),
  projectDescription: z.string().nullable().unwrap(),
  projectStatus: z.string().min(2).max(20),
});
