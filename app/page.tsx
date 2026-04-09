import Image from "next/image";
import {
  aboutData,
  articlesData,
  certificationsData,
  experienceData,
  profileData,
  socials,
} from "./constants/home";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 pt-16 z-20 pb-4 bg-bg-100/80 backdrop-blur-md">
        <div className="wrapper flex flex-col sm:flex-row gap-4 sm:items-center">
          <div className="size-20 relative">
            <Image
              src={profileData.img}
              alt="Kevin Kemchor"
              priority
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <h1 className="text-3xl">{profileData.name}</h1>
            <p className="text-lg mb-1">{profileData.role}</p>
            <div>
              <ul className="flex text-sm sm:text-base">
                {profileData.links.map((link, index) => {
                  return (
                    <li key={index} className="border-r px-2 first:pl-0">
                      <a
                        className="text-fg-300 hover:underline"
                        href={link.url}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="space-y-15 [&>section]:scroll-mt-48 my-8">
        <section id="about">
          <div className="wrapper">
            <h2 className="text-2xl mb-4">About</h2>
            <p className="whitespace-pre-line">{aboutData.description}</p>
          </div>
        </section>

        <section id="experience">
          <div className="wrapper">
            <h2 className="text-2xl mb-4">Experience</h2>
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <div>
                  <h3 className="mb-2 text-xl">{experienceData.role}</h3>
                  <p className="text-fg-200/70">{experienceData.company}</p>
                </div>
                <div>
                  <p>{experienceData.duration}</p>
                </div>
              </div>
              <ul className="list-disc space-y-3 px-3">
                {experienceData.activities.map((activity, index) => {
                  return <li key={index}>{activity}</li>;
                })}
              </ul>
            </div>
          </div>
        </section>

        <section id="articles">
          <div className="wrapper space-y-6">
            <h2 className="text-2xl mb-4">Articles</h2>
            <div className="space-y-6">
              {articlesData.articles.map((article) => {
                return (
                  <div key={article.id} className="space-y-3">
                    <div className="relative w-50 h-25 border-0 rounded-lg">
                      <Image
                        src={article.image}
                        alt={article.title}
                        priority
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <a
                        className=" hover:underline"
                        href={article.url}
                        target="_blank"
                      >
                        <h3 className="truncate w-[60ch] text-xl">
                          {article.title}
                        </h3>
                      </a>
                      <p className="text-sm">{article.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href={articlesData.articleProfile}
              className="flex gap-2 hover:gap-5 w-fit italic"
            >
              <span>More articles</span>
              <span> →</span>
            </a>
          </div>
        </section>

        <section id="certifications">
          <div className="wrapper">
            <h2 className="text-2xl mb-4">Certifications</h2>
            <div className="flex gap-6 flex-wrap">
              {certificationsData.map((cert) => {
                return (
                  <div key={cert.id} className="space-y-1 w-60">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
                        className="object-cover"
                      />
                    </div>

                    <h3 className="line-clamp-2 text-lg">{cert.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrapper flex flex-col items-center gap-2 py-8">
          <p>© {`${new Date().getFullYear()} - Kevin Kemchor`}</p>

          <div className="flex gap-2">
            {socials.map((social) => {
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  className="hover:text-fg-300"
                >
                  <social.icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
}
