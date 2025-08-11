export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user: {
    _id: string;
    fullName: string;
    email: string;
    username: string;
    confirmed: boolean;
    roleId: string;
    authType: string;
    paystack_customer_code: string | null;
    current_plan_id: string | null;
    subscription_status: string;
    trial_ends_at: string | null;
    createdAt: string;
    updatedAt: string;
  };
  accessToken: string; // This already includes "Bearer "
  expiresIn: string;
}
