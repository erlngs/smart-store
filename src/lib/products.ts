import type { SupabaseClient } from '@supabase/supabase-js';

interface GetProductsOptions {
  limit?: number;
  orderBy?: string;
  ascending?: boolean;
  category?: string | null;
}

export async function getProductsWithRatings(
  supabase: SupabaseClient,
  { limit = 10, orderBy = 'created_at', ascending = false, category = null }: GetProductsOptions = {}
) {
  let query = supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .order(orderBy, { ascending });

  if (category) query = query.eq('category', category);
  if (limit) query = query.limit(limit);

  const { data: products } = await query;
  if (!products || products.length === 0) return [];

  const ids = products.map((p: any) => p.id);
  const { data: reviews } = await supabase
    .from('reviews')
    .select('product_id, rating')
    .in('product_id', ids);

  return products.map((p: any) => {
    const productReviews = (reviews || []).filter((r: any) => r.product_id === p.id);
    const totalReviews = productReviews.length;
    const avgRating = totalReviews > 0
      ? productReviews.reduce((sum: number, r: any) => sum + r.rating, 0) / totalReviews
      : 0;
    return { ...p, avgRating, totalReviews };
  });
}