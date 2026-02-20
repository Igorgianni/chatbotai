import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MessageSquare, Zap, BarChart3, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

// Homepage V2 - Fixed for deployment
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6" />
            <span className="text-xl font-bold">ChatBot IA</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/auth/iniciar-sesion">
              <Button variant="ghost">Iniciar sesión</Button>
            </Link>
            <Link href="/auth/registro">
              <Button>Comenzar gratis</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center gap-8 py-24 text-center">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Automatiza tus ventas por WhatsApp con{' '}
            <span className="text-primary">Inteligencia Artificial</span>
          </h1>
          <p className="text-xl text-muted-foreground sm:text-2xl">
            Responde a tus clientes 24/7, aumenta tus conversiones y gestiona todo desde un solo lugar
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/auth/registro">
            <Button size="lg" className="text-lg px-8">
              Probar gratis por 14 días
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="text-lg px-8">
            Ver demo
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          No se requiere tarjeta de crédito • Configuración en 5 minutos
        </p>
      </section>

      {/* Features Section */}
      <section className="container py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Todo lo que necesitas para vender más
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plataforma completa para automatizar y escalar tus ventas por WhatsApp
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">IA Conversacional</h3>
              <p className="text-muted-foreground">
                Respuestas inteligentes basadas en tu catálogo y políticas de la tienda
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integración E-commerce</h3>
              <p className="text-muted-foreground">
                Conecta Tiendanube, Shopify, WooCommerce y más para sincronizar productos
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Analytics en tiempo real</h3>
              <p className="text-muted-foreground">
                Trackea conversaciones, conversiones y rendimiento de la IA
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Configuración rápida</h3>
              <p className="text-muted-foreground">
                Conecta WhatsApp y comienza a vender en menos de 5 minutos
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="flex flex-col items-center gap-6 py-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl max-w-2xl">
              Comienza a vender más por WhatsApp hoy mismo
            </h2>
            <p className="text-lg max-w-xl opacity-90">
              Únete a cientos de negocios en América Latina que ya están automatizando sus ventas
            </p>
            <Link href="/auth/registro">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Crear cuenta gratis
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="container py-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 ChatBot IA. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
