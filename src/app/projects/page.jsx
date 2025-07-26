import CardView from "../components/CardView";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="container mx-auto mt-24 px-6 py-4 gap-4 md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CardView
          title="PUAS"
          description="Pusat Aspirasi adalah sistem pengaduan masyarakat menggunakan Java Spring Boot dan Thymeleaf dengan arsitektur MVC."
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/puas-communitycomplaintsystem"
        />
        <CardView
          title="Kumontirinmy"
          description="Sistem booking service kendaraan menggunakan Next.js, Tailwind CSS, dan Prisma."
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/kumontirinmy"
        />
        <CardView
          title="Madyamed"
          description="Sistem manajemen rumah sakit berbasis Laravel dan Livewire yang mendigitalisasi layanan dari pendaftaran hingga rekam medis dan tagihan."
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/madyamed"
        />
        <CardView
          title="UQBlog"
          description="Sistem informasi blog berbasis REST API menggunakan Java Spring Boot."
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/UQBlog"
        />
        <CardView
          title="Tukubro"
          description="Website e-commerce dengan Laravel dan React.js."
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/tukubro"
        />
        <CardView
          title="UMS"
          description="Sistem manajemen pengguna berbasis Laravel."
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/laravel-user-management"
        />
        <CardView
          title="Duitora"
          description="Aplikasi Android untuk manajemen keuangan pribadi dengan Jetpack Compose, MVVM, Firebase, dan integrasi Gemini AI."
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/duitora"
        />
        <CardView
          title="Purrsonal Cat"
          description="Aplikasi Android untuk mendeteksi penyakit kucing berdasarkan gejala menggunakan machine learning."
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/purrsonalcat"
        />
        <CardView
          title="Github Android App"
          description="Aplikasi Android untuk menampilkan dan mengelola data pengguna Github."
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/GitHubUserApp"
        />
        <CardView
          title="Movie App"
          description="Antarmuka web React.js yang menampilkan daftar film menggunakan API TMDB."
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/movieapp-react"
        />
        <CardView
          title="Rimstore"
          description="Aplikasi mobile e-commerce menggunakan Flutter dan arsitektur MVVM."
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/rimstore"
        />
      </div>
    </main>
  );
}
