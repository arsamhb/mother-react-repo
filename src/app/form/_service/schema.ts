import { z } from 'zod';

const employmentFormValidationSchema = z.object({
  name: z.string().min(1, 'Name is required').min(3, 'Name must be at least 3 characters'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/\d/, 'Password must contain at least one digit')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  phoneNumber: z
    .string()
    .min(11, 'Phone number should have 11 digits')
    .max(11, 'Phone number should have 11 digits')
    .regex(/^\d+$/, 'Phone number should only contain digits'),
  country: z.enum(['Iran', 'Netherland']),
  isAgree: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy',
  }),
});
type EmploymentFormSchema = z.infer<typeof employmentFormValidationSchema>;

export { employmentFormValidationSchema };
export type { EmploymentFormSchema };
