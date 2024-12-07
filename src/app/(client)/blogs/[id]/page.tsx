import { Metadata, ResolvingMetadata } from "next/types";
import Shell from "./shell";
import { getBlogs } from "@/lib/getBlogs";


export default async function Blogs() {
    const blogs = await getBlogs();

    return <Shell blogs={blogs} />;
}
