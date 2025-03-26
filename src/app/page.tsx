import HeroSection from "@/components/HeroSection";
import TopDestinations from "@/components/TopDestinations";
import LatestStories from "@/components/LatestStories";
import TrekkersHighlights from "@/components/TrekkersHighlights";
import Newsletter from "@/components/Newsletter";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main>
      <StructuredData />
      <HeroSection />
      
      {/* SEO-optimized section headings with keywords */}
      <section className="py-8">
        <h1 className="text-3xl font-bold text-center text-[#283618] mb-4">
          Kicau Burung Terbaik - Download Suara Burung MP3 Gratis
        </h1>
        <p className="text-center text-[#606C38] max-w-3xl mx-auto">
          Temukan koleksi lengkap suara kicau burung untuk masteran, lomba, terapi relaksasi, dan pancingan. 
          Kami menyediakan suara burung gacor terpopuler di Indonesia, termasuk kicau burung juara nasional dan kicau burung hutan asli.
        </p>
      </section>
      
      <TopDestinations />
      <LatestStories />
      
      {/* Additional SEO section with more keywords */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto bg-[#FEFAE0] p-6 rounded-lg border border-[#DDA15E]">
          <h2 className="text-xl font-bold text-[#283618] mb-4">
            Manfaat Suara Kicau Burung Untuk Kehidupan Sehari-hari
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-[#606C38] mb-2">Kicau Burung Untuk Menenangkan Pikiran</h3>
              <p className="text-sm text-[#283618]">
                Suara kicau burung telah terbukti dapat menenangkan pikiran dan mengurangi stres. 
                Dengarkan suara burung kicau 1 jam nonstop untuk terapi relaksasi yang efektif.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-[#606C38] mb-2">Kicau Burung Buat Pancingan</h3>
              <p className="text-sm text-[#283618]">
                Gunakan suara kicau burung pikat ampuh untuk melatih burung kesayangan Anda agar lebih gacor. 
                Koleksi suara kicau burung pikat alam liar tersedia untuk diunduh.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-[#606C38] mb-2">Rahasia Perawatan Burung Kicau Biar Gacor</h3>
              <p className="text-sm text-[#283618]">
                Pelajari tips dan trik merawat burung kicau agar selalu gacor. 
                Cocok untuk pemula yang baru memulai hobi memelihara burung kicau.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-[#606C38] mb-2">Komunitas Pecinta Burung Kicau</h3>
              <p className="text-sm text-[#283618]">
                Bergabunglah dengan komunitas pecinta burung kicau untuk berbagi pengalaman dan pengetahuan. 
                Temukan informasi tentang burung kicau langka dan burung kicau paling mahal.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <TrekkersHighlights />
      <Newsletter />
      
      {/* Footer SEO text with remaining keywords */}
      <section className="py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="sr-only">Informasi Tambahan Kicau Burung</h2>
          <p className="text-sm text-[#606C38]">
            Kicau Burung menyediakan suara kicau burung terjernih untuk berbagai kebutuhan. 
            Temukan suara burung kicau untuk pemula hingga kolektor berpengalaman. 
            Download suara kicau burung gacor dari berbagai jenis burung terpopuler di Indonesia.
          </p>
        </div>
      </section>
    </main>
  );
}
