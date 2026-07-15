export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          role: 'user' | 'admin';
          created_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          role?: 'user' | 'admin';
          created_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          role?: 'user' | 'admin';
          created_at?: string;
        };
      };
      products: {
        Row: {
          id: string;
          name: string;
          price: number;
          description: string | null;
          image_url: string | null;
          category: string | null;
          stock: number;
          created_at: string;
        };
        Insert: {
          name: string;
          price: number;
          description?: string | null;
          image_url?: string | null;
          category?: string | null;
          stock?: number;
        };
        Update: {
          name?: string;
          price?: number;
          description?: string | null;
          image_url?: string | null;
          category?: string | null;
          stock?: number;
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string;
          total: number;
          status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
          created_at: string;
        };
        Insert: {
          user_id: string;
          total: number;
          status?: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
        };
        Update: {
          user_id?: string;
          total?: number;
          status?: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
        };
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string;
          quantity: number;
          price: number;
          created_at: string;
        };
        Insert: {
          order_id: string;
          product_id: string;
          quantity: number;
          price: number;
        };
        Update: {
          order_id?: string;
          product_id?: string;
          quantity?: number;
          price?: number;
        };
      };
      cart: {
        Row: {
          id: string;
          user_id: string;
          product_id: string;
          quantity: number;
          created_at: string;
        };
        Insert: {
          user_id: string;
          product_id: string;
          quantity?: number;
        };
        Update: {
          user_id?: string;
          product_id?: string;
          quantity?: number;
        };
      };
    };
  };
};