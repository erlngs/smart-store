export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          role: 'user' | 'admin';
          phone: string | null;
          address: string | null;
          email: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          role?: 'user' | 'admin';
          phone?: string | null;
          address?: string | null;
          email?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          role?: 'user' | 'admin';
          phone?: string | null;
          address?: string | null;
          email?: string | null;
          created_at?: string;
        };
      };
      products: {
        Row: {
          id: string;
          name: string;
          slug: string;
          price: number;
          description: string | null;
          image_url: string | null;
          category: string | null;
          stock: number;
          discount: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          price: number;
          description?: string | null;
          image_url?: string | null;
          category?: string | null;
          stock?: number;
          discount?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          price?: number;
          description?: string | null;
          image_url?: string | null;
          category?: string | null;
          stock?: number;
          discount?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      product_variants: {
        Row: {
          id: string;
          product_id: string;
          name: string;
          value: string;
          stock: number;
          price_extra: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          product_id: string;
          name: string;
          value: string;
          stock?: number;
          price_extra?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          product_id?: string;
          name?: string;
          value?: string;
          stock?: number;
          price_extra?: number;
          created_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string;
          order_number: string;
          total: number;
          shipping_cost: number;
          grand_total: number;
          status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
          payment_method: string;
          payment_status: string;
          shipping_address: string;
          city: string;
          proof_url: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          order_number: string;
          total: number;
          shipping_cost?: number;
          grand_total: number;
          status?: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
          payment_method: string;
          payment_status?: string;
          shipping_address: string;
          city: string;
          proof_url?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          order_number?: string;
          total?: number;
          shipping_cost?: number;
          grand_total?: number;
          status?: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
          payment_method?: string;
          payment_status?: string;
          shipping_address?: string;
          city?: string;
          proof_url?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string;
          variant_id: string | null;
          quantity: number;
          price: number;
          discount_applied: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          product_id: string;
          variant_id?: string | null;
          quantity: number;
          price: number;
          discount_applied?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          order_id?: string;
          product_id?: string;
          variant_id?: string | null;
          quantity?: number;
          price?: number;
          discount_applied?: number;
          created_at?: string;
        };
      };
      cart: {
        Row: {
          id: string;
          user_id: string;
          product_id: string;
          variant_id: string | null;
          quantity: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          product_id: string;
          variant_id?: string | null;
          quantity?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          product_id?: string;
          variant_id?: string | null;
          quantity?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      // ===== TAMBAHKAN INI =====
      reviews: {
        Row: {
          id: string;
          user_id: string;
          product_id: string;
          order_id: string | null;
          rating: number;
          comment: string | null;
          images: string[] | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          product_id: string;
          order_id?: string | null;
          rating: number;
          comment?: string | null;
          images?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          product_id?: string;
          order_id?: string | null;
          rating?: number;
          comment?: string | null;
          images?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      shipping_cities: {
        Row: {
          id: string;
          city: string;
          shipping_cost: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          city: string;
          shipping_cost?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          city?: string;
          shipping_cost?: number;
          created_at?: string;
        };
      };
    };
  };
};