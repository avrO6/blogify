import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { articles } from "@/lib/data"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.id === parseInt(params.id))
  
  if (!article) {
    return {
      title: "Artículo no encontrado",
    }
  }

  return {
    title: `${article.title} | Hogar & Estilo`,
    description: article.description,
  }
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.id === parseInt(params.id))
  
  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {/* Header */}
          <header className="space-y-4">
            <h1 className="text-4xl font-bold">{article.title}</h1>
            <p className="text-xl text-muted-foreground">{article.description}</p>
          </header>

          {/* Featured Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {article.content.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-8">
            <Link href={article.link} target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                Comprar ahora
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}

export function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id.toString(),
  }))
}