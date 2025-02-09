import type { MetaFunction } from "@remix-run/node";
import { Link } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Downloader" },
    { name: "Video Downloader", content: "Welcome to Video Downloader!" },
  ];
};

export default function Index() {
  return (
    <div className="flex justify-center pt-10 space-x-10">
      <Link to={"/youtube"} className="font-bold text-2xl text-red-500 bg-gray-200 p-3 rounded-lg">YouTube</Link>
      <Link to={"/insta"} className="font-bold text-2xl text-blue-500 bg-gray-200 p-3 rounded-lg">Instagaram</Link>
      <h1>Hello</h1>
    </div>   
  );
}
