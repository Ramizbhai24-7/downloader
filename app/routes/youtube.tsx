import { MetaFunction } from "@remix-run/node";
import YouTubeDownloader from "~/features/youtube/YouTubeDownloader";

export const meta: MetaFunction = () => {
  return [
    { title: "YouTube" },
    { name: "YouTube videos Downloader", content: "Welcome to Downloader BinancePe!" },
  ];
};

export default function Instagram() {
  return (
    <div className="flex flex-col py-8">
      <h1 className="text-balance mb-8 text-center text-4xl font-extrabold">
      YouTube Video Downloader
      </h1>
      <section className="flex flex-col items-center justify-center gap-4">
        <YouTubeDownloader />
      </section>
    </div>
  );
}