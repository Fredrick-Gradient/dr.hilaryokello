import { HeroSection } from "@/components/hero-section";
import { VideoSection } from "@/components/videos";

export default function Page() {
  // Featured video - Dr. Hilary Okello's comedy
  const featuredVideo = {
    id: "1",
    title:
      "Dr Hilary Okello funniest joke about Government Ministers in Traffic Jam.",
    duration: "18:36", // Estimated based on similar videos
    youtubeId: "uKznySp_XbE",
    views: "18K views",
    uploadedAt: "6 days ago",
    price: 4.99,
  };

  // Other recommended videos
  const videos = [
    {
      id: "2",
      title: "Comedian Hilary Okello jokes about how journalists cover stories",
      duration: "15:42",
      youtubeId: "yQMes8rjKrs", // Placeholder ID
      views: "15K views",
      uploadedAt: "2 weeks ago",
      price: 3.99,
    },
    {
      id: "3",
      title:
        "Comedian Dr Hilary Okello's amazing performance leaves audience in stitches",
      duration: "22:15",
      youtubeId: "uKznySp_XbE", // Placeholder ID
      views: "28K views",
      uploadedAt: "1 month ago",
      price: 4.99,
    },
    {
      id: "4",
      title: "The day Joel senyonyi destroyed BEBE COOL on live TV",
      duration: "10:24",
      youtubeId: "fhjcUOVzlsA", // Placeholder ID
      views: "10K views",
      uploadedAt: "5 years ago",
      price: 2.99,
    },
    {
      id: "5",
      title: "Arnez J: Not Gonna Stop (FULL Comedy Special)",
      duration: "58:30",
      youtubeId: "FgulrNwL2q8", // Placeholder ID
      views: "290K views",
      uploadedAt: "1 day ago",
      price: 7.99,
    },
  ];

  return (
    <>
      <div className="">
        {/* Full screen background */}
        <div className="min-h-screen overflow-hidden relative">
          <HeroSection />
        </div>

        {/* Video Section */}
        <div className="bg-black py-16">
          <div className="max-w-7xl mx-auto px-4">
            <VideoSection
              featuredVideo={featuredVideo}
              title="Featured Videos"
              videos={videos}
            />
          </div>
        </div>
      </div>
    </>
  );
}
