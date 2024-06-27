import CardView from "../components/CardView";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="container mx-auto mt-24 px-24 py-4 gap-2 md:grid grid-cols-2  lg:grid-cols-4">
        <CardView
          title="PUAS"
          description="Pusat Aspirasi adalah project community complaint system dengan teknologi Java Spring boot."
          imageSrc="/img/projects/springboot.jpeg"
          link="https://github.com/ihsankarim/puas-communitycomplaintsystem"
          />
        <CardView
          title="Github Android App"
          description="Aplikasi untuk menampilkan user github"
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/GitHubUserApp"
        />
        <CardView
          title="Github Android App"
          description="Aplikasi untuk menampilkan user github"
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/GitHubUserApp"
        />
        <CardView
          title="Github Android App"
          description="Aplikasi untuk menampilkan user github"
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/GitHubUserApp"
        />
        <CardView
          title="Github Android App"
          description="Aplikasi untuk menampilkan user github"
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/GitHubUserApp"
        />
        <CardView
          title="Github Android App"
          description="Aplikasi untuk menampilkan user github"
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/GitHubUserApp"
        />
        <CardView
          title="Github Android App"
          description="Aplikasi untuk menampilkan user github"
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/GitHubUserApp"
        />
        <CardView
          title="Github Android App"
          description="Aplikasi untuk menampilkan user github"
          imageSrc="/logo.png"
          link="https://github.com/ihsankarim/GitHubUserApp"
        />
      </div>
    </main>
  );
}
