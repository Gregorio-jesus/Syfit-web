import Hero from '@/components/Hero/Hero';
import Operativa from '@/components/Operativa/Operativa';
import Funciones from '@/components/Funciones/Funciones';
import Precios from '@/components/Precios/Precios';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Operativa />
      <Funciones />
      <Precios />
      <Footer />
    </main>
  );
}
