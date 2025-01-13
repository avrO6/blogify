import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { articles } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop"
          alt="Interior moderno y acogedor"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative text-center text-white space-y-4 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Transforma tu hogar, transforma tu vida
          </h1>
          <p className="text-lg md:text-xl">
            Explora productos seleccionados que combinan funcionalidad y estilo para enriquecer tu vida y embellecer tu hogar.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{article.title}</CardTitle>
                <p className="text-muted-foreground">{article.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/articulos/${article.id}`} className="w-full">
                  <Button className="w-full">Leer más</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}