// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Gunakan import.meta.env untuk Astro
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
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

// Helper: Cek admin
export async function isUserAdmin(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .single();
  
  if (error || !data) return false;
  return data.role === 'admin';
}

// Helper: Get user profile
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  
  if (error) throw error;
  return data;
}