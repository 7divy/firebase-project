'use client';

import { useSearchParams } from 'next/navigation';

export default function PaymentPage() {
  const params = useSearchParams();
  const id = params.get('id');

  return (
    <div>
      <h1>Payment Page</h1>
      <p>ID: {id}</p>
    </div>
  );
}
