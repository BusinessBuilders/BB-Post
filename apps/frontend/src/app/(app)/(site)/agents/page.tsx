import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'BB Post - Agent',
  description: '',
};

export default async function Page() {
  return redirect('/agents/new');
}
