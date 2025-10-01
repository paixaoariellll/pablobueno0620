import Link from 'next/link';

import { createMetadata } from "@/lib/seo";
import { Button } from '@/components/ui/button';

export const metadata = createMetadata("Página não encontrada");

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">404 - Página Não Encontrada</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Parece que você se perdeu. A página que você está procurando não existe.
      </p>
      <div className="mt-6">
        <Link
          href="/"
        >
          <Button>
            Voltar para a página inicial
          </Button>
        </Link>
      </div>
    </div>
  );
}