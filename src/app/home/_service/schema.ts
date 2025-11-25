import { z } from 'zod';

const employmentFormValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  password: z.string().min(1, 'Password is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  country: z.enum(['Iran', 'Netherland']),
  isAgree: z.boolean().refine((val) => val, {
    message: 'You must agree to the privacy policy',
  }),
});

type EmploymentFormSchema = z.infer<typeof employmentFormValidationSchema>;

export { employmentFormValidationSchema };
export type { EmploymentFormSchema };
